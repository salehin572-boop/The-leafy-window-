import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Sun, Sparkles, ChevronDown } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  activeSection: string;
  onNavigate: (sectionId: string, subOption?: string) => void;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenSearch,
  activeSection,
  onNavigate,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Plants', id: 'plants' },
    { label: 'Plant Problems', id: 'problems' },
    { label: 'Guides', id: 'guides' },
    { label: 'Shop', id: 'shop' },
    { label: 'Reviews', id: 'reviews' },
    {
      label: 'Tools',
      id: 'tools',
      isDropdown: true,
      subItems: [
        { label: 'Window Light Guide', id: 'window-light' },
        { label: 'Plant Problem Finder', id: 'diagnostic-tool' },
      ],
    },
    { label: 'Articles', id: 'articles' },
  ];

  const handleNavClick = (id: string, subOption?: string) => {
    onNavigate(id, subOption);
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#e9e5db] py-3'
          : 'bg-[#f9f8f4]/90 backdrop-blur-xs py-4 border-b border-[#e9e5db]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[50px]">
          {/* Left: Brand Logo & Title */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
            aria-label="The Leafy Window Home"
          >
            {/* Circular Botanical Brand Logo Emblem */}
            <BrandLogo size="md" className="border-2 border-[#1a3c34]/20 group-hover:border-[#4caf50]" />

            <div className="flex flex-col">
              <span className="serif text-xl sm:text-2xl font-bold tracking-tight text-[#1a3c34] leading-none">
                The Leafy{' '}
                <span className="script font-script text-[#c56d44] text-2xl sm:text-3xl font-normal tracking-normal -ml-1">
                  Window
                </span>
              </span>
              <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44] mt-0.5">
                Grow • Care • Thrive
              </span>
            </div>
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navItems.map((item) => {
              if (item.isDropdown && item.subItems) {
                const isToolActive = activeSection === 'tools' || activeSection === 'window-light' || activeSection === 'diagnostic-tool';
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setToolsDropdownOpen(true)}
                    onMouseLeave={() => setToolsDropdownOpen(false)}
                  >
                    <button
                      id="nav-link-tools"
                      onClick={() => handleNavClick('tools', 'window-light')}
                      className={`relative text-[13px] font-medium tracking-wide py-1 transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                        isToolActive
                          ? 'text-[#1a3c34] font-bold opacity-100'
                          : 'text-[#1a3c34] opacity-80 hover:opacity-100 hover:text-[#4caf50]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                      {isToolActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4caf50] rounded-full" />
                      )}
                    </button>

                    {/* Tools Dropdown Menu */}
                    {toolsDropdownOpen && (
                      <div className="absolute top-full left-0 w-52 bg-white rounded-2xl shadow-xl border border-[#e9e5db] py-2 animate-scale-in z-50">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick('tools', sub.id)}
                            className="w-full text-left px-4 py-2 text-xs font-semibold text-[#1a3c34] hover:bg-[#edf7ed] hover:text-[#4caf50] transition-colors cursor-pointer"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-[13px] font-medium tracking-wide py-1 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#1a3c34] font-bold opacity-100'
                      : 'text-[#1a3c34] opacity-80 hover:opacity-100 hover:text-[#4caf50]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4caf50] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions (Search & Cart & Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon */}
            <button
              id="nav-search-btn"
              onClick={onOpenSearch}
              aria-label="Search care guides, problems, and products"
              className="p-2 rounded-full text-[#1a3c34] opacity-75 hover:opacity-100 hover:text-[#4caf50] hover:bg-[#e9e5db]/50 transition-all duration-200 active:scale-95 cursor-pointer"
              title="Search guides, problems, and gear"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Cart Icon with dynamic counter */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              aria-label={`Shopping Cart with ${cartCount} items`}
              className="relative p-2 rounded-full text-[#1a3c34] opacity-75 hover:opacity-100 hover:text-[#4caf50] hover:bg-[#e9e5db]/50 transition-all duration-200 active:scale-95 cursor-pointer"
              title="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span
                  id="nav-cart-badge"
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-[#4caf50] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs animate-scale-in"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#1a3c34] hover:bg-[#e9e5db]/50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#e9e5db] space-y-2 bg-[#f9f8f4] animate-scale-in">
            {navItems.map((item) => {
              if (item.isDropdown && item.subItems) {
                return (
                  <div key={item.id} className="space-y-1 pl-2">
                    <p className="text-xs font-bold text-[#c56d44] uppercase tracking-wider py-1">
                      Tools
                    </p>
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick('tools', sub.id)}
                        className="block w-full text-left py-1.5 px-3 text-sm font-medium text-[#1a3c34] hover:text-[#4caf50]"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-2 px-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#1a3c34] text-white font-bold'
                      : 'text-[#1a3c34] hover:bg-[#e9e5db]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-2 border-t border-[#e9e5db] flex items-center justify-between px-3 text-xs text-[#1a3c34]/70">
              <button onClick={() => handleNavClick('about')} className="hover:underline">
                About Us
              </button>
              <button onClick={() => handleNavClick('contact')} className="hover:underline">
                Plant Doctor
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
