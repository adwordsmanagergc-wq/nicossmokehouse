import { useState, useEffect } from "react";
import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";
import { trackClick } from '@/react-app/utils/tracking';
import SEO from "@/react-app/components/SEO";

const FLOOR_1_IMAGE = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-floor-1.jpg";
const FLOOR_2_IMAGE_1 = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Nicos-table-4-5-6.png";
const FLOOR_2_IMAGE_2 = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Nicos-table-7-8-9.png";
const FLOOR_2_IMAGE_3 = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/Nicos-table-11-12.png";
const LOGO_URL = "https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com/nicos-logo-white.png";

// Floor 1 tables (max 4 per table)
const FLOOR_1_TABLES = [
  { id: 1, name: "Table 1", x: 70, y: 82, width: 25, height: 10, capacity: 4 },
  { id: 2, name: "Table 2", x: 38, y: 68, width: 18, height: 10, capacity: 4 },
  { id: 3, name: "Table 3", x: 25, y: 52, width: 16, height: 10, capacity: 4 },
];

// Floor 2 tables - Image 1 (tables 4, 5, 6)
const FLOOR_2_IMAGE_1_TABLES = [
  { id: 4, name: "Table 4", x: 78, y: 48, width: 18, height: 12, capacity: 2 },
  { id: 5, name: "Table 5", x: 50, y: 48, width: 16, height: 12, capacity: 2 },
  { id: 6, name: "Table 6", x: 20, y: 52, width: 18, height: 12, capacity: 4 },
];

// Floor 2 tables - Image 2 (tables 7, 8, 9)
const FLOOR_2_IMAGE_2_TABLES = [
  { id: 7, name: "Table 7", x: 38, y: 75, width: 22, height: 12, capacity: 4 },
  { id: 8, name: "Table 8", x: 58, y: 52, width: 20, height: 12, capacity: 4 },
  { id: 9, name: "Table 9", x: 48, y: 28, width: 14, height: 10, capacity: 2 },
];

// Floor 2 tables - Image 3 (tables 10, 11)
const FLOOR_2_IMAGE_3_TABLES = [
  { id: 10, name: "Table 10", x: 68, y: 55, width: 24, height: 12, capacity: 5 },
  { id: 11, name: "Table 11", x: 28, y: 55, width: 22, height: 12, capacity: 5 },
];

// Generate time slots from 12pm to 11pm in 30-minute increments
const TIME_SLOTS: string[] = [];
for (let hour = 12; hour <= 23; hour++) {
  const displayHour = hour > 12 ? hour - 12 : hour;
  const ampm = hour >= 12 ? "PM" : "AM";
  TIME_SLOTS.push(`${displayHour}:00 ${ampm}`);
  if (hour < 23) {
    TIME_SLOTS.push(`${displayHour}:30 ${ampm}`);
  }
}

// Check if a time slot qualifies for 10% off (12pm - 5pm)
const isDiscountTime = (timeSlot: string): boolean => {
  // Times that qualify: 12:00 PM through 5:00 PM
  const discountTimes = [
    "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM",
    "5:00 PM"
  ];
  return discountTimes.includes(timeSlot);
};

// All tables for capacity lookup
const ALL_TABLES = [
  ...FLOOR_1_TABLES,
  ...FLOOR_2_IMAGE_1_TABLES,
  ...FLOOR_2_IMAGE_2_TABLES,
  ...FLOOR_2_IMAGE_3_TABLES,
];

type TableType = { id: number; name: string; x: number; y: number; width: number; height: number; capacity: number };

function TableOverlay({ 
  table, 
  isSelected, 
  onToggle 
}: { 
  table: TableType; 
  isSelected: boolean; 
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`absolute transition-all duration-300 rounded-xl ${
        isSelected
          ? "bg-ember/50 border-4 border-ember shadow-[0_0_30px_10px_rgba(255,100,50,0.5)] ring-4 ring-ember/30"
          : "bg-transparent hover:bg-cream/20 border-2 border-transparent hover:border-cream/40"
      }`}
      style={{
        left: `${table.x}%`,
        top: `${table.y}%`,
        width: `${table.width}%`,
        height: `${table.height}%`,
        transform: "translate(-50%, -50%)",
      }}
      title={`${table.name} (${table.capacity} persons)`}
    >
      <SEO path="/book-table" title="Book a Table | Nico's Smokehouse Canggu, Bali" description="Reserve your table at Nico's Smokehouse — Canggu's air-conditioned BBQ & Caribbean restaurant. Open daily 12pm–midnight. 10% off lunch reservations." />
      {/* Table label */}
      <span
        className={`absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
          isSelected
            ? "bg-ember text-white scale-110 shadow-lg"
            : "bg-black/80 text-cream"
        }`}
      >
        {table.name} ({table.capacity} persons) {isSelected && "✓"}
      </span>
      
      {/* Pulsing effect when selected */}
      {isSelected && (
        <div className="absolute inset-0 rounded-xl bg-ember/30 animate-pulse" />
      )}
    </button>
  );
}

export default function TableBookingPage() {
  const [selectedTables, setSelectedTables] = useState<number[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [guestName, setGuestName] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
  const [selectedFloor, setSelectedFloor] = useState<1 | 2>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate total capacity of selected tables
  const selectedCapacity = selectedTables.reduce((total, tableId) => {
    const table = ALL_TABLES.find(t => t.id === tableId);
    return total + (table?.capacity || 0);
  }, 0);

  const hasEnoughCapacity = selectedCapacity >= numberOfGuests;

  const toggleTable = (tableId: number) => {
    setSelectedTables((prev) =>
      prev.includes(tableId)
        ? prev.filter((id) => id !== tableId)
        : [...prev, tableId]
    );
  };

  const getWhatsAppLink = () => {
    const tableNames = selectedTables
      .sort((a, b) => a - b)
      .map((id) => `Table ${id}`)
      .join(", ");
    const floorInfo = selectedTables.some(id => id >= 4) ? " (includes 2nd floor)" : "";
    const dateText = selectedDate ? ` on ${new Date(selectedDate).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}` : "";
    const timeText = selectedTime ? ` at ${selectedTime}` : "";
    const nameText = guestName ? `\n\nName: ${guestName}` : "";
    const guestText = `\nNumber of guests: ${numberOfGuests}`;
    const discountText = selectedTime && isDiscountTime(selectedTime) ? `\n\n🔥 10% OFF SPECIAL - Booking between 12pm-5pm 🔥` : "";
    const message = `Hi, I'd like to book ${tableNames}${floorInfo}${dateText}${timeText} at Nico's Smokehouse${nameText}${guestText}${discountText}`;
    return `https://wa.me/6287867966662?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm py-4 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Nico's Smokehouse" className="w-12 h-12 object-contain" />
          <span className="text-cream font-bold text-lg hidden sm:block">Nico's Smokehouse</span>
        </Link>
        <Link 
          to="/" 
          className="text-cream/70 hover:text-cream text-sm transition-colors"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-cream mb-3">
            Reserve Your Table
          </h1>
          <p className="text-cream/70">
            Tap on the tables below to select where you'd like to sit
          </p>
        </div>

        {/* Number of Guests Selector */}
        <div className="bg-wood/20 border border-wood/30 rounded-xl p-6 mb-6">
          <label htmlFor="num-guests" className="block text-cream font-bold text-lg mb-3">
            How many guests?
          </label>
          <select
            id="num-guests"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(Number(e.target.value))}
            className="w-full max-w-xs bg-white border border-wood/50 text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-ember focus:ring-2 focus:ring-ember/30 cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
          <p className="text-cream/60 text-sm mt-3">
            Select enough tables to fit your group. Current capacity: {selectedCapacity} seats selected.
          </p>
        </div>

        {/* Large Group Notice - 10+ guests */}
        {numberOfGuests >= 10 && (
          <div className="bg-amber-900/40 border border-amber-500/50 rounded-xl p-5 mb-6">
            <h3 className="text-amber-200 font-bold text-lg mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Large Group Booking
            </h3>
            <p className="text-amber-100/90 mb-3">
              For groups of 10 or more, we recommend pre-ordering your smoked meats to avoid disappointment — our signature BBQ items sell out daily!
            </p>
            <p className="text-amber-100/90 mb-3">
              Please <Link to="/" className="text-ember hover:text-ember/80 underline font-semibold">check our menu</Link> and let us know what you'd like when booking. A <span className="font-bold text-amber-200">25% deposit</span> is required to secure your smoked meat order.
            </p>
            <p className="text-amber-100/70 text-sm">
              Our staff will confirm your order and deposit details via WhatsApp.
            </p>
          </div>
        )}

        {/* Floor Selector */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setSelectedFloor(1)}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-lg transition-all ${
              selectedFloor === 1
                ? "bg-ember text-white shadow-lg"
                : "bg-wood/20 text-cream/70 hover:bg-wood/30 border border-wood/30"
            }`}
          >
            1st Floor
          </button>
          <button
            onClick={() => setSelectedFloor(2)}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-lg transition-all ${
              selectedFloor === 2
                ? "bg-ember text-white shadow-lg"
                : "bg-wood/20 text-cream/70 hover:bg-wood/30 border border-wood/30"
            }`}
          >
            2nd Floor
          </button>
        </div>

        {/* Floor 1 Content */}
        {selectedFloor === 1 && (
          <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8">
            <img
              src={FLOOR_1_IMAGE}
              alt="Nico's Smokehouse Floor 1"
              className="w-full h-auto block"
              loading="eager"
              style={{ minHeight: '200px' }}
            />
            {FLOOR_1_TABLES.map((table) => (
              <TableOverlay
                key={table.id}
                table={table}
                isSelected={selectedTables.includes(table.id)}
                onToggle={() => toggleTable(table.id)}
              />
            ))}
          </div>
        )}

        {/* Floor 2 Content */}
        {selectedFloor === 2 && (
          <div className="space-y-6 mb-8">
            {/* Wheelchair Warning */}
            <div className="bg-amber-900/40 border border-amber-600/50 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-200 font-semibold">Accessibility Notice</p>
                <p className="text-amber-200/80 text-sm">
                  The 2nd floor is not accessible via wheelchair. Please select 1st floor tables if required.
                </p>
              </div>
            </div>

            {/* Image 1: Tables 4, 5, 6 */}
            <div>
              <h3 className="text-cream font-bold text-lg mb-3">Tables 4, 5 & 6</h3>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={FLOOR_2_IMAGE_1}
                  alt="Tables 4, 5, 6"
                  className="w-full h-auto block"
                  loading="eager"
                  style={{ minHeight: '200px' }}
                />
                {FLOOR_2_IMAGE_1_TABLES.map((table) => (
                  <TableOverlay
                    key={table.id}
                    table={table}
                    isSelected={selectedTables.includes(table.id)}
                    onToggle={() => toggleTable(table.id)}
                  />
                ))}
              </div>
            </div>

            {/* Image 2: Tables 7, 8, 9 */}
            <div>
              <h3 className="text-cream font-bold text-lg mb-3">Tables 7, 8 & 9</h3>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={FLOOR_2_IMAGE_2}
                  alt="Tables 7, 8, 9"
                  className="w-full h-auto block"
                  loading="eager"
                  style={{ minHeight: '200px' }}
                />
                {FLOOR_2_IMAGE_2_TABLES.map((table) => (
                  <TableOverlay
                    key={table.id}
                    table={table}
                    isSelected={selectedTables.includes(table.id)}
                    onToggle={() => toggleTable(table.id)}
                  />
                ))}
              </div>
            </div>

            {/* Image 3: Tables 10, 11 */}
            <div>
              <h3 className="text-cream font-bold text-lg mb-3">Tables 10 & 11</h3>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={FLOOR_2_IMAGE_3}
                  alt="Tables 10, 11"
                  className="w-full h-auto block"
                  loading="eager"
                  style={{ minHeight: '200px' }}
                />
                {FLOOR_2_IMAGE_3_TABLES.map((table) => (
                  <TableOverlay
                    key={table.id}
                    table={table}
                    isSelected={selectedTables.includes(table.id)}
                    onToggle={() => toggleTable(table.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Selection Summary & Booking */}
        {selectedTables.length > 0 && (
          <div className="bg-wood/20 border border-wood/30 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-cream mb-2">
              Selected: {selectedTables.sort((a, b) => a - b).map((id) => `Table ${id}`).join(", ")}
            </h2>
            <p className="text-cream/70 text-sm mb-4">
              Total capacity: {selectedCapacity} seats
            </p>

            {/* Validation Warning */}
            {!hasEnoughCapacity && (
              <div className="bg-ember/20 border border-ember/50 rounded-lg p-4 mb-4">
                <p className="text-ember font-semibold">
                  ⚠️ Please select more tables — you need {numberOfGuests - selectedCapacity} more seats for {numberOfGuests} guests
                </p>
              </div>
            )}

            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="guest-name" className="block text-cream/80 text-sm font-medium mb-2">
                Your name
              </label>
              <input
                type="text"
                id="guest-name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter your name"
                className="w-full max-w-xs bg-white border border-wood/50 text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-ember focus:ring-2 focus:ring-ember/30 placeholder:text-gray-400"
              />
            </div>

            {/* Date Selection */}
            <div className="mb-4">
              <label htmlFor="booking-date" className="block text-cream/80 text-sm font-medium mb-2">
                Select a date
              </label>
              <input
                type="date"
                id="booking-date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full max-w-xs bg-white border border-wood/50 text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-ember focus:ring-2 focus:ring-ember/30"
              />
            </div>

            {/* Time Slot Dropdown */}
            <div className="mb-6">
              <label htmlFor="time-slot" className="block text-cream/80 text-sm font-medium mb-2">
                Select a time slot
              </label>
              <select
                id="time-slot"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full max-w-xs bg-white border border-wood/50 text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-ember focus:ring-2 focus:ring-ember/30 cursor-pointer"
              >
                <option value="">Choose a time...</option>
                {TIME_SLOTS.map((time) => (
                  <option key={time} value={time}>
                    {time}{isDiscountTime(time) ? " — 🔥 10% OFF 🔥" : ""}
                  </option>
                ))}
              </select>
              {selectedTime && isDiscountTime(selectedTime) && (
                <div className="mt-3 bg-green-900/40 border border-green-500/50 rounded-lg px-4 py-2 inline-block">
                  <span className="text-green-300 font-semibold">🔥 10% OFF applies to this time slot! 🔥</span>
                </div>
              )}
            </div>

            {hasEnoughCapacity ? (
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('whatsapp_booking')}
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp
              </a>
            ) : (
              <button
                disabled
                className="flex items-center justify-center gap-3 w-full bg-gray-500 text-white/70 py-4 px-6 rounded-xl font-bold text-lg cursor-not-allowed"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Select more tables to book
              </button>
            )}

            {/* Confirmation Note */}
            <p className="text-center text-cream/70 text-sm mt-4">
              Your booking will be confirmed via WhatsApp by our staff. Please wait for a message to confirm your reservation.
            </p>
          </div>
        )}

        {/* Instructions */}
        {selectedTables.length === 0 && (
          <div className="text-center text-cream/60 py-8">
            <p className="text-lg">👆 Tap on any table in the images above to select it</p>
            <p className="text-sm mt-2">You can select tables from both floors for larger groups</p>
          </div>
        )}
      </main>
    </div>
  );
}
