import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Flame, Calendar } from 'lucide-react';

const ASSET_BASE = 'https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com';

const BLOG_POSTS = [
  {
    slug: 'texas-smoke-meets-caribbean-soul-bbq-king-canggu',
    title: 'Texas Smoke Meets Caribbean Soul: Why Nico\'s is the BBQ King of Canggu',
    excerpt: "The ultimate Canggu BBQ guide. Texas smoked brisket, Caribbean soul food, and Peri Peri fire — all under one roof in Tibubeneng.",
    image: `${ASSET_BASE}/Screenshot-2026-03-20-at-4.31.08-pm.png`,
    category: 'BBQ Guide',
    date: 'January 2025',
  },
  {
    slug: 'where-to-get-authentic-bbq-in-canggu-bali',
    title: 'Where to Get Authentic BBQ in Canggu, Bali',
    excerpt: "Not all BBQ is actually BBQ. Most restaurants are simply grilling meat over high heat. This guide breaks down what authentic BBQ really means and where to find it.",
    image: `${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.50-pm.png`,
    category: 'BBQ Guide',
    date: 'January 2025',
  },
  {
    slug: 'what-is-the-best-bbq-restaurant-in-canggu',
    title: 'What is the Best BBQ Restaurant in Canggu?',
    excerpt: "If you're searching for the best BBQ in Canggu, you're not alone. Learn what defines great BBQ and how to find authentic slow-smoked meats in Bali.",
    image: `${ASSET_BASE}/Screenshot-2026-03-20-at-4.30.38-pm.png`,
    category: 'BBQ Guide',
    date: 'January 2025',
  },
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="min-h-screen text-stone-100"
      style={{ 
        backgroundImage: `url(${ASSET_BASE}/openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="min-h-screen bg-black/85">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-sm border-b border-stone-800">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
              <span className="font-medium">← Back to Home</span>
            </Link>
            <Link to="/">
              <img 
                src={`${ASSET_BASE}/nicos-logo-white.png`}
                alt="Nico's Smokehouse"
                className="h-12"
              />
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-amber-400 mb-4">
              <Flame className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Nico's Smokehouse</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              BBQ guides, tips, and stories from Canggu's favourite smokehouse
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-stone-900/80 rounded-xl overflow-hidden border border-stone-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-stone-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {BLOG_POSTS.length === 0 && (
              <div className="text-center py-16">
                <p className="text-stone-400 text-lg">
                  More articles coming soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 rounded-2xl p-8 border border-amber-500/30 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Taste the Best BBQ in Canggu?
              </h2>
              <p className="text-stone-300 mb-6">
                Book a table or check out our menu
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/book-table"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all"
                >
                  Book a Table
                </Link>
                <Link 
                  to="/order"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-800 border border-amber-500/50 text-amber-400 font-bold rounded-lg hover:bg-stone-700 transition-all"
                >
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-stone-800">
          <div className="max-w-5xl mx-auto text-center">
            <Link to="/">
              <img 
                src={`${ASSET_BASE}/nicos-logo-white.png`}
                alt="Nico's Smokehouse"
                className="w-20 mx-auto mb-4"
              />
            </Link>
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Nico's Smokehouse. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
