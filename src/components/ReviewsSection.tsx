import { useState } from 'react';
import { PRODUCT_REVIEWS } from '../data/knowledgeData';
import { ProductReview } from '../types';
import { Sparkles, Star, ExternalLink, ShieldCheck, Check, X, Info, Filter } from 'lucide-react';

interface ReviewsSectionProps {
  onAddToCart?: (item: { id: string; name: string; price: number; image: string; type: 'gear' }) => void;
}

export default function ReviewsSection({ onAddToCart }: ReviewsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedReview, setExpandedReview] = useState<string | null>(null);

  const categories = ['All', 'Grow Lights', 'Plant Pots', 'Moisture Meters', 'Soil / Substrate'];

  const filteredReviews = selectedCategory === 'All'
    ? PRODUCT_REVIEWS
    : PRODUCT_REVIEWS.filter((r) => r.category === selectedCategory);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white border-b border-[#e9e5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c56d44]" />
            <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
              HONEST EVALUATIONS & HARDWARE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a3c34] tracking-tight">
            Tested Gear & Substrates.
          </h2>
          <p className="text-base text-[#1a3c34]/80 leading-relaxed">
            No sponsored fluff or generic "Top 10" lists. We independently test grow bulbs with PAR meters, evaluate pot wall porosity, and assess aerated soil structure to tell you exactly who needs it — and who should save their money.
          </p>
        </div>

        {/* Affiliate Transparency Disclosure Box (Required) */}
        <div className="p-4 rounded-2xl bg-[#f9f8f4] border border-[#e9e5db] mb-10 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#4caf50] shrink-0 mt-0.5" />
          <div className="text-xs text-[#1a3c34]/80 leading-relaxed">
            <strong className="text-[#1a3c34]">Transparent Recommendation Disclosure:</strong> Every tool, planter, and substrate featured here was acquired and evaluated based on real plant health outcomes and durability. If you choose to purchase through our links, we may receive a modest referral commission at no additional cost to you. We only recommend products we actively use in our own spaces.
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-bold text-[#1a3c34] flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5 text-[#4caf50]" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1a3c34] text-white shadow-xs'
                  : 'bg-[#f9f8f4] text-[#1a3c34]/70 hover:bg-[#e9e5db] border border-[#e9e5db]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Cards List */}
        <div className="space-y-8">
          {filteredReviews.map((review) => {
            const isExpanded = expandedReview === review.id;

            return (
              <div
                key={review.id}
                className="rounded-3xl bg-[#f9f8f4] border border-[#e9e5db] overflow-hidden p-6 sm:p-8 hover:border-[#4caf50]/60 transition-all duration-300 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Image & Quick Badges */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#e9e5db]">
                      <img
                        src={review.image}
                        alt={review.productName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#1a3c34] text-white text-[10px] font-bold uppercase tracking-wider">
                        {review.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs px-1">
                      <div className="flex items-center gap-1 text-[#c56d44] font-bold">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{review.rating.toFixed(1)} / 5.0 Rating</span>
                      </div>
                      <span className="font-mono font-bold text-[#1a3c34]">{review.priceRange}</span>
                    </div>
                  </div>

                  {/* Review Content & Breakdown */}
                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#c56d44]">
                        Independent Field Evaluation
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a3c34] mt-0.5">
                        {review.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1a3c34]/85 italic font-medium mt-1">
                        "{review.verdict}"
                      </p>
                    </div>

                    {/* Who Needs It vs Who Does NOT Need It */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-[#edf7ed] border border-[#4caf50]/20 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4caf50] flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Who Actually Needs It
                        </span>
                        <p className="text-xs text-[#1a3c34]/85 leading-relaxed">
                          {review.whoNeedsIt}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#fbeee8] border border-[#c56d44]/20 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#c56d44] flex items-center gap-1">
                          <X className="w-3.5 h-3.5" /> Who Should Skip It
                        </span>
                        <p className="text-xs text-[#1a3c34]/85 leading-relaxed">
                          {review.whoDoesNotNeedIt}
                        </p>
                      </div>
                    </div>

                    {/* Important Specs */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a3c34]/70 block">
                        Verified Technical Specifications:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#1a3c34]/80">
                        {review.importantSpecs.map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#4caf50] font-bold">•</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pros & Cons toggle */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-[#e9e5db] space-y-4 animate-fade-in">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div className="space-y-1.5">
                            <span className="font-bold text-[#4caf50] uppercase tracking-wider text-[10px] block">
                              Pros
                            </span>
                            <ul className="space-y-1 text-[#1a3c34]/80">
                              {review.pros.map((p, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-[#4caf50]">✓</span> {p}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-1.5">
                            <span className="font-bold text-[#c56d44] uppercase tracking-wider text-[10px] block">
                              Cons / Limitations
                            </span>
                            <ul className="space-y-1 text-[#1a3c34]/80">
                              {review.cons.map((c, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-[#c56d44]">—</span> {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-white border border-[#e9e5db] text-xs text-[#1a3c34]/75">
                          <strong className="text-[#1a3c34]">Testing Criteria:</strong> {review.criteriaExplained}
                        </div>
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="pt-3 border-t border-[#e9e5db] flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => setExpandedReview(isExpanded ? null : review.id)}
                        className="text-xs font-bold text-[#1a3c34] hover:text-[#4caf50] transition-colors cursor-pointer"
                      >
                        {isExpanded ? 'Hide Specifications ↑' : 'View Full Pros, Cons & Criteria ↓'}
                      </button>

                      <div className="flex items-center gap-3">
                        <a
                          href={review.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="btn-natural inline-flex items-center gap-2 text-xs"
                        >
                          <span>Check Price & Availability</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
