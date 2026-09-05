import { useState } from 'react';
import { ARTICLES } from '../data/knowledgeData';
import { Article } from '../types';
import { Clock, Tag, ArrowRight, Share2, Bookmark, CheckCircle, ChevronDown, Sparkles } from 'lucide-react';

interface ArticlesSectionProps {
  onSelectArticle?: (article: Article) => void;
  onNavigateToGuides?: () => void;
  onNavigateToProblems?: () => void;
  onNavigate?: (targetSection: string) => void;
}

export default function ArticlesSection({
  onSelectArticle,
  onNavigateToGuides,
  onNavigateToProblems,
  onNavigate,
}: ArticlesSectionProps) {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const handleNav = (target: string) => {
    setActiveArticle(null);
    if (onNavigate) {
      onNavigate(target);
    } else if (target === 'guides' && onNavigateToGuides) {
      onNavigateToGuides();
    } else if (target === 'problems' && onNavigateToProblems) {
      onNavigateToProblems();
    }
  };

  return (
    <section id="articles" className="py-16 md:py-24 bg-white border-b border-[#e9e5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
              <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
                EDITORIAL JOURNAL & DEEP DIVES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a3c34] tracking-tight">
              Indoor Plant Field Notes.
            </h2>
            <p className="text-base text-[#1a3c34]/80 leading-relaxed">
              In-depth horticultural investigations into leaf mechanics, light physics, and soil microbiology. Written for real apartment environments.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ARTICLES.map((art) => (
            <article
              key={art.id}
              className="rounded-3xl bg-[#f9f8f4] border border-[#e9e5db] overflow-hidden hover:border-[#4caf50] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Header Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e9e5db]">
                  <img
                    src={art.image}
                    alt={art.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1a3c34]/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      {art.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded-full bg-white/90 text-[#1a3c34] text-[10px] font-mono font-semibold flex items-center gap-1 backdrop-blur-xs">
                      <Clock className="w-3 h-3 text-[#4caf50]" /> {art.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c56d44]">
                    Addresses: {art.problemAddressed}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1a3c34] group-hover:text-[#4caf50] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#1a3c34]/80 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>

                  {/* Pinterest-friendly save note */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#1a3c34]/60 border-t border-[#e9e5db]/60">
                    <span className="flex items-center gap-1">
                      <Bookmark className="w-3 h-3 text-[#c56d44]" /> Pin to Care Board
                    </span>
                    <span className="text-[#4caf50] font-semibold">{art.date}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveArticle(art)}
                  className="w-full py-2.5 rounded-xl bg-white border border-[#e9e5db] group-hover:border-[#4caf50] group-hover:bg-[#4caf50] group-hover:text-white text-xs font-bold text-[#1a3c34] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Read Field Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Read Article Modal / Drawer */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6">
            <div
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              onClick={() => setActiveArticle(null)}
            />

            <div className="relative bg-[#f9f8f4] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-white/40 z-10 animate-scale-in max-h-[92vh] flex flex-col">
              
              {/* Header Image */}
              <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-[#1a3c34] flex-shrink-0">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34] via-[#1a3c34]/40 to-transparent" />

                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                >
                  ✕
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#4caf50] text-white text-[10px] font-bold uppercase">
                      {activeArticle.category}
                    </span>
                    <span className="text-[11px] text-white/80">{activeArticle.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    {activeArticle.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Article Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
                
                {/* Key Takeaway Box */}
                <div className="p-4 rounded-2xl bg-[#edf7ed] border border-[#4caf50]/30 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4caf50] flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> Core Horticultural Takeaway
                  </span>
                  <p className="text-xs sm:text-sm text-[#1a3c34]/90 font-medium leading-relaxed">
                    {activeArticle.solutionSummary}
                  </p>
                </div>

                {/* Article Prose */}
                <div className="prose prose-sm text-[#1a3c34]/85 leading-relaxed space-y-4">
                  <p className="text-base font-serif italic text-[#1a3c34]">
                    {activeArticle.excerpt}
                  </p>
                  
                  <h3 className="text-lg font-serif font-bold text-[#1a3c34] pt-2">
                    Understanding the Underlying Mechanism
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Indoor plants do not change leaf morphology without a direct physiological cue. When plants encounter stressors such as light starvation, root moisture lock, or mineral toxicity, they adjust transpiration rates to protect their core vascular bundles.
                  </p>

                  <h3 className="text-lg font-serif font-bold text-[#1a3c34] pt-2">
                    Actionable Steps for Apartment Growers
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm pl-4 list-disc text-[#1a3c34]/80">
                    <li>Always assess soil moisture at root depth before adding surface water.</li>
                    <li>Move plants closer to natural light rather than increasing chemical fertilizer.</li>
                    <li>Provide adequate airflow and porous potting mediums to prevent anaerobic conditions.</li>
                  </ul>
                </div>

                {/* Contextual Links */}
                <div className="p-4 rounded-2xl bg-[#e9e5db]/60 border border-[#e9e5db] space-y-2">
                  <p className="text-xs font-bold text-[#1a3c34]">
                    Related Leafy Window Resources:
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <button
                      onClick={() => handleNav('problems')}
                      className="font-bold text-[#c56d44] hover:underline cursor-pointer"
                    >
                      → Explore Symptom Diagnosis Library
                    </button>
                    <button
                      onClick={() => handleNav('guides')}
                      className="font-bold text-[#4caf50] hover:underline cursor-pointer"
                    >
                      → Inspect Complete Plant Guides
                    </button>
                    <button
                      onClick={() => handleNav(activeArticle.contextualCta.targetSection)}
                      className="font-bold text-[#1a3c34] hover:underline cursor-pointer"
                    >
                      → {activeArticle.contextualCta.label}
                    </button>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 bg-white border-t border-[#e9e5db] flex items-center justify-between flex-shrink-0">
                <span className="text-xs text-[#1a3c34]/60">
                  Published by The Leafy Window Editorial Team
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
