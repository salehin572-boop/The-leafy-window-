import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PageHeader from './components/PageHeader';
import HomePage from './components/HomePage';
import PlantDiscoverySection from './components/PlantDiscoverySection';
import ProblemFinderTool from './components/ProblemFinderTool';
import PlantProblemsSection from './components/PlantProblemsSection';
import PlantGuidesSection from './components/PlantGuidesSection';
import StoreSection from './components/StoreSection';
import DigitalProductsSection from './components/DigitalProductsSection';
import ReviewsSection from './components/ReviewsSection';
import ToolsPage from './components/ToolsPage';
import ArticlesSection from './components/ArticlesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Modals & Drawers
import GuideModal from './components/GuideModal';
import ProblemModal from './components/ProblemModal';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';

// Types & Data
import { PlantGuide, PlantProblem, DigitalProduct, Article, Product, CartItem } from './types';
import { PLANT_GUIDES, DIGITAL_PRODUCTS } from './data/knowledgeData';
import { ALL_PLANT_PROBLEMS } from './data/plantProblemsData';
import { ALL_SHOP_PRODUCTS } from './data/shopData';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Cart state (persisted)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('leafy_window_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    // Seed with 1 initial sample digital guide to demonstrate the cart capability immediately
    const firstDigital = DIGITAL_PRODUCTS[0];
    return [
      {
        product: {
          id: firstDigital.id,
          name: firstDigital.title,
          price: firstDigital.price,
          image: firstDigital.coverImage,
          type: 'digital',
          subtitle: firstDigital.format,
        },
        quantity: 1,
      },
    ];
  });

  // Page Routing & Navigation State
  const getInitialPage = (): string => {
    if (typeof window === 'undefined') return 'home';
    const hash = window.location.hash.replace('#', '').trim();
    const validPages = [
      'home',
      'plants',
      'problems',
      'guides',
      'shop',
      'reviews',
      'tools',
      'articles',
      'about',
      'contact',
    ];
    if (validPages.includes(hash)) return hash;
    if (hash === 'store') return 'shop';
    if (hash === 'vlog') return 'guides';
    if (hash === 'window-light') return 'tools';
    if (hash === 'diagnostic-tool') return 'tools';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);
  const [toolSubTab, setToolSubTab] = useState<'window-light' | 'diagnostic-tool'>('window-light');

  // Modals & Drawer State
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedGuide, setSelectedGuide] = useState<PlantGuide | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<PlantProblem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('leafy_window_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Listen to browser back/forward and direct hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const navigateToPage = (pageId: string, subOption?: string) => {
    let targetPage = pageId;
    if (targetPage === 'store') targetPage = 'shop';
    if (targetPage === 'vlog') targetPage = 'guides';
    if (targetPage === 'window-light') {
      targetPage = 'tools';
      setToolSubTab('window-light');
    } else if (targetPage === 'diagnostic-tool') {
      targetPage = 'tools';
      setToolSubTab('diagnostic-tool');
    }

    if (subOption) {
      setToolSubTab(subOption as 'window-light' | 'diagnostic-tool');
    }

    setCurrentPage(targetPage);
    window.location.hash = targetPage;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleAddDigitalProductToCart = (prod: DigitalProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === prod.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === prod.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          product: {
            id: prod.id,
            name: prod.title,
            price: prod.price,
            image: prod.coverImage,
            type: 'digital',
            subtitle: prod.format,
          },
          quantity: 1,
        },
      ];
    });
    showToast(`Added "${prod.title}" to your cart!`);
    setIsCartOpen(true);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          product: {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            type: 'physical',
            subtitle: product.potSize || product.subcategory,
          },
          quantity,
        },
      ];
    });
    showToast(`Added "${product.name}" to cart!`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f9f8f4] flex flex-col text-[#1a3c34]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1a3c34] text-[#f9f8f4] px-5 py-3 rounded-full shadow-2xl border border-[#4caf50] flex items-center gap-3 animate-fade-in">
          <div className="w-7 h-7 rounded-full bg-[#4caf50] flex items-center justify-center text-white shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-xs font-bold text-[#66bb6a] hover:underline uppercase tracking-wider cursor-pointer"
          >
            Open Cart
          </button>
        </div>
      )}

      {/* Sticky Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeSection={currentPage}
        onNavigate={navigateToPage}
      />

      {/* Page Routing Switcher */}
      <main className="flex-grow">
        {/* 1. HOME PAGE */}
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateToPage}
            onSelectGuide={(guide) => setSelectedGuide(guide)}
            onSelectProblem={(prob) => setSelectedProblem(prob)}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onAddToCart={handleAddToCart}
          />
        )}

        {/* 2. PLANTS DIRECTORY PAGE */}
        {currentPage === 'plants' && (
          <div>
            <PageHeader
              title="Indoor Plant Directory & Matcher"
              subtitle="Discover houseplants calibrated for your exact window light, watering habits, space constraints, and pet safety."
              badge="12 Curated Indoor Species"
              breadcrumbs={[{ label: 'Plants Directory' }]}
              onNavigate={navigateToPage}
              actions={
                <button
                  onClick={() => navigateToPage('guides')}
                  className="px-4 py-2 rounded-full border border-[#1a3c34] text-[#1a3c34] text-xs font-bold uppercase tracking-wider hover:bg-[#1a3c34] hover:text-white transition-colors cursor-pointer"
                >
                  View Field Manuals
                </button>
              }
            />
            <PlantDiscoverySection
              onSelectGuideById={(guideId) => {
                const guide = PLANT_GUIDES.find((g) => g.id === guideId);
                if (guide) {
                  setSelectedGuide(guide);
                } else {
                  navigateToPage('guides');
                }
              }}
              onNavigateToShop={() => navigateToPage('shop')}
            />
          </div>
        )}

        {/* 3. PLANT PROBLEMS DIAGNOSTIC PAGE */}
        {currentPage === 'problems' && (
          <div>
            <PageHeader
              title="Plant Problem Diagnostic Center"
              subtitle="Visual triage files, physical checks at root level, immediate recovery protocols, and emergency care routines."
              badge="Botanical Triage Desk"
              breadcrumbs={[{ label: 'Plant Problems' }]}
              onNavigate={navigateToPage}
              actions={
                <button
                  onClick={() => navigateToPage('contact')}
                  className="px-4 py-2 rounded-full bg-[#c56d44] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#a95732] transition-colors cursor-pointer shadow-xs"
                >
                  Ask Plant Doctor
                </button>
              }
            />
            <div className="space-y-6">
              <ProblemFinderTool
                onSelectProblem={(prob) => setSelectedProblem(prob)}
                onOpenDigitalShop={() => navigateToPage('shop')}
              />
              <PlantProblemsSection
                onSelectProblem={(prob) => setSelectedProblem(prob)}
                onOpenProblemFinder={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>
          </div>
        )}

        {/* 4. CARE GUIDES PAGE */}
        {currentPage === 'guides' && (
          <div>
            <PageHeader
              title="Botanical Care Field Manuals"
              subtitle="Species-by-species horticultural care manuals with sunlight tolerances, moisture rhythms, and propagation blueprints."
              badge="Evidence-Based Manuals"
              breadcrumbs={[{ label: 'Care Guides' }]}
              onNavigate={navigateToPage}
              actions={
                <button
                  onClick={() => navigateToPage('shop')}
                  className="px-4 py-2 rounded-full bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#43a047] transition-colors cursor-pointer shadow-xs"
                >
                  Shop Essentials
                </button>
              }
            />
            <PlantGuidesSection
              onSelectGuide={(guide) => setSelectedGuide(guide)}
            />
          </div>
        )}

        {/* 5. SHOP PAGE */}
        {currentPage === 'shop' && (
          <div>
            <PageHeader
              title="Indoor Plant Essentials & Botanical Shop"
              subtitle="Tested botanical supplies, sun-acclimated indoor specimens, porous terracotta pottery, and organic soils."
              badge="Botanical Store"
              breadcrumbs={[{ label: 'Shop' }]}
              onNavigate={navigateToPage}
            />
            <StoreSection
              onAddToCart={handleAddToCart}
              onOpenProductDetail={(prod) => setSelectedProduct(prod)}
            />
            <DigitalProductsSection
              onAddToCart={handleAddDigitalProductToCart}
            />
          </div>
        )}

        {/* 6. REVIEWS PAGE */}
        {currentPage === 'reviews' && (
          <div>
            <PageHeader
              title="Curated Equipment & Supply Evaluations"
              subtitle="Honest, tested assessments of grow lights, moisture probes, clay pottery, and organic pest remedies."
              badge="Tested Gear Desk"
              breadcrumbs={[{ label: 'Gear Reviews' }]}
              onNavigate={navigateToPage}
            />
            <ReviewsSection />
          </div>
        )}

        {/* 7. TOOLS PAGE */}
        {currentPage === 'tools' && (
          <ToolsPage
            initialTool={toolSubTab}
            onNavigate={navigateToPage}
            onSelectGuide={(guide) => setSelectedGuide(guide)}
            onSelectProblem={(prob) => setSelectedProblem(prob)}
          />
        )}

        {/* 8. ARTICLES PAGE */}
        {currentPage === 'articles' && (
          <div>
            <PageHeader
              title="Field Notes & Botanical Articles"
              subtitle="Practical houseplant knowledge, soil aeration chemistry, watering physics, and seasonal indoor gardening advice."
              badge="Greenhouse Field Journal"
              breadcrumbs={[{ label: 'Articles' }]}
              onNavigate={navigateToPage}
            />
            <ArticlesSection
              onNavigate={(target) => navigateToPage(target)}
            />
          </div>
        )}

        {/* 9. ABOUT PAGE */}
        {currentPage === 'about' && (
          <div>
            <PageHeader
              title="About The Leafy Window"
              subtitle="A quiet, faceless sanctuary dedicated to honest houseplant care, mindful living, and sustainable botanical products."
              badge="Our Sanctuary"
              breadcrumbs={[{ label: 'About' }]}
              onNavigate={navigateToPage}
            />
            <AboutSection />
          </div>
        )}

        {/* 10. CONTACT / PLANT DOCTOR PAGE */}
        {currentPage === 'contact' && (
          <div>
            <PageHeader
              title="Plant Doctor Consultation Desk"
              subtitle="Have an ailing houseplant or need tailored lighting advice? Submit your diagnostic inquiry directly to our botanical team."
              badge="Direct Triage Desk"
              breadcrumbs={[{ label: 'Plant Doctor' }]}
              onNavigate={navigateToPage}
            />
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer with Page Navigation */}
      <Footer onNavigate={navigateToPage} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Standardized Plant Care Guide Modal */}
      <GuideModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
        onOpenProblem={(problemName) => {
          setSelectedGuide(null);
          const matched = ALL_PLANT_PROBLEMS.find((p) =>
            p.title.toLowerCase().includes(problemName.toLowerCase()) ||
            p.symptomBrief.toLowerCase().includes(problemName.toLowerCase())
          );
          if (matched) {
            setSelectedProblem(matched);
          } else {
            navigateToPage('problems');
          }
        }}
        onExploreAllGuides={() => {
          setSelectedGuide(null);
          navigateToPage('guides');
        }}
      />

      {/* Plant Problem Diagnostic Modal */}
      <ProblemModal
        problem={selectedProblem}
        onClose={() => setSelectedProblem(null)}
        onOpenGuide={(plantName) => {
          setSelectedProblem(null);
          const matched = PLANT_GUIDES.find((g) =>
            g.name.toLowerCase().includes(plantName.toLowerCase()) ||
            g.scientificName.toLowerCase().includes(plantName.toLowerCase())
          );
          if (matched) {
            setSelectedGuide(matched);
          } else {
            navigateToPage('guides');
          }
        }}
        onOpenShopCategory={() => {
          setSelectedProblem(null);
          navigateToPage('shop');
        }}
        onOpenDigitalShop={() => {
          setSelectedProblem(null);
          navigateToPage('shop');
        }}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onSelectRelatedProduct={(prodId) => {
          const matched = ALL_SHOP_PRODUCTS.find((p) => p.id === prodId);
          if (matched) setSelectedProduct(matched);
        }}
        onSelectRelatedGuide={(guideId) => {
          setSelectedProduct(null);
          const guide = PLANT_GUIDES.find((g) => g.id === guideId);
          if (guide) {
            setSelectedGuide(guide);
          } else {
            navigateToPage('guides');
          }
        }}
      />

      {/* Unified Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectGuide={(g) => {
          setIsSearchOpen(false);
          setSelectedGuide(g);
        }}
        onSelectProblem={(p) => {
          setIsSearchOpen(false);
          setSelectedProblem(p);
        }}
        onSelectArticle={() => {
          setIsSearchOpen(false);
          navigateToPage('articles');
        }}
        onNavigateToSection={(sec) => {
          setIsSearchOpen(false);
          navigateToPage(sec);
        }}
      />

    </div>
  );
}
