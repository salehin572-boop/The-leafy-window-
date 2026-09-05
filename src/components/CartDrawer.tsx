import { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 65;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeeded = (freeShippingThreshold - subtotal).toFixed(2);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
    }, 1200);
  };

  const handleFinish = () => {
    setOrderComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#f9f8f4] shadow-2xl flex flex-col justify-between border-l border-[#e9e5db]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#e9e5db] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <h3 className="font-serif font-bold text-xl text-[#1a3c34]">Your Botanical Bag</h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#edf7ed] text-[#4caf50]">
                {items.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#1a3c34]/70 hover:text-[#1a3c34] hover:bg-[#e9e5db] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Progress Bar */}
          <div className="px-6 py-3 bg-[#e9e5db]/40 text-xs text-[#1a3c34] space-y-1.5 border-b border-[#e9e5db]">
            <div className="flex justify-between font-medium">
              <span>
                {subtotal >= freeShippingThreshold ? (
                  <strong className="text-[#4caf50]">🎉 Free Insulated Window Delivery Unlocked!</strong>
                ) : (
                  <span>Add <strong className="text-[#c56d44]">${amountNeeded}</strong> more for Free Shipping</span>
                )}
              </span>
              <span className="font-bold text-[#1a3c34]">{progressToFreeShipping}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white overflow-hidden">
              <div
                className="h-full bg-[#4caf50] transition-all duration-500 rounded-full"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Body content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderComplete ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#edf7ed] text-[#4caf50] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="font-serif font-bold text-2xl text-[#1a3c34]">Greenhouse Order Confirmed!</h4>
                <p className="text-xs sm:text-sm text-[#1a3c34]/75 max-w-xs mx-auto">
                  Your healthy botanicals are being carefully insulated with heat packs and root protectors in our greenhouse.
                </p>
                <div className="p-4 rounded-xl bg-white border border-[#e9e5db] text-xs text-left space-y-1">
                  <p className="font-bold text-[#1a3c34]">Care Tip Included:</p>
                  <p className="text-[#1a3c34]/70">Let plants acclimate in gentle indirect window light for 48 hours before their first thorough watering.</p>
                </div>
                <button
                  onClick={handleFinish}
                  className="w-full py-3 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#e9e5db]/60 text-[#1a3c34]/40 flex items-center justify-center mx-auto text-2xl">
                  🪴
                </div>
                <h4 className="font-serif font-bold text-lg text-[#1a3c34]">Your Bag is Empty</h4>
                <p className="text-xs text-[#1a3c34]/60 max-w-xs mx-auto">
                  Looks like you haven't picked any botanicals yet. Explore our featured greenhouse arrivals!
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-colors cursor-pointer"
                >
                  Browse Featured Goods
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-2xl bg-white border border-[#e9e5db] shadow-2xs flex gap-4 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover bg-[#f9f8f4] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif font-bold text-sm text-[#1a3c34] truncate">
                      {item.product.name}
                    </h5>
                    <p className="text-[11px] text-[#1a3c34]/60 truncate">
                      {item.product.subtitle || 'Indoor Plant Care'}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-serif font-bold text-sm text-[#c56d44]">
                        ${item.product.price * item.quantity}
                      </span>
                      
                      {/* Quantity buttons */}
                      <div className="flex items-center gap-1.5 bg-[#f9f8f4] border border-[#e9e5db] rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-[#1a3c34] hover:bg-[#e9e5db] rounded-md transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#1a3c34] w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#1a3c34] hover:bg-[#e9e5db] rounded-md transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="p-1.5 text-[#1a3c34]/40 hover:text-[#c56d44] transition-colors cursor-pointer"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {!orderComplete && items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#e9e5db] space-y-4">
              <div className="space-y-1.5 text-xs text-[#1a3c34]/80">
                <div className="flex justify-between">
                  <span>Botanical Subtotal</span>
                  <span className="font-bold text-[#1a3c34] font-serif text-sm">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Root-Safe Packing & Insulation</span>
                  <span className="font-bold text-[#4caf50]">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{subtotal >= freeShippingThreshold ? 'FREE' : '$6.50'}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#e9e5db] flex justify-between items-baseline">
                <span className="font-bold text-[#1a3c34] text-sm">Estimated Total</span>
                <span className="font-serif font-bold text-2xl text-[#c56d44]">
                  ${(subtotal + (subtotal >= freeShippingThreshold ? 0 : 6.5)).toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Preparing Your Greenhouse Order...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#1a3c34]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4caf50]" />
                <span>30-Day Healthy Plant Guarantee included with every order</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
