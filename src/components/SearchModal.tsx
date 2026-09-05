import { useState, useMemo } from 'react';
import { Search, X, BookOpen, AlertCircle, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { PLANT_GUIDES, PLANT_PROBLEMS, PRODUCT_REVIEWS, ARTICLES, DIGITAL_PRODUCTS } from '../data/knowledgeData';
import { PlantGuide, PlantProblem, Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGuide: (guide: PlantGuide) => void;
  onSelectProblem: (problem: PlantProblem) => void;
  onSelectArticle: (article: Article) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectGuide,
  onSelectProblem,
  onSelectArticle,
  onNavigateToSection,
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) {
      return {
        guides: PLANT_GUIDES.slice(0, 3),
        problems: PLANT_PROBLEMS.slice(0, 3),
        articles: ARTICLES.slice(0, 2),
      };
    }

    const guides = PLANT_GUIDES.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.scientificName.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q) ||
        g.light.toLowerCase().includes(q) ||
        g.quickOverview.toLowerCase().includes(q)
    );

    const problems = PLANT_PROBLEMS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.symptomBrief.toLowerCase().includes(q) ||
        p.likelyCauses.some((c) => c.toLowerCase().includes(q))
    );

    const articles = ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
    );

    return { guides, problems, articles };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 sm:p-6 pt-20 sm:pt-24">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#e9e5db] z-10 animate-scale-in">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#e9e5db] flex items-center gap-3 bg-[#f9f8f4]">
          <Search className="w-5 h-5 text-[#4caf50]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search plant guides, yellow leaves, grow lights, root rot..."
            className="flex-1 bg-transparent text-base text-[#1a3c34] placeholder:text-[#1a3c34]/40 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-xs text-[#1a3c34]/50 hover:text-[#1a3c34] cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#e9e5db] text-[#1a3c34] cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="p-6 max-h-[500px] overflow-y-auto space-y-6">
          {/* Quick Suggestions tags if empty */}
          {!query && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1a3c34]/60 mb-2 block">
                Popular Care Topics
              </span>
              <div className="flex flex-wrap gap-2">
                {['Monstera', 'Yellow Leaves', 'Root Rot', 'Curling', 'ZZ Plant', 'Grow Lights', 'Snake Plant', 'Fungus Gnats'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 rounded-full bg-[#f9f8f4] hover:bg-[#edf7ed] text-xs font-semibold text-[#1a3c34] hover:text-[#4caf50] transition-colors border border-[#e9e5db] cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Plant Guides Results */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#4caf50]" />
                Plant Care Guides ({results.guides.length})
              </span>
            </div>

            {results.guides.length === 0 ? (
              <p className="text-xs text-[#1a3c34]/60 py-1">No matching plant guides found.</p>
            ) : (
              <div className="space-y-2">
                {results.guides.map((guide) => (
                  <div
                    key={guide.id}
                    onClick={() => {
                      onSelectGuide(guide);
                      onClose();
                    }}
                    className="p-3 rounded-2xl bg-[#f9f8f4] hover:bg-[#edf7ed] border border-[#e9e5db] hover:border-[#4caf50] transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={guide.image}
                        alt={guide.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-xl object-cover bg-white shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-serif font-bold text-[#1a3c34] group-hover:text-[#4caf50]">
                          {guide.name}
                        </h4>
                        <p className="text-[11px] text-[#1a3c34]/70 italic">
                          {guide.scientificName} • {guide.light}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1a3c34]/40 group-hover:text-[#4caf50] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Plant Problems Results */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c56d44] flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Diagnostic Symptom Files ({results.problems.length})
              </span>
            </div>

            {results.problems.length === 0 ? (
              <p className="text-xs text-[#1a3c34]/60 py-1">No matching symptom files found.</p>
            ) : (
              <div className="space-y-2">
                {results.problems.map((problem) => (
                  <div
                    key={problem.id}
                    onClick={() => {
                      onSelectProblem(problem);
                      onClose();
                    }}
                    className="p-3 rounded-2xl bg-[#f9f8f4] hover:bg-[#fbeee8] border border-[#e9e5db] hover:border-[#c56d44] transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={problem.image}
                        alt={problem.title}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-xl object-cover bg-white shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-serif font-bold text-[#1a3c34] group-hover:text-[#c56d44]">
                          {problem.title}
                        </h4>
                        <p className="text-[11px] text-[#1a3c34]/70 line-clamp-1">
                          {problem.symptomBrief}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1a3c34]/40 group-hover:text-[#c56d44] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Articles Results */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#4caf50]" />
                Field Articles ({results.articles.length})
              </span>
            </div>

            {results.articles.length === 0 ? (
              <p className="text-xs text-[#1a3c34]/60 py-1">No matching field articles found.</p>
            ) : (
              <div className="space-y-2">
                {results.articles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="p-3 rounded-2xl bg-[#f9f8f4] hover:bg-[#edf7ed] border border-[#e9e5db] hover:border-[#4caf50] transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <h4 className="text-sm font-serif font-bold text-[#1a3c34] group-hover:text-[#4caf50]">
                        {art.title}
                      </h4>
                      <p className="text-[11px] text-[#1a3c34]/70 line-clamp-1">
                        {art.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1a3c34]/40 group-hover:text-[#4caf50] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#f9f8f4] border-t border-[#e9e5db] text-center text-xs text-[#1a3c34]/60">
          The Leafy Window Horticultural Search Index
        </div>

      </div>
    </div>
  );
}
