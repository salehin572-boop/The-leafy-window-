import { useState } from 'react';
import {
  X,
  Star,
  Check,
  Plus,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onSelectRelatedProduct?: (productId: string) => void;
  onSelectRelatedGuide?: (guideId: string) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  onSelectRelatedProduct,
  onSelectRelatedGuide,
}: ProductDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const images = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  const handleAddDirect = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const isAffiliate = product.model === 'affiliate';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#f9f8f4] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-white/50 z-10 animate-scale-in max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
          aria-label="Close product evaluation"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-grow p-6 sm:p-8 space-y-8">
          
          {/* Top Grid: Image Gallery & Hero Buying Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Gallery Column */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-[#e9e5db] shadow-xs">
                <img
                  src={images[selectedImageIndex] || product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Model badge */}
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs ${
                  isAffiliate
                    ? 'bg-[#1a3c34] text-white'
                    : 'bg-[#4caf50] text-white'
                }`}>
                  {isAffiliate ? 'Curated Gear' : 'Leafy Window Direct'}
                </span>
              </div>

              {/* Thumbnails if gallery has multiple photos */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        selectedImageIndex === idx
                          ? 'border-[#4caf50] shadow-xs scale-105'
                          : 'border-[#e9e5db] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title, Pricing & CTAs Column */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#c56d44]">
                    {product.subcategory}
                  </span>
                  <span className="text-xs text-[#1a3c34]/40">•</span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold text-[#1a3c34]">{product.rating}</span>
                    <span className="text-xs text-[#1a3c34]/50">({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3c34] leading-snug">
                  {product.name}
                </h1>

                {product.scientificName && (
                  <p className="text-xs italic text-[#1a3c34]/60 font-serif mt-0.5">
                    {product.scientificName}
                  </p>
                )}

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="text-3xl font-serif font-bold text-[#c56d44]">
                    {product.priceDisplay ? product.priceDisplay : `$${product.price}`}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-[#1a3c34]/40 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Short Summary */}
                <p className="text-xs sm:text-sm text-[#1a3c34]/80 leading-relaxed mt-2.5">
                  {product.shortDescription}
                </p>
              </div>

              {/* Action Box */}
              <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] shadow-xs space-y-3">
                {isAffiliate ? (
                  // Model A: Affiliate Product
                  <div className="space-y-3">
                    <a
                      href={product.affiliateUrl || 'https://example.com/affiliate-link-placeholder'}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full py-3 px-5 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <span>View on Partner Store</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <p className="text-[11px] text-[#1a3c34]/60 leading-relaxed flex items-start gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#c56d44] shrink-0 mt-0.5" />
                      <span>
                        <strong>Affiliate Disclosure:</strong> The Leafy Window tests and selects independent gear. We may earn a small referral commission if you buy through this link at no additional cost to you.
                      </span>
                    </p>
                  </div>
                ) : (
                  // Model B: Direct Store Product
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-[#f9f8f4] border border-[#e9e5db] rounded-xl p-1">
                        <button
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-[#e9e5db] transition-colors text-xs font-bold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-[#1a3c34]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity((q) => q + 1)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-[#e9e5db] transition-colors text-xs font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={handleAddDirect}
                        disabled={added}
                        className="flex-1 py-3 px-4 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {added ? (
                          <>
                            <Check className="w-4 h-4 text-white" />
                            <span>Added to Bag!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Add to Bag • ${(product.price * quantity).toFixed(2)}</span>
                          </>
                        )}
                      </button>
                    </div>

                    {product.gumroadUrl && (
                      <div className="pt-1 text-center">
                        <a
                          href={product.gumroadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold text-[#c56d44] hover:underline"
                        >
                          Or purchase directly via Gumroad Checkout →
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Key Features */}
          {product.keyFeatures && product.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#4caf50]" />
                Key Botanical Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-[#e9e5db] flex items-start gap-2.5 text-xs text-[#1a3c34]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#4caf50] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Editorial Review / Description */}
          <div className="p-5 rounded-2xl bg-white border border-[#e9e5db] space-y-2">
            <h3 className="font-serif font-bold text-base text-[#1a3c34]">
              Evaluation & Horticultural Field Notes
            </h3>
            <p className="text-xs sm:text-sm text-[#1a3c34]/80 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Who It Is For vs. Who Should Skip It */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#edf7ed] border border-[#4caf50]/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1a3c34] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
                <span>Who This Is For</span>
              </div>
              <p className="text-xs text-[#1a3c34]/85 leading-relaxed">
                {product.whoItIsFor}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#fbeee8] border border-[#c56d44]/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#c56d44] uppercase tracking-wider">
                <XCircle className="w-4 h-4 text-[#c56d44]" />
                <span>Who Should Skip It</span>
              </div>
              <p className="text-xs text-[#1a3c34]/85 leading-relaxed">
                {product.whoShouldSkipIt}
              </p>
            </div>
          </div>

          {/* Pros & Cons */}
          {(product.pros || product.cons) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pros */}
              <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4caf50] flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Strongest Advantages
                </h4>
                <ul className="space-y-1.5 text-xs text-[#1a3c34]/80">
                  {product.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#4caf50] font-bold">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#c56d44] flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" /> Honest Limitations
                </h4>
                <ul className="space-y-1.5 text-xs text-[#1a3c34]/80">
                  {product.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#c56d44] font-bold">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Important Specifications */}
          {product.importantSpecs && product.importantSpecs.length > 0 && (
            <div className="p-5 rounded-2xl bg-white border border-[#e9e5db] space-y-3">
              <h3 className="font-serif font-bold text-sm text-[#1a3c34] uppercase tracking-wider">
                Technical Specifications & Sizing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.importantSpecs.map((spec, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-[#f9f8f4] text-[#1a3c34]/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a3c34] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How To Use It */}
          {product.howToUse && (
            <div className="p-5 rounded-2xl bg-[#edf7ed]/50 border border-[#4caf50]/20 space-y-2">
              <h3 className="font-serif font-bold text-sm text-[#1a3c34] uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#4caf50]" />
                How to Use & Set Up
              </h3>
              <p className="text-xs sm:text-sm text-[#1a3c34]/85 leading-relaxed">
                {product.howToUse}
              </p>
            </div>
          )}

          {/* Related Leafy Window Guides */}
          {product.relatedGuideIds && product.relatedGuideIds.length > 0 && onSelectRelatedGuide && (
            <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a3c34]">
                Related Plant Care Field Guides
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.relatedGuideIds.map((gId) => (
                  <button
                    key={gId}
                    onClick={() => {
                      onClose();
                      onSelectRelatedGuide(gId);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#edf7ed] hover:bg-[#4caf50] hover:text-white text-xs font-bold text-[#1a3c34] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect {gId.replace('-', ' ')} guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-[#e9e5db] flex items-center justify-between shrink-0">
          <span className="text-xs text-[#1a3c34]/60">
            The Leafy Window Botanical Goods & Field Gear
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
