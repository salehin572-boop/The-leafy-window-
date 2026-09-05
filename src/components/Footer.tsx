import { useState, FormEvent } from 'react';
import { ArrowRight, Check, Sparkles, Heart, Sun } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer id="main-footer" className="bg-[#1a3c34] text-[#f9f8f4] pt-16 pb-12 border-t-4 border-[#4caf50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Tagline, Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              {/* Circular Brand Logo Emblem */}
              <BrandLogo size="lg" className="border-2 border-[#4caf50] shadow-md" />
              <div>
                <span className="text-2xl font-serif font-bold tracking-tight text-[#f9f8f4]">
                  The Leafy{' '}
                  <span className="script font-script text-[#c56d44] text-3xl font-normal">
                    Window
                  </span>
                </span>
              </div>
            </div>

            {/* Brand Tagline requested */}
            <div className="pt-1">
              <p className="script font-script text-2xl text-[#c56d44] font-normal tracking-wide">
                Grow • Care • Thrive
              </p>
              <p className="text-xs sm:text-sm text-[#f9f8f4]/75 max-w-sm mt-2 leading-relaxed">
                A sanctuary for sunlit indoor gardening, expert botanical guidance, and natural pottery living.
              </p>
            </div>
          </div>

          {/* Simple Newsletter Signup requested */}
          <div className="lg:col-span-7 bg-white/5 p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div className="space-y-1.5 mb-4">
              <div className="inline-flex items-center gap-1.5 text-[10px] tracking-[2px] uppercase text-[#66bb6a] font-bold">
                <Sparkles className="w-3 h-3 text-[#c56d44]" />
                <span>Weekly Greenhouse Dispatch</span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#f9f8f4]">
                Subscribe for weekly plant care tips.
              </h3>
              <p className="text-xs text-[#f9f8f4]/75">
                Seasonal pruning advice, propagation schedules, and alerts whenever fresh window-grown varieties arrive.
              </p>
            </div>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#4caf50]/20 border border-[#4caf50] text-[#66bb6a] text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>You're on the list! Welcome to The Leafy Window family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-2.5 rounded-full bg-[#f9f8f4] text-[#1a3c34] text-sm placeholder:text-[#1a3c34]/50 focus:outline-hidden focus:ring-2 focus:ring-[#4caf50]"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#4caf50] hover:bg-[#43a047] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Join The Window</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Middle Tier: Navigation Links */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs sm:text-sm border-b border-white/10">
          <div>
            <h4 className="font-serif font-bold text-sm text-[#f9f8f4] uppercase tracking-wider mb-3">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-[#f9f8f4]/70">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#66bb6a] transition-colors cursor-pointer text-left">
                  Home Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('plants')} className="hover:text-[#66bb6a] transition-colors cursor-pointer text-left">
                  Plant Directory & Matcher
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('problems')} className="hover:text-[#66bb6a] transition-colors cursor-pointer text-left">
                  Plant Problem Triage Center
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guides')} className="hover:text-[#66bb6a] transition-colors cursor-pointer text-left">
                  Botanical Care Manuals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#66bb6a] transition-colors cursor-pointer text-left">
                  Indoor Plant Essentials Shop
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-[#f9f8f4] uppercase tracking-wider mb-3">
              Tools & Editorial
            </h4>
            <ul className="space-y-2 text-[#f9f8f4]/70">
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-[#66bb6a] transition-colors text-left cursor-pointer">
                  Window Light Compass Tool
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('problems')} className="hover:text-[#66bb6a] transition-colors text-left cursor-pointer">
                  Plant Problem Finder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-[#66bb6a] transition-colors text-left cursor-pointer">
                  Curated Gear Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-[#66bb6a] transition-colors text-left cursor-pointer">
                  Botanical Field Notes & Articles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#66bb6a] transition-colors text-left cursor-pointer">
                  Plant Doctor Consultation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-[#f9f8f4] uppercase tracking-wider mb-3">
              Plant Care Values
            </h4>
            <ul className="space-y-2 text-[#f9f8f4]/70">
              <li className="flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-[#e5b54f]" />
                <span>Windowsill Acclimated</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#4caf50]">✓</span>
                <span>Porous Clay Terracotta</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#4caf50]">✓</span>
                <span>Peat-Free Living Soil</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#4caf50]">✓</span>
                <span>Zero Synthetic Gloss</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-[#f9f8f4] uppercase tracking-wider mb-3">
              Greenhouse Studio
            </h4>
            <div className="space-y-1.5 text-[#f9f8f4]/70 text-xs leading-relaxed">
              <p>482 Botanical Way, Greenhouse #4</p>
              <p>Portland, OR 97201</p>
              <p>hello@theleafywindow.com</p>
              <p>(555) 742-6800</p>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Ethos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f9f8f4]/60">
          <p>© {new Date().getFullYear()} The Leafy Window Co. All botanical rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Rooted with care for plant lovers everywhere.</span>
            <span className="script font-script text-[#c56d44] text-lg">Grow • Care • Thrive</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
