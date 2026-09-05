import { useState, useMemo, MouseEvent } from 'react';
import {
  Plus,
  Check,
  Star,
  Eye,
  Sparkles,
  Filter,
  ExternalLink,
  ShieldCheck,
  Search,
  ArrowRight,
  Info,
  Package,
} from 'lucide-react';
import { Product } from '../types';
import { ALL_SHOP_PRODUCTS, SHOP_CATEGORIES } from '../data/shopData';

interface StoreSectionProps {
  onAddToCart: (product: Product) => void;
  onOpenProductDetail: (product: Product) => void;
  initialCategory?: string;
}

export default function StoreSection({
  onAddToCart,
  onOpenProductDetail,
  initialCategory = 'all',
}: StoreSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [modelFilter, setModelFilter] = useState<'all' | 'direct' | 'affiliate'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  // Active Category Meta
  const activeCategoryMeta = useMemo(() => {
    return SHOP_CATEGORIES.find((c) => c.id === selectedCategory);
  }, [selectedCategory]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return ALL_SHOP_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Subcategory filter
      if (
        selectedSubcategory !== 'All' &&
        !selectedSubcategory.startsWith('All') &&
        product.subcategory !== selectedSubcategory
      ) {
        return false;
      }
      // Model filter (Direct vs Affiliate)
      if (modelFilter !== 'all' && product.model !== modelFilter) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesSub = product.subcategory.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);
        if (!matchesName && !matchesSub && !matchesDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSubcategory, modelFilter, searchQuery]);

  const handleAdd = (product: Product, e: MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section id="shop" className="py-20 bg-[#f9f8f4] border-b border-[#e9e5db] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
            <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
              THE LEAFY WINDOW BOTANICAL SHOP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a3c34] tracking-tight">
            Indoor Plants, Pottery & <br className="hidden sm:inline" />
            <span className="italic text-[#4caf50]">Tested Botanical Gear.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#1a3c34]/80 max-w-2xl mx-auto leading-relaxed">
            A curated boutique combining healthy sun-acclimated plants and custom substrate blends with rigorously evaluated partner equipment.
          </p>
        </div>

        {/* 9 Major Category Navigation Bar */}
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('All');
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#1a3c34] text-white shadow-xs'
                  : 'bg-white text-[#1a3c34]/80 hover:bg-[#e9e5db] border border-[#e9e5db]'
              }`}
            >
              All Departments
            </button>

            {SHOP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                id={`shop-cat-${cat.id}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedSubcategory('All');
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1a3c34] text-white shadow-xs'
                    : 'bg-white text-[#1a3c34]/80 hover:bg-[#e9e5db] border border-[#e9e5db]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategories & Filters Strip */}
        <div className="bg-white border border-[#e9e5db] rounded-3xl p-4 sm:p-5 mb-8 shadow-xs space-y-4">
          
          {/* Subcategory Pills if a specific category is active */}
          {activeCategoryMeta && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] font-bold text-[#1a3c34] uppercase tracking-wider shrink-0 mr-1">
                Subcategories:
              </span>
              {activeCategoryMeta.subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedSubcategory === sub
                      ? 'bg-[#4caf50] text-white'
                      : 'bg-[#f9f8f4] text-[#1a3c34]/70 hover:bg-[#e9e5db] border border-[#e9e5db]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Model & Search Filter Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-t border-[#e9e5db]">
            {/* Search within store */}
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 text-[#1a3c34]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shop products..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#f9f8f4] border border-[#e9e5db] text-xs text-[#1a3c34] focus:outline-hidden focus:border-[#4caf50]"
              />
            </div>

            {/* Model Filter (All / Direct / Affiliate) */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#1a3c34] mr-1">Origin:</span>
              <button
                onClick={() => setModelFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  modelFilter === 'all'
                    ? 'bg-[#1a3c34] text-white'
                    : 'bg-[#f9f8f4] text-[#1a3c34]/70 border border-[#e9e5db]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setModelFilter('direct')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  modelFilter === 'direct'
                    ? 'bg-[#4caf50] text-white'
                    : 'bg-[#f9f8f4] text-[#1a3c34]/70 border border-[#e9e5db]'
                }`}
              >
                Leafy Window Direct
              </button>
              <button
                onClick={() => setModelFilter('affiliate')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  modelFilter === 'affiliate'
                    ? 'bg-[#c56d44] text-white'
                    : 'bg-[#f9f8f4] text-[#1a3c34]/70 border border-[#e9e5db]'
                }`}
              >
                Curated Recommendations
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter & Active Category Description */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
          <div>
            <p className="text-xs font-semibold text-[#1a3c34]/70">
              Showing <strong className="text-[#1a3c34]">{filteredProducts.length}</strong> botanical products
            </p>
            {activeCategoryMeta && (
              <p className="text-xs text-[#1a3c34]/60 mt-0.5">
                {activeCategoryMeta.description}
              </p>
            )}
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#c56d44] hover:underline cursor-pointer"
            >
              Clear search "{searchQuery}"
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isAdded = !!addedIds[product.id];
            const isAffiliate = product.model === 'affiliate';

            return (
              <div
                key={product.id}
                id={`shop-product-${product.id}`}
                onClick={() => onOpenProductDetail(product)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#e9e5db] shadow-xs hover:shadow-lg hover:border-[#4caf50] transition-all duration-300 flex flex-col justify-between cursor-pointer p-3.5"
              >
                {/* Image Container */}
                <div>
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#f9f8f4] mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Model Badge */}
                    <span
                      className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-xs ${
                        isAffiliate
                          ? 'bg-[#1a3c34]/90 text-white backdrop-blur-xs'
                          : 'bg-[#4caf50] text-white'
                      }`}
                    >
                      {isAffiliate ? 'Curated Partner' : 'Direct Store'}
                    </span>

                    {/* Subcategory / Light badge */}
                    {product.light ? (
                      <span className="absolute top-2.5 right-2.5 bg-white/95 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[#1a3c34] shadow-xs">
                        {product.light}
                      </span>
                    ) : (
                      <span className="absolute top-2.5 right-2.5 bg-white/95 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[#c56d44] shadow-xs">
                        {product.subcategory}
                      </span>
                    )}

                    {/* Hover Quick View Trigger */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white text-[#1a3c34] text-xs font-bold shadow-md flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#4caf50]" />
                        <span>Full Evaluation</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-serif font-bold text-base text-[#1a3c34] group-hover:text-[#4caf50] transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>

                    {product.scientificName && (
                      <p className="text-[11px] italic text-[#1a3c34]/60 font-serif">
                        {product.scientificName}
                      </p>
                    )}

                    <p className="text-xs text-[#1a3c34]/70 line-clamp-2 leading-relaxed pt-0.5">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Pricing, Reviews & CTA Footer */}
                <div className="mt-4 pt-3 border-t border-[#e9e5db] space-y-2.5">
                  {/* Rating and Price Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold text-[#1a3c34]">{product.rating}</span>
                      <span className="text-[10px] text-[#1a3c34]/50">({product.reviewsCount})</span>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-serif font-bold text-[#c56d44]">
                        {product.priceDisplay ? product.priceDisplay : `$${product.price}`}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {isAffiliate ? (
                    <a
                      href={product.affiliateUrl || 'https://example.com/affiliate-link-placeholder'}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2 px-3 rounded-xl bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <span>View Partner</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={(e) => handleAdd(product, e)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                        isAdded
                          ? 'bg-[#4caf50] text-white'
                          : 'bg-[#1a3c34] hover:bg-[#4caf50] text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Transparent Affiliate Disclosure Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#e9e5db] shadow-xs grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#edf7ed] text-[#4caf50] flex items-center justify-center text-2xl shrink-0">
              📦
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-base text-[#1a3c34]">
                Direct Nursery Shipping Guarantee
              </h4>
              <p className="text-xs text-[#1a3c34]/75 leading-relaxed">
                Direct plants ship in breathable corrugated boxes with root insulation. Guaranteed alive and healthy for 30 days after window placement.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#fbeee8] text-[#c56d44] flex items-center justify-center text-xl shrink-0">
              <Info className="w-6 h-6 text-[#c56d44]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-base text-[#1a3c34]">
                Curated Recommendations Policy
              </h4>
              <p className="text-xs text-[#1a3c34]/75 leading-relaxed">
                We independently test every light, shear, and pot in real home conditions. We may earn a small referral commission if you buy through partner links at no additional cost to you.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
