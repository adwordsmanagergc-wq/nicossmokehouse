import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Plus, Minus, ShoppingBag, MessageCircle, Store } from 'lucide-react';
import { MENU_CATEGORIES, SAUCES, EXTRA_SAUCE_PRICE, MenuItem, MenuOption } from '@/data/menuData';
import { trackClick } from '@/react-app/utils/tracking';
import SEO from "@/react-app/components/SEO";

type OrderMode = 'whatsapp' | 'instore' | null;

const LOGO_URL = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-logo-white.png";

export interface OrderItem {
  id: string;
  menuItemId: string;
  name: string;
  selectedOption?: string;
  selectedGrams?: number;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  sauces?: string[];
  addOns?: string[];
  requiresAddOn?: boolean;
}

export default function InteractiveMenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [order, setOrder] = useState<OrderItem[]>([]);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const [showOrderSlip, setShowOrderSlip] = useState(false);
  const [orderMode, setOrderMode] = useState<OrderMode>(null);

  // Check if restaurant is open (12pm-12am Bali time / UTC+8)
  const getBaliTime = () => {
    const now = new Date();
    const baliOffset = 8 * 60; // UTC+8 in minutes
    const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
    const baliMinutes = (utcMinutes + baliOffset) % (24 * 60);
    return Math.floor(baliMinutes / 60);
  };
  const baliHour = getBaliTime();
  const isOpen = baliHour >= 12; // Open from 12pm (noon) to 12am (midnight)

  // Calculate totals
  const itemsTotal = order.reduce((sum, item) => sum + item.totalPrice, 0);
  const freeSauces = 2;
  const extraSaucesCount = Math.max(0, selectedSauces.length - freeSauces);
  const saucesTotal = extraSaucesCount * EXTRA_SAUCE_PRICE;
  const subtotal = itemsTotal + saucesTotal;
  const tax = Math.round(subtotal * 0.11); // 11% government tax
  const serviceCharge = Math.round(subtotal * 0.03); // 3% service charge
  const grandTotal = subtotal + tax + serviceCharge;

  const addToOrder = (
    item: MenuItem,
    option?: MenuOption,
    grams?: number,
    itemSauces?: string[],
    addOns?: string[]
  ) => {
    const unitPrice = option?.price || (grams && item.pricePerGram ? grams * item.pricePerGram : item.price) || 0;
    const addOnsPrice = addOns?.reduce((sum, addOn) => {
      const addOnItem = item.addOns?.find(a => a.name === addOn);
      return sum + (addOnItem?.price || 0);
    }, 0) || 0;
    
    const newItem: OrderItem = {
      id: `${item.id}-${Date.now()}`,
      menuItemId: item.id,
      name: item.name,
      selectedOption: option?.label,
      selectedGrams: grams,
      quantity: 1,
      unitPrice: unitPrice + addOnsPrice,
      totalPrice: unitPrice + addOnsPrice,
      sauces: itemSauces,
      addOns,
      requiresAddOn: item.requiresAddOn
    };
    
    setOrder([...order, newItem]);
  };

  const updateQuantity = (index: number, delta: number) => {
    const newOrder = [...order];
    newOrder[index].quantity = Math.max(1, newOrder[index].quantity + delta);
    newOrder[index].totalPrice = newOrder[index].unitPrice * newOrder[index].quantity;
    setOrder(newOrder);
  };

  const removeItem = (index: number) => {
    setOrder(order.filter((_, i) => i !== index));
  };

  const toggleSauce = (sauce: string) => {
    if (selectedSauces.includes(sauce)) {
      setSelectedSauces(selectedSauces.filter(s => s !== sauce));
    } else {
      setSelectedSauces([...selectedSauces, sauce]);
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <SEO path="/order" title="Order Online | Nico's Smokehouse Menu Canggu, Bali" description="Order Texas BBQ, jerk chicken, ribs and Peri Peri online from Nico's Smokehouse Canggu. View the full menu, build your order and pickup or delivery via GoFood." />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-stone-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-amber-500 hover:text-amber-400">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
          <img src={LOGO_URL} alt="Nico's Smokehouse" className="h-12" />
          {orderMode && (
            <button 
              onClick={() => setShowOrderSlip(true)}
              className="relative flex items-center gap-2 bg-amber-600 hover:bg-amber-500 px-3 py-2 rounded-lg transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {order.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {order.length}
                </span>
              )}
            </button>
          )}
          {!orderMode && <div className="w-10" />}
        </div>
      </header>

      {/* Mode Selection Screen */}
      {!orderMode && (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">How are you ordering?</h1>
          <p className="text-stone-400 text-center text-sm mb-10">Choose your ordering method</p>
          
          <div className="max-w-md mx-auto space-y-4">
            <button
              onClick={() => setOrderMode('whatsapp')}
              className="w-full flex items-center gap-4 bg-green-600 hover:bg-green-500 p-6 rounded-2xl transition-colors group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold">{isOpen ? 'Build Order Now' : 'Build Order For Later'}</p>
                <p className="text-green-200 text-sm">Build your order on our interactive menu</p>
                <p className="text-green-200 text-sm">Delivery or Pickup • 12pm – 12am</p>
              </div>
            </button>
            
            <a
              href={isOpen ? "https://gofood.co.id/bali/restaurant/nico-s-smokehouse-tibubeneng-29af8618-1b2e-4d45-8522-e5c673344d15" : undefined}
              target={isOpen ? "_blank" : undefined}
              rel={isOpen ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (!isOpen) {
                  e.preventDefault();
                } else {
                  trackClick('gofood');
                }
              }}
              className={`w-full flex items-center gap-4 p-6 rounded-2xl transition-colors group ${
                isOpen 
                  ? 'bg-green-700 hover:bg-green-600 cursor-pointer' 
                  : 'bg-stone-700 cursor-not-allowed opacity-60'
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${isOpen ? 'bg-white/20 group-hover:scale-110' : 'bg-white/10'} transition-transform`}>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xl font-bold">Order via GoFood</p>
                <p className={`text-sm ${isOpen ? 'text-green-200' : 'text-stone-400'}`}>
                  {isOpen ? 'Delivery via Gojek' : 'Available 12pm – 12am'}
                </p>
              </div>
            </a>
            
            <button
              onClick={() => isOpen && setOrderMode('instore')}
              disabled={!isOpen}
              className={`w-full flex items-center gap-4 p-6 rounded-2xl transition-colors group ${
                isOpen 
                  ? 'bg-amber-600 hover:bg-amber-500 cursor-pointer' 
                  : 'bg-stone-700 cursor-not-allowed opacity-60'
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${isOpen ? 'bg-white/20 group-hover:scale-110' : 'bg-white/10'} transition-transform`}>
                <Store className="w-8 h-8" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold">Ordering In-Store</p>
                <p className={`text-sm ${isOpen ? 'text-amber-200' : 'text-stone-400'}`}>
                  {isOpen ? 'Show order to waitress' : 'Available 12pm – 12am'}
                </p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Main Menu Content - Only show when mode is selected */}
      {orderMode && (
        <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Build Your Order</h1>
        <p className="text-stone-400 text-center text-sm mb-1">Select items, portions, and sauces</p>
        <p className="text-stone-500 text-center text-xs italic mb-6">Macros shown are approximate only</p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pb-4 mb-6">
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {MENU_CATEGORIES.filter(cat => cat.id === activeCategory).map(category => (
          <div key={category.id} className="space-y-4">
            {category.description && (
              <p className="text-stone-400 text-sm italic mb-4">{category.description}</p>
            )}
            
            {category.items.map(item => (
              <MenuItemCard 
                key={item.id} 
                item={item} 
                onAdd={addToOrder}
              />
            ))}
          </div>
        ))}

        {/* Sauces Section */}
        <div className="mt-10 pt-6 border-t border-stone-700">
          <h2 className="text-xl font-bold mb-2">Sauces</h2>
          <p className="text-stone-400 text-sm mb-4">
            Choose 2 free sauces • Extra sauces {EXTRA_SAUCE_PRICE}K each
            {selectedSauces.length > 0 && (
              <span className="ml-2 text-amber-500">
                ({selectedSauces.length} selected{extraSaucesCount > 0 && ` • +${saucesTotal}K`})
              </span>
            )}
          </p>
          
          {/* Nico's Sauces */}
          <h3 className="text-sm font-semibold text-amber-400 mb-2 mt-4">🍯 Nico's Sauces</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {SAUCES.filter(s => !s.startsWith('Peri Peri')).map(sauce => (
              <button
                key={sauce}
                onClick={() => toggleSauce(sauce)}
                className={`px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                  selectedSauces.includes(sauce)
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {sauce}
              </button>
            ))}
          </div>
          
          {/* Peri Peri Sauces */}
          <h3 className="text-sm font-semibold text-red-400 mb-2">🌶️ Peri Peri Sauces</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {SAUCES.filter(s => s.startsWith('Peri Peri')).map(sauce => (
              <button
                key={sauce}
                onClick={() => toggleSauce(sauce)}
                className={`px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                  selectedSauces.includes(sauce)
                    ? 'bg-red-600 text-white'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {sauce.replace('Peri Peri ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Running Total Footer */}
        {order.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-stone-800 border-t border-stone-600 p-4 z-40">
            <div className="container mx-auto flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-400">{order.length} item{order.length !== 1 ? 's' : ''}</p>
                <p className="text-xl font-bold text-amber-500">{grandTotal.toLocaleString()}K</p>
              </div>
              <button
                onClick={() => setShowOrderSlip(true)}
                className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Order
              </button>
            </div>
          </div>
        )}

        {/* Order Slip Modal */}
        {showOrderSlip && (
          <OrderSlipModal
            order={order}
            selectedSauces={selectedSauces}
            itemsTotal={itemsTotal}
            saucesTotal={saucesTotal}
            subtotal={subtotal}
            tax={tax}
            serviceCharge={serviceCharge}
            grandTotal={grandTotal}
            orderMode={orderMode}
            onClose={() => setShowOrderSlip(false)}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
          />
        )}
      </div>
      )}
      
      {/* Spacer for fixed footer */}
      {orderMode && order.length > 0 && <div className="h-24" />}
    </div>
  );
}

// Peri Peri sauce options (subset of SAUCES for peri peri chicken)
const PERI_PERI_SAUCES = [
  "Lemon + Herb",
  "Mild",
  "Hot", 
  "Extra Hot",
  "Mango + Herb",
  "Mango + Lime"
];

// Menu Item Card Component
function MenuItemCard({ 
  item, 
  onAdd 
}: { 
  item: MenuItem; 
  onAdd: (item: MenuItem, option?: MenuOption, grams?: number, sauces?: string[], addOns?: string[]) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<MenuOption | null>(
    item.options ? item.options[0] : null
  );
  const [selectedGrams, setSelectedGrams] = useState<number>(
    item.gramOptions ? item.gramOptions[0] : 0
  );
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedPeriSauce, setSelectedPeriSauce] = useState<string>(
    item.requiresSauce ? PERI_PERI_SAUCES[0] : ''
  );

  const toggleAddOn = (addOnName: string) => {
    if (selectedAddOns.includes(addOnName)) {
      setSelectedAddOns(selectedAddOns.filter(a => a !== addOnName));
    } else {
      setSelectedAddOns([...selectedAddOns, addOnName]);
    }
  };

  const getCurrentPrice = () => {
    if (selectedOption) return selectedOption.price;
    if (item.gramOptions && item.pricePerGram) return selectedGrams * item.pricePerGram;
    return item.price || 0;
  };

  const addOnsPrice = selectedAddOns.reduce((sum, addOn) => {
    const addOnItem = item.addOns?.find(a => a.name === addOn);
    return sum + (addOnItem?.price || 0);
  }, 0);

  const handleAdd = () => {
    const sauceArray = item.requiresSauce && selectedPeriSauce ? [selectedPeriSauce] : undefined;
    onAdd(item, selectedOption || undefined, selectedGrams || undefined, sauceArray, selectedAddOns.length > 0 ? selectedAddOns : undefined);
    setSelectedAddOns([]);
  };

  return (
    <div className="bg-stone-800 rounded-xl p-4">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-white">{item.name}</h3>
          {item.description && (
            <p className="text-stone-400 text-sm mt-1">{item.description}</p>
          )}
          {/* Macros display */}
          {(() => {
            const macros = selectedOption?.macros || item.macros;
            if (!macros) return null;
            const isPerGram = item.gramOptions && item.pricePerGram;
            return (
              <p className="text-stone-500 text-xs mt-1 italic">
                ~{macros.cal} cal · {macros.protein}g protein · {macros.carbs}g carbs · {macros.fat}g fat
                {isPerGram && ' (per 100g)'}
              </p>
            );
          })()}
        </div>
        
        {/* Simple fixed price item */}
        {item.price && !item.options && !item.gramOptions && (
          <div className="flex items-center gap-3">
            <span className="text-amber-500 font-bold">{item.price}K</span>
            <button
              onClick={handleAdd}
              className="bg-amber-600 hover:bg-amber-500 p-2 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Options selector for items with choices */}
      {(item.options || item.gramOptions || item.addOns) && (
        <div className="mt-3 space-y-3">
          {/* Size/Portion Options */}
          {item.options && (
            <div className="flex flex-wrap gap-2">
              {item.options.map(opt => (
                <button
                  key={opt.label}
                  onClick={() => setSelectedOption(opt)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    selectedOption?.label === opt.label
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                  }`}
                >
                  {opt.label} - {opt.price}K
                </button>
              ))}
            </div>
          )}

          {/* Peri Peri Sauce Selector */}
          {item.requiresSauce && (
            <div className="space-y-2">
              <p className="text-amber-400 text-sm font-medium">Choose your Peri Peri flavour:</p>
              <div className="flex flex-wrap gap-2">
                {PERI_PERI_SAUCES.map(sauce => (
                  <button
                    key={sauce}
                    onClick={() => setSelectedPeriSauce(sauce)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      selectedPeriSauce === sauce
                        ? 'bg-red-600 text-white'
                        : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                    }`}
                  >
                    {sauce}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Gram selector for brisket */}
          {item.gramOptions && item.pricePerGram && (
            <div className="flex items-center gap-3">
              <select
                value={selectedGrams}
                onChange={(e) => setSelectedGrams(Number(e.target.value))}
                className="bg-stone-700 text-white px-3 py-2 rounded-lg"
              >
                {item.gramOptions.map(g => (
                  <option key={g} value={g}>{g}g - {g * item.pricePerGram!}K</option>
                ))}
              </select>
            </div>
          )}

          {/* Add-ons */}
          {item.addOns && (
            <div className="space-y-2">
              <p className="text-stone-400 text-xs">
                {item.requiresAddOn ? 'Select topping:' : 'Add-ons:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.addOns.map(addOn => (
                  <button
                    key={addOn.name}
                    onClick={() => toggleAddOn(addOn.name)}
                    className={`px-2 py-1 rounded text-xs transition-colors ${
                      selectedAddOns.includes(addOn.name)
                        ? 'bg-green-600 text-white'
                        : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                    }`}
                  >
                    {addOn.price > 0 ? `${addOn.name} +${addOn.price}K` : addOn.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add button with price */}
          <div className="flex justify-between items-center pt-2">
            <span className="text-amber-500 font-bold text-lg">
              {(getCurrentPrice() + addOnsPrice)}K
            </span>
            <button
              onClick={handleAdd}
              disabled={item.requiresAddOn && selectedAddOns.length === 0}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                item.requiresAddOn && selectedAddOns.length === 0
                  ? 'bg-stone-600 text-stone-400 cursor-not-allowed'
                  : 'bg-amber-600 hover:bg-amber-500'
              }`}
            >
              <Plus className="w-4 h-4" />
              {item.requiresAddOn && selectedAddOns.length === 0 ? 'Select topping' : 'Add'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Order Slip Modal
function OrderSlipModal({
  order,
  selectedSauces,
  itemsTotal,
  saucesTotal,
  subtotal,
  tax,
  serviceCharge,
  grandTotal,
  orderMode,
  onClose,
  onUpdateQuantity,
  onRemoveItem
}: {
  order: OrderItem[];
  selectedSauces: string[];
  itemsTotal: number;
  saucesTotal: number;
  subtotal: number;
  tax: number;
  serviceCharge: number;
  grandTotal: number;
  orderMode: OrderMode;
  onClose: () => void;
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
}) {
  const [showWaitressView, setShowWaitressView] = useState(false);
  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');

  // Build WhatsApp message
  const buildWhatsAppMessage = () => {
    let message = `🔥 *NICO'S SMOKEHOUSE ORDER*\n\n`;
    message += `👤 Name: ${customerName}\n`;
    message += `📦 ${deliveryMethod === 'pickup' ? 'Pickup' : 'Delivery'}\n\n`;
    message += `*ORDER DETAILS:*\n`;
    message += `─────────────────\n`;
    
    order.forEach(item => {
      message += `• ${item.quantity}x ${item.name}`;
      if (item.selectedOption) message += ` (${item.selectedOption})`;
      if (item.selectedGrams) message += ` (${item.selectedGrams}g)`;
      message += ` - ${item.totalPrice}K\n`;
      if (item.sauces && item.sauces.length > 0) {
        message += `  🌶️ ${item.sauces.join(', ')}\n`;
      }
      if (item.addOns && item.addOns.length > 0) {
        message += `  + ${item.addOns.join(', ')}\n`;
      }
    });
    
    if (selectedSauces.length > 0) {
      message += `\n*SAUCES:* ${selectedSauces.join(', ')}\n`;
    }
    
    message += `\n─────────────────\n`;
    message += `Subtotal: ${subtotal.toLocaleString()}K\n`;
    message += `Tax (11%): ${tax.toLocaleString()}K\n`;
    message += `Service (3%): ${serviceCharge.toLocaleString()}K\n`;
    message += `*TOTAL: ${grandTotal.toLocaleString()}K*\n`;
    
    return encodeURIComponent(message);
  };

  const handleSendWhatsApp = () => {
    trackClick('whatsapp_order');
    const message = buildWhatsAppMessage();
    window.open(`https://wa.me/6287867966662?text=${message}`, '_blank');
  };

  // Waitress View - Clean receipt-style display
  if (showWaitressView) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
        <div className="bg-cream text-stone-900 w-full max-w-md max-h-[95vh] overflow-y-auto rounded-lg shadow-2xl font-mono">
          {/* Receipt Header */}
          <div className="text-center pt-6 pb-4 border-b-2 border-dashed border-stone-300">
            <img 
              src="https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-logo-white.png" 
              alt="Nico's" 
              className="h-16 mx-auto mb-2 bg-stone-900 rounded-full p-2"
            />
            <h1 className="text-xl font-bold tracking-wide">NICO'S SMOKEHOUSE</h1>
            <p className="text-xs text-stone-500 mt-1">BBQ & GRILL • CANGGU, BALI</p>
            {tableNumber && (
              <div className="mt-3 inline-block bg-stone-900 text-white px-4 py-2 rounded-lg">
                <span className="text-xs">TABLE</span>
                <span className="text-2xl font-bold ml-2">{tableNumber}</span>
              </div>
            )}
          </div>

          {/* Order Items */}
          <div className="px-4 py-4 border-b-2 border-dashed border-stone-300">
            <div className="text-xs text-stone-500 flex justify-between mb-3 pb-2 border-b border-stone-200">
              <span>ITEM</span>
              <span>QTY × PRICE</span>
            </div>
            
            {order.map((item) => (
              <div key={item.id} className="mb-3 pb-2 border-b border-stone-100 last:border-0">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <p className="font-bold text-sm uppercase">{item.name}</p>
                    {item.selectedOption && (
                      <p className="text-xs text-stone-600">↳ {item.selectedOption}</p>
                    )}
                    {item.selectedGrams && (
                      <p className="text-xs text-stone-600">↳ {item.selectedGrams}g</p>
                    )}
                    {item.sauces && item.sauces.length > 0 && (
                      <p className="text-xs text-red-600 font-medium">🌶️ {item.sauces.join(', ')}</p>
                    )}
                    {item.addOns && item.addOns.length > 0 && (
                      <p className="text-xs text-green-700">+ {item.addOns.join(', ')}</p>
                    )}
                  </div>
                  <div className="text-right text-sm">
                    <span className="text-stone-500">{item.quantity}×</span>
                    <span className="font-bold ml-1">{item.unitPrice}K</span>
                    {item.quantity > 1 && (
                      <p className="text-xs text-stone-600">= {item.totalPrice}K</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Sauces */}
            {selectedSauces.length > 0 && (
              <div className="mt-3 pt-3 border-t border-stone-200">
                <p className="text-xs font-bold mb-1">SAUCES:</p>
                <div className="flex flex-wrap gap-1">
                  {selectedSauces.map((sauce, i) => (
                    <span key={sauce} className="text-xs bg-stone-200 px-2 py-0.5 rounded">
                      {sauce}{i >= 2 && ' (+10K)'}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Totals */}
          <div className="px-4 py-4 space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-stone-600">Subtotal</span>
              <span>{subtotal.toLocaleString()}K</span>
            </div>
            <div className="flex justify-between text-stone-500 text-xs">
              <span>Tax (11%)</span>
              <span>{tax.toLocaleString()}K</span>
            </div>
            <div className="flex justify-between text-stone-500 text-xs">
              <span>Service (3%)</span>
              <span>{serviceCharge.toLocaleString()}K</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-3 mt-2 border-t-2 border-double border-stone-400">
              <span>TOTAL</span>
              <span>{grandTotal.toLocaleString()}K</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-4 bg-stone-100 text-xs text-stone-500">
            <p>- - - SHOW THIS TO YOUR SERVER - - -</p>
            <p className="mt-1">Thank you for dining with us! 🔥</p>
          </div>

          {/* Back Button */}
          <button
            onClick={() => setShowWaitressView(false)}
            className="w-full py-4 bg-stone-800 text-white font-semibold hover:bg-stone-700 transition-colors"
          >
            ← Back to Edit Order
          </button>
        </div>
      </div>
    );
  }

  // Edit View - Default view with quantity controls
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-stone-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b border-stone-700 flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Order</h2>
          <button onClick={onClose} className="text-stone-400 hover:text-white text-2xl">&times;</button>
        </div>
        
        {/* Table Number Input */}
        <div className="px-4 pt-4">
          <label className="text-stone-400 text-sm">Table Number (optional)</label>
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            placeholder="e.g. 5"
            className="mt-1 w-24 bg-stone-700 text-white px-3 py-2 rounded-lg text-center text-lg font-bold"
          />
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {order.length === 0 ? (
            <p className="text-stone-400 text-center py-8">Your order is empty</p>
          ) : (
            order.map((item, index) => (
              <div key={item.id} className="bg-stone-700/80 rounded-xl p-4 border border-stone-600">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <p className="text-lg font-bold text-white">{item.quantity}× {item.name}</p>
                    {item.selectedOption && (
                      <p className="text-amber-400 text-sm mt-1">→ {item.selectedOption}</p>
                    )}
                    {item.selectedGrams && (
                      <p className="text-amber-400 text-sm mt-1">→ {item.selectedGrams}g portion</p>
                    )}
                    {item.sauces && item.sauces.length > 0 && (
                      <p className="text-red-400 text-sm mt-1">🌶️ {item.sauces.join(', ')}</p>
                    )}
                    {item.addOns && item.addOns.length > 0 && (
                      <p className="text-green-400 text-sm mt-1">+ {item.addOns.join(', ')}</p>
                    )}
                  </div>
                  <p className="text-xl text-amber-500 font-bold">{item.totalPrice}K</p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-stone-600">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onUpdateQuantity(index, -1)}
                      className="bg-stone-600 hover:bg-stone-500 p-2 rounded-lg"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold text-lg">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(index, 1)}
                      disabled={item.requiresAddOn}
                      className={`p-2 rounded-lg ${item.requiresAddOn ? 'bg-stone-700 text-stone-500 cursor-not-allowed' : 'bg-stone-600 hover:bg-stone-500'}`}
                      title={item.requiresAddOn ? 'Add from menu to select topping' : undefined}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="text-red-400 hover:text-red-300 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Selected Sauces */}
          {selectedSauces.length > 0 && (
            <div className="bg-stone-700 rounded-lg p-3">
              <p className="font-medium mb-2">Sauces</p>
              <div className="flex flex-wrap gap-1">
                {selectedSauces.map((sauce, i) => (
                  <span key={sauce} className={`text-xs px-2 py-1 rounded ${i < 2 ? 'bg-green-600' : 'bg-amber-600'}`}>
                    {sauce} {i >= 2 && `+${EXTRA_SAUCE_PRICE}K`}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Totals - Compact */}
        <div className="p-3 border-t border-stone-700 bg-stone-900/50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="flex flex-wrap gap-x-3 gap-y-0 text-xs text-stone-500">
              <span>Items {itemsTotal.toLocaleString()}K</span>
              {saucesTotal > 0 && <span>• Sauces {saucesTotal}K</span>}
              <span>• Tax {tax.toLocaleString()}K</span>
              <span>• Service {serviceCharge.toLocaleString()}K</span>
            </div>
            <div className="text-xl font-bold text-amber-500">Total: {grandTotal.toLocaleString()}K</div>
          </div>
          
          {orderMode === 'whatsapp' ? (
            <div className="mt-4 space-y-3">
              {/* Customer Name */}
              <div>
                <label className="block text-sm text-stone-400 mb-1">Your Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-stone-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              {/* Pickup / Delivery Toggle */}
              <div>
                <label className="block text-sm text-stone-400 mb-1">Order Type</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                      deliveryMethod === 'pickup'
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                    }`}
                  >
                    🏃 Pickup
                  </button>
                  <button
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                      deliveryMethod === 'delivery'
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                    }`}
                  >
                    🛵 Delivery
                  </button>
                </div>
              </div>
              
              {/* Send to WhatsApp Button */}
              <button
                onClick={handleSendWhatsApp}
                disabled={order.length === 0 || !customerName.trim()}
                className="w-full bg-green-600 hover:bg-green-500 disabled:bg-stone-600 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send Order via WhatsApp
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowWaitressView(true)}
              disabled={order.length === 0}
              className="w-full mt-4 bg-green-600 hover:bg-green-500 disabled:bg-stone-600 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition-colors"
            >
              Show to Waitress →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
