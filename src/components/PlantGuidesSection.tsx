import { useState } from 'react';
import { PLANT_GUIDES } from '../data/knowledgeData';
import { PlantGuide } from '../types';
import { BookOpen, ArrowRight, Sun, Droplets, ShieldCheck, Heart, Sparkles, Filter } from 'lucide-react';

interface PlantGuidesSectionProps {
  onSelectGuide: (guide: PlantGuide) => void;
  lightFilter?: string;
  onResetLightFilter?: () => void;
}

export default function PlantGuidesSection({ onSelectGuide, lightFilter, onResetLightFilter }: PlantGuidesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [petSafeOnly, setPetSafeOnly] = useState<boolean>(false);

  const categories = ['All', 'Aroid', 'Hardy', 'Succulent', 'Trailing', 'Foliage'];

  const filteredGuides = PLANT_GUIDES.filter((guide) => {
    const matchesCat = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchesPet = !petSafeOnly || guide.petSafe;
    const matchesLight = !lightFilter || guide.light.toLowerCase().includes(lightFilter.toLowerCase()) || guide.light === 'Low Light';
    return matchesCat && matchesPet && matchesLight;
  });

  return (
    <section id="guides" className="py-16 md:py-24 bg-[#f9f8f4] border-b border-[#e9e5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
              <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
                STANDARDIZED FIELD MANUALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a3c34] tracking-tight">
              Indoor Plant Guides.
            </h2>
            <p className="text-base text-[#1a3c34]/80 leading-relaxed">
              Unacademic, failure-proof care manuals for the most popular indoor species. Every guide details light thresholds, aerated soil blends, watering cues, and common failure points.
            </p>
          </div>

          {/* Quick Stats / Filter Indicator */}
          <div className="flex items-center gap-4 text-xs font-semibold text-[#1a3c34]">
            <span className="px-3 py-1.5 rounded-full bg-white border border-[#e9e5db] shadow-2xs">
              Showing <strong>{filteredGuides.length}</strong> Plant Guides
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] shadow-xs mb-8 flex flex-wrap items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-[#1a3c34] mr-2 flex items-center gap-1">
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

          {/* Pet Friendly Toggle */}
          <div className="flex items-center gap-4">
            {lightFilter && (
              <div className="flex items-center gap-2 bg-[#edf7ed] px-3 py-1 rounded-full border border-[#4caf50]/30 text-xs text-[#4caf50] font-bold">
                <span>Filter: {lightFilter}</span>
                {onResetLightFilter && (
                  <button
                    onClick={onResetLightFilter}
                    className="hover:underline text-[10px] cursor-pointer"
                  >
                    ✕ Clear
                  </button>
                )}
              </div>
            )}

            <button
              onClick={() => setPetSafeOnly(!petSafeOnly)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                petSafeOnly
                  ? 'bg-[#edf7ed] text-[#4caf50] border-[#4caf50]'
                  : 'bg-[#f9f8f4] text-[#1a3c34]/80 border-[#e9e5db] hover:bg-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${petSafeOnly ? 'fill-current' : ''}`} />
              <span>Pet-Friendly Only</span>
            </button>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => onSelectGuide(guide)}
              className="group rounded-3xl bg-white border border-[#e9e5db] overflow-hidden hover:border-[#4caf50] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Botanical Photography */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#e9e5db]">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/70 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1a3c34]/85 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      {guide.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      guide.petSafe ? 'bg-[#edf7ed] text-[#1a3c34]' : 'bg-[#fbeee8] text-[#c56d44]'
                    } backdrop-blur-xs`}>
                      {guide.petSafe ? '🐾 Pet Safe' : '⚠️ Toxic'}
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[11px] text-white/80 font-mono italic">
                      {guide.scientificName}
                    </p>
                    <h3 className="text-xl font-serif font-bold leading-tight drop-shadow-xs">
                      {guide.name}
                    </h3>
                  </div>
                </div>

                {/* Quick specs pill row */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#1a3c34]/80 leading-relaxed line-clamp-2">
                    {guide.quickOverview}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-[#f9f8f4] border border-[#e9e5db] flex items-center gap-2">
                      <Sun className="w-3.5 h-3.5 text-[#c56d44] shrink-0" />
                      <div className="truncate">
                        <span className="text-[9px] uppercase font-bold text-[#1a3c34]/60 block">Light</span>
                        <span className="font-semibold text-[#1a3c34] truncate block">{guide.light}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#f9f8f4] border border-[#e9e5db] flex items-center gap-2">
                      <Droplets className="w-3.5 h-3.5 text-[#4caf50] shrink-0" />
                      <div className="truncate">
                        <span className="text-[9px] uppercase font-bold text-[#1a3c34]/60 block">Difficulty</span>
                        <span className="font-semibold text-[#1a3c34] truncate block">{guide.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#c56d44]">
                      Golden Rule:
                    </span>
                    <p className="text-xs text-[#1a3c34]/85 bg-[#edf7ed] p-2.5 rounded-xl border border-[#4caf50]/20 font-medium leading-relaxed">
                      {guide.quickCareSummary[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0 border-t border-[#e9e5db]/60 mt-2">
                <div className="pt-3 flex items-center justify-between text-xs font-bold text-[#1a3c34] group-hover:text-[#4caf50] transition-colors">
                  <span>Inspect Full Care Manual</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
