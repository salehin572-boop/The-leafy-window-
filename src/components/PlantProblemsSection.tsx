import { useState, useMemo } from 'react';
import { ALL_PLANT_PROBLEMS } from '../data/plantProblemsData';
import { PlantProblem } from '../types';
import { AlertCircle, ArrowRight, ShieldCheck, Sparkles, Filter, Search } from 'lucide-react';

interface PlantProblemsSectionProps {
  onSelectProblem: (problem: PlantProblem) => void;
  onOpenProblemFinder?: () => void;
}

export default function PlantProblemsSection({
  onSelectProblem,
  onOpenProblemFinder,
}: PlantProblemsSectionProps) {
  const [selectedUrgency, setSelectedUrgency] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const urgencyFilters = ['All', 'Routine Adjustment', 'Moderate Attention', 'Urgent Intervention'];
  const categoryFilters = ['All', 'Water & Roots', 'Light & Environment', 'Pests & Infestation', 'Fertilizer & Nutrition'];

  const filteredProblems = useMemo(() => {
    return ALL_PLANT_PROBLEMS.filter((p) => {
      if (selectedUrgency !== 'All' && p.urgency !== selectedUrgency) return false;
      if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesSymptom = p.symptomBrief.toLowerCase().includes(q);
        const matchesCauses = p.likelyCauses.some((c) => c.toLowerCase().includes(q));
        const matchesPlants = p.affectedPlants.some((pl) => pl.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSymptom && !matchesCauses && !matchesPlants) return false;
      }
      return true;
    });
  }, [selectedUrgency, selectedCategory, searchQuery]);

  return (
    <section id="problems" className="py-20 bg-white border-b border-[#e9e5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c56d44]" />
              <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
                PLANT PROBLEM SOLVER • TRIAGE & RECOVERY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a3c34] tracking-tight">
              Indoor Plant Problems. <br className="hidden sm:inline" />
              <span className="italic text-[#4caf50]">Diagnosed with precision.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#1a3c34]/80 leading-relaxed">
              Don’t guess and don't toss your plant. Browse our complete botanical symptom files with step-by-step recovery plans, root causes, and prevention protocols.
            </p>
          </div>

          {/* Quick Problem Finder Link */}
          {onOpenProblemFinder && (
            <button
              onClick={onOpenProblemFinder}
              className="px-5 py-2.5 rounded-full bg-[#fbeee8] hover:bg-[#c56d44] hover:text-white text-[#c56d44] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 cursor-pointer border border-[#c56d44]/30 shadow-xs"
            >
              <span>Launch Interactive Finder</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Toolbar */}
        <div className="bg-[#f9f8f4] border border-[#e9e5db] rounded-3xl p-4 sm:p-5 mb-8 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 text-[#1a3c34]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search symptom, pest, or plant name..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#e9e5db] text-xs text-[#1a3c34] focus:outline-hidden focus:border-[#4caf50]"
              />
            </div>

            {/* Urgency Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-[#1a3c34] mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#4caf50]" /> Urgency:
              </span>
              {urgencyFilters.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedUrgency(lvl)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    selectedUrgency === lvl
                      ? 'bg-[#1a3c34] text-white shadow-xs'
                      : 'bg-white text-[#1a3c34]/70 hover:bg-[#e9e5db] border border-[#e9e5db]'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#e9e5db] pb-1 scrollbar-none">
            <span className="text-[11px] font-bold text-[#1a3c34] uppercase tracking-wider shrink-0 mr-1">
              Category:
            </span>
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#4caf50] text-white'
                    : 'bg-white text-[#1a3c34]/70 hover:bg-[#e9e5db] border border-[#e9e5db]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-semibold text-[#1a3c34]/70">
            Showing <strong className="text-[#1a3c34]">{filteredProblems.length}</strong> diagnostic triage files
          </p>
          {(selectedUrgency !== 'All' || selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedUrgency('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#c56d44] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Problems Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProblems.map((prob) => {
            const urgencyBadgeClass =
              prob.urgency === 'Urgent Intervention'
                ? 'bg-[#fbeee8] text-[#c56d44] border-[#c56d44]/30'
                : prob.urgency === 'Moderate Attention'
                ? 'bg-[#fff8e1] text-[#b78103] border-[#ffe082]'
                : 'bg-[#edf7ed] text-[#4caf50] border-[#4caf50]/30';

            return (
              <div
                key={prob.id}
                id={`problem-card-${prob.id}`}
                onClick={() => onSelectProblem(prob)}
                className="group rounded-2xl bg-[#f9f8f4] border border-[#e9e5db] overflow-hidden hover:border-[#4caf50] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Problem Photography with botanical vignette */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e9e5db]">
                    <img
                      src={prob.image}
                      alt={prob.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Urgency Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${urgencyBadgeClass} backdrop-blur-xs`}>
                        {prob.urgency}
                      </span>
                    </div>

                    {/* Category pill */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-white/90 text-[#1a3c34] uppercase tracking-wider backdrop-blur-xs shadow-2xs">
                        {prob.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-[10px] text-white/80 font-mono">Triage File</p>
                      <h3 className="text-base font-serif font-bold leading-snug drop-shadow-xs">
                        {prob.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-3">
                    <p className="text-xs text-[#1a3c34]/80 line-clamp-2 leading-relaxed">
                      {prob.symptomBrief}
                    </p>

                    {/* Key Visual cues */}
                    <div className="space-y-1 pt-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#c56d44]">
                        Visual Identification:
                      </p>
                      <ul className="text-[11px] text-[#1a3c34]/75 space-y-0.5">
                        {prob.visualCues.slice(0, 2).map((cue, i) => (
                          <li key={i} className="truncate flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#c56d44]" />
                            <span>{cue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Affected species pills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {prob.affectedPlants.slice(0, 3).map((pl, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-full bg-white text-[10px] text-[#1a3c34]/70 border border-[#e9e5db]"
                        >
                          {pl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-3 bg-white border-t border-[#e9e5db] flex items-center justify-between text-xs font-bold text-[#1a3c34] group-hover:text-[#4caf50] transition-colors">
                  <span>Inspect Recovery Protocol</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
