import { useState } from 'react';
import { X, Sun, Droplets, ShieldCheck, Heart, Plus, Minus, Check, Sparkles, MessageCircle } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onOpenContact: () => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onOpenContact,
}: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#e9e5db] z-10 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#f9f8f4] text-[#1a3c34] flex items-center justify-center hover:bg-[#e9e5db] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Plant Photo Side */}
          <div className="relative aspect-square md:aspect-auto bg-[#f9f8f4] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#e9e5db]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full max-h-[380px] object-cover rounded-2xl shadow-xs"
            />
            {product.isBestseller && (
              <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-[#1a3c34] text-white text-xs font-bold uppercase tracking-wider">
                Bestseller
              </span>
            )}
          </div>

          {/* Plant Specs & Details Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c56d44]">
                  {product.category}
                </span>
                <span className="text-xs text-[#1a3c34]/40">•</span>
                <span className="text-xs font-semibold text-[#4caf50]">{product.potSize}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3c34] leading-snug">
                {product.name}
              </h3>

              <p className="text-xs italic text-[#1a3c34]/60 font-serif">
                {product.scientificName}
              </p>

              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-2xl font-serif font-bold text-[#c56d44]">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#1a3c34]/40 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#1a3c34]/80 leading-relaxed">
                {product.description}
              </p>

              {/* Horticultural Care Specs Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-3 rounded-xl bg-[#f9f8f4] border border-[#e9e5db]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1a3c34]">
                    <Sun className="w-3.5 h-3.5 text-[#c56d44]" />
                    <span>Light Exposure</span>
                  </div>
                  <p className="text-[11px] text-[#1a3c34]/70 mt-0.5">{product.light}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#f9f8f4] border border-[#e9e5db]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1a3c34]">
                    <Droplets className="w-3.5 h-3.5 text-[#4caf50]" />
                    <span>Water Rhythm</span>
                  </div>
                  <p className="text-[11px] text-[#1a3c34]/70 mt-0.5">{product.water}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#f9f8f4] border border-[#e9e5db]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1a3c34]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#4caf50]" />
                    <span>Pet Safety</span>
                  </div>
                  <p className="text-[11px] text-[#1a3c34]/70 mt-0.5">
                    {product.petFriendly ? 'Pet Non-Toxic' : 'Keep away from pets'}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#f9f8f4] border border-[#e9e5db]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1a3c34]">
                    <Sparkles className="w-3.5 h-3.5 text-[#c56d44]" />
                    <span>Care Level</span>
                  </div>
                  <p className="text-[11px] text-[#1a3c34]/70 mt-0.5">{product.difficulty}</p>
                </div>
              </div>

              {/* Master Care Tip */}
              <div className="p-3.5 rounded-xl bg-[#edf7ed] border border-[#4caf50]/30 text-xs text-[#1a3c34]">
                <strong className="text-[#4caf50]">Pro Window Tip: </strong>
                <span>{product.careTip}</span>
              </div>
            </div>

            {/* Quantity Selector & Add Button */}
            <div className="pt-3 border-t border-[#e9e5db] space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-[#f9f8f4] border border-[#e9e5db] rounded-xl p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#e9e5db] transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-[#1a3c34]">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#e9e5db] transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={added}
                  className="flex-1 py-3.5 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
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

              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="text-xs text-[#1a3c34]/70 hover:text-[#4caf50] flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Have questions about fitting your specific window? Ask our Care Team</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
