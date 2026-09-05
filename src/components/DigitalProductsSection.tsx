import { useState } from 'react';
import { DIGITAL_PRODUCTS } from '../data/knowledgeData';
import { DigitalProduct } from '../types';
import { Download, BookOpen, CheckCircle, Sparkles, ShoppingBag, ShieldCheck, FileText } from 'lucide-react';

interface DigitalProductsSectionProps {
  onAddToCart: (product: DigitalProduct) => void;
}

export default function DigitalProductsSection({ onAddToCart }: DigitalProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<DigitalProduct>(DIGITAL_PRODUCTS[0]);
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);

  return (
    <section id="digital-shop" className="py-16 md:py-24 bg-[#f9f8f4] border-b border-[#e9e5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c56d44]" />
            <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
              LEAFY WINDOW FIELD GUIDES & TOOLS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a3c34] tracking-tight">
            Curated Digital Guides.
          </h2>
          <p className="text-base text-[#1a3c34]/80 leading-relaxed">
            High-resolution visual field manuals, diagnostic decision trees, and printable sunlight mapping journals designed to sit beside your potting bench. Instant digital access with lifetime updates.
          </p>
        </div>

        {/* Flagship Product Showcase Card */}
        <div className="rounded-3xl bg-white border border-[#e9e5db] shadow-xl overflow-hidden mb-12 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Cover / E-book Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1a3c34] bg-[#1a3c34] group">
                <div className="aspect-[3/4] relative overflow-hidden bg-[#1a3c34]">
                  <img
                    src={selectedProduct.coverImage}
                    alt={selectedProduct.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34] via-transparent to-black/30" />

                  {/* Editorial Book Title Overlay */}
                  <div className="absolute top-6 left-6 right-6">
                    <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#4caf50]">
                      LEAFY WINDOW FIELD MANUAL
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mt-1">
                      {selectedProduct.title}
                    </h3>
                    <p className="text-xs text-white/80 font-mono mt-1">
                      {selectedProduct.subtitle}
                    </p>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80 text-xs border-t border-white/20 pt-3">
                    <span>{selectedProduct.pages}</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#4caf50] text-white text-[10px] font-bold">
                      PDF + EPub
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -left-3 bg-[#c56d44] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                {selectedProduct.badge || 'Field Edition'}
              </div>
            </div>

            {/* Right: Detailed Inclusions & Table of Contents */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3c34]">
                    ${selectedProduct.price}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-base line-through text-[#1a3c34]/50 font-serif">
                      ${selectedProduct.originalPrice}
                    </span>
                  )}
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#edf7ed] text-[#4caf50] font-bold uppercase">
                    Instant Download
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3c34] mt-2">
                  {selectedProduct.title}
                </h3>
                <p className="text-sm sm:text-base text-[#1a3c34]/80 leading-relaxed mt-2">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Inclusions List */}
              <div className="space-y-2.5 p-5 rounded-2xl bg-[#f9f8f4] border border-[#e9e5db]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#4caf50]" />
                  What is included in this digital package:
                </h4>
                <ul className="space-y-2 text-xs text-[#1a3c34]/85">
                  {selectedProduct.inclusions.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#4caf50] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Table of Contents Preview */}
              <div className="space-y-2">
                <button
                  onClick={() => setPreviewOpen(!previewOpen)}
                  className="text-xs font-bold text-[#1a3c34] hover:text-[#4caf50] flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{previewOpen ? 'Hide Table of Contents ↑' : 'Preview Table of Contents (7 Chapters) ↓'}</span>
                </button>

                {previewOpen && (
                  <div className="p-4 rounded-xl bg-white border border-[#e9e5db] space-y-1.5 text-xs text-[#1a3c34]/80 animate-fade-in">
                    {selectedProduct.tableOfContents.map((chap, idx) => (
                      <p key={idx} className="font-mono text-[11px] py-0.5 border-b border-[#e9e5db]/40 last:border-none">
                        {chap}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA Row */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onAddToCart(selectedProduct)}
                  className="btn-natural inline-flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Get Instant Digital Access (${selectedProduct.price})</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-[#1a3c34]/70">
                  <ShieldCheck className="w-4 h-4 text-[#4caf50]" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Other Digital Products Architecture (Scalable Library) */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-xl text-[#1a3c34]">
            Additional Specialized Guides & Companion Planners
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIGITAL_PRODUCTS.slice(1).map((prod) => (
              <div
                key={prod.id}
                className="p-6 rounded-3xl bg-white border border-[#e9e5db] flex flex-col justify-between hover:border-[#4caf50] transition-all duration-300 shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={prod.coverImage}
                    alt={prod.title}
                    referrerPolicy="no-referrer"
                    className="w-20 h-24 rounded-xl object-cover bg-[#1a3c34] shrink-0 border border-[#e9e5db]"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c56d44]">
                      {prod.badge}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-[#1a3c34]">
                      {prod.title}
                    </h4>
                    <p className="text-xs text-[#1a3c34]/75 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>
                    <p className="text-xs font-bold text-[#1a3c34] pt-1">
                      ${prod.price} • {prod.pages}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e9e5db] mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="text-xs font-bold text-[#1a3c34] hover:text-[#4caf50] cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onAddToCart(prod)}
                    className="px-4 py-2 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
