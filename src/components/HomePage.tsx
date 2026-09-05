import { ArrowRight, Sparkles, CheckCircle, AlertCircle, Compass, ShieldCheck, Heart, BookOpen, ShoppingBag, ExternalLink } from 'lucide-react';
import Hero from './Hero';
import FundamentalsSection from './FundamentalsSection';
import { PlantGuide, PlantProblem, Product } from '../types';
import { PLANT_GUIDES } from '../data/knowledgeData';
import { ALL_PLANT_PROBLEMS } from '../data/plantProblemsData';
import { ALL_SHOP_PRODUCTS } from '../data/shopData';

interface HomePageProps {
  onNavigate: (pageId: string, subOption?: string) => void;
  onSelectGuide: (guide: PlantGuide) => void;
  onSelectProblem: (problem: PlantProblem) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function HomePage({
  onNavigate,
  onSelectGuide,
  onSelectProblem,
  onSelectProduct,
  onAddToCart,
}: HomePageProps) {
  // Curated spotlight items
  const featuredGuides = PLANT_GUIDES.slice(0, 3);
  const commonProblems = ALL_PLANT_PROBLEMS.slice(0, 4);
  const topProducts = ALL_SHOP_PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <Hero
        onExploreGuidesClick={() => onNavigate('guides')}
        onShopClick={() => onNavigate('shop')}
        onDiagnoseClick={() => onNavigate('tools', 'diagnostic-tool')}
        onDiagnoseProblemClick={() => onNavigate('problems')}
        onWindowLightClick={() => onNavigate('tools', 'window-light')}
        onSelectProblem={(id) => {
          const prob = ALL_PLANT_PROBLEMS.find((p) => p.id === id);
          if (prob) onSelectProblem(prob);
        }}
      />

      {/* 2. EXPLORE SECTIONS QUICK TILES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#c56d44]">
            Botanical Navigation
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3c34]">
            Explore The Leafy Window Pages
          </h2>
          <p className="text-sm text-[#1a3c34]/70">
            Dedicated spaces designed for practical problem-solving, curated botanical shopping, and mindful indoor gardening.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { id: 'plants', label: 'Plant Directory', count: '12 Cultivated Species', icon: '🌿', color: 'hover:border-[#4caf50]' },
            { id: 'problems', label: 'Plant Problems', count: '8 Triage Files', icon: '🩺', color: 'hover:border-[#c56d44]' },
            { id: 'guides', label: 'Care Manuals', count: 'In-Depth Guides', icon: '📖', color: 'hover:border-[#4caf50]' },
            { id: 'shop', label: 'Botanical Shop', count: '9 Departments', icon: '🪴', color: 'hover:border-[#4caf50]' },
            { id: 'tools', label: 'Window & Tools', count: 'Light Compass & Finder', icon: '🧭', color: 'hover:border-[#c56d44]' },
            { id: 'reviews', label: 'Gear Reviews', count: 'Tested Equipment', icon: '⭐', color: 'hover:border-[#4caf50]' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`p-4 rounded-2xl bg-white border border-[#e9e5db] shadow-xs text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer group flex flex-col justify-between ${item.color}`}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div>
                <p className="font-serif font-bold text-sm text-[#1a3c34] group-hover:text-[#4caf50] transition-colors">
                  {item.label}
                </p>
                <p className="text-[10px] text-[#1a3c34]/60 mt-0.5">{item.count}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. EMERGENCY PLANT PROBLEM SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fbeee8]/70 border border-[#c56d44]/30 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#c56d44] text-white">
                <AlertCircle className="w-3 h-3" /> Diagnostic Emergency Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3c34]">
                Is your plant showing sudden stress?
              </h2>
              <p className="text-xs sm:text-sm text-[#1a3c34]/80 leading-relaxed">
                Most indoor plant stress is easily reversible if caught early. Tap any common symptom below for immediate recovery steps.
              </p>
            </div>
            <button
              onClick={() => onNavigate('problems')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a3c34] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#c56d44] transition-all cursor-pointer shrink-0 shadow-xs"
            >
              <span>Open Full Diagnostic Center</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commonProblems.map((prob) => (
              <div
                key={prob.id}
                onClick={() => onSelectProblem(prob)}
                className="p-4 rounded-2xl bg-white border border-[#e9e5db] hover:border-[#c56d44] transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="h-28 rounded-xl overflow-hidden bg-[#1a3c34]/5 mb-3">
                    <img
                      src={prob.image}
                      alt={prob.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#fbeee8] text-[#c56d44]">
                    {prob.urgency}
                  </span>
                  <h3 className="font-serif font-bold text-sm text-[#1a3c34] group-hover:text-[#c56d44] transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-xs text-[#1a3c34]/70 line-clamp-2">
                    {prob.symptomBrief}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#e9e5db] mt-3 flex items-center justify-between text-[11px] font-semibold text-[#c56d44]">
                  <span>View Recovery Steps</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PLANT CARE FUNDAMENTALS */}
      <FundamentalsSection onNavigate={(sec) => onNavigate(sec)} />

      {/* 5. POPULAR PLANT CARE GUIDES SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#4caf50]">
              Botanical Care Manuals
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3c34]">
              Species-Specific Care Field Manuals
            </h2>
            <p className="text-xs sm:text-sm text-[#1a3c34]/70">
              Clear, practical guidelines covering light orientation, moisture testing, and soil recipes.
            </p>
          </div>
          <button
            onClick={() => onNavigate('guides')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1a3c34] text-[#1a3c34] font-bold text-xs uppercase tracking-wider hover:bg-[#1a3c34] hover:text-white transition-all cursor-pointer shrink-0"
          >
            <span>Browse All Field Manuals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGuides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => onSelectGuide(guide)}
              className="bg-white rounded-3xl overflow-hidden border border-[#e9e5db] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-[#1a3c34]/5">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1a3c34]/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {guide.category}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-semibold text-[#c56d44] italic">
                    {guide.scientificName}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1a3c34] group-hover:text-[#4caf50] transition-colors">
                    {guide.name}
                  </h3>
                  <p className="text-xs text-[#1a3c34]/75 line-clamp-2">
                    {guide.quickOverview}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] bg-[#edf7ed] text-[#4caf50] px-2 py-0.5 rounded-md font-semibold">
                      ☀️ {guide.light}
                    </span>
                    <span className="text-[10px] bg-[#e9e5db]/60 text-[#1a3c34] px-2 py-0.5 rounded-md font-semibold">
                      💧 {guide.water.split('.')[0]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#e9e5db]/60 mt-3 flex items-center justify-between text-xs font-bold text-[#1a3c34] group-hover:text-[#4caf50]">
                <span>Open Field Manual</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FIRST-CLASS SHOP PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#edf7ed]/50 rounded-3xl p-6 sm:p-10 border border-[#4caf50]/20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#4caf50]">
                Indoor Plant Essentials
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3c34]">
                Curated Supplies & Acclimated Plants
              </h2>
              <p className="text-xs sm:text-sm text-[#1a3c34]/70">
                Porous terracotta pots, aerated organic soils, and nursery-acclimated indoor specimens.
              </p>
            </div>
            <button
              onClick={() => onNavigate('shop')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4caf50] hover:bg-[#43a047] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs shrink-0"
            >
              <span>Visit Full Botanical Shop</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl p-4 border border-[#e9e5db] shadow-xs flex flex-col justify-between group hover:shadow-md transition-all"
              >
                <div>
                  <div
                    onClick={() => onSelectProduct(prod)}
                    className="h-44 rounded-xl overflow-hidden bg-[#1a3c34]/5 mb-3 cursor-pointer"
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#1a3c34]/60 mb-1">
                    <span className="uppercase font-bold tracking-wider">{prod.category}</span>
                    <span className="font-semibold">{prod.model === 'affiliate' ? 'Curated Partner' : 'Leafy Window Direct'}</span>
                  </div>
                  <h3
                    onClick={() => onSelectProduct(prod)}
                    className="font-serif font-bold text-sm text-[#1a3c34] hover:text-[#4caf50] cursor-pointer line-clamp-1"
                  >
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#1a3c34]/70 line-clamp-2 mt-1">
                    {prod.shortDescription || prod.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e9e5db] mt-3 flex items-center justify-between">
                  <span className="font-serif font-bold text-base text-[#1a3c34]">
                    ${prod.price.toFixed(2)}
                  </span>
                  {prod.model === 'affiliate' ? (
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="px-3 py-1.5 rounded-full bg-[#f9f8f4] hover:bg-[#e9e5db] text-[#1a3c34] text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Inspect
                    </button>
                  ) : (
                    <button
                      onClick={() => onAddToCart(prod)}
                      className="px-3 py-1.5 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Add to Bag
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE WINDOW LIGHT COMPASS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a3c34] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 text-[#66bb6a]">
              <Compass className="w-3.5 h-3.5" /> Interactive Calibration
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Which Window Direction Feeds Your Plants?
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              South-facing windows deliver hot, unfiltered daylight; North windows offer gentle, stable ambient glow. Calibrate your exposure with our compass tool.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('tools', 'window-light')}
                className="px-6 py-3 rounded-full bg-[#4caf50] hover:bg-[#43a047] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Launch Window Light Compass
              </button>
              <button
                onClick={() => onNavigate('plants')}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Browse Plants by Sunlight Tier
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PLANT DOCTOR & TRIAGE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e9e5db] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#c56d44]">
              Botanical Care Desk
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#1a3c34]">
              Need Personalized Plant Care Consultation?
            </h2>
            <p className="text-xs sm:text-sm text-[#1a3c34]/70 max-w-xl">
              Send us details about your plant's symptoms, window placement, and soil feel. Our botanical desk responds with actionable recovery plans.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            Consult Plant Doctor
          </button>
        </div>
      </section>

    </div>
  );
}
