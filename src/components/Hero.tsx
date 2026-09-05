import { useState } from 'react';
import { ArrowRight, Play, Sun, Sparkles, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { LightExposure } from '../types';
import BrandLogo from './BrandLogo';

interface HeroProps {
  onExploreGuidesClick: () => void;
  onShopClick?: () => void;
  onDiagnoseClick?: () => void;
  onDiagnoseProblemClick?: () => void;
  onWindowLightClick?: () => void;
  onSelectProblem?: (problemId: string) => void;
  onFilterByLight?: (exposure: string) => void;
}

export default function Hero({
  onExploreGuidesClick,
  onShopClick,
  onDiagnoseClick,
  onDiagnoseProblemClick,
  onWindowLightClick,
  onSelectProblem,
  onFilterByLight,
}: HeroProps) {
  const handleDiagnose = onDiagnoseClick || onDiagnoseProblemClick || (() => {});
  const [selectedExposure, setSelectedExposure] = useState<LightExposure>('south');

  const exposureGuides: Record<LightExposure, { title: string; desc: string; plant: string; lightTag: string }> = {
    south: {
      title: 'South Window • Intense Direct Sun',
      desc: 'Brightest all-day rays. Perfect for heat-loving succulents, sculptural jades, and cacti.',
      plant: 'Jade Plant & Sansevieria',
      lightTag: 'Bright Direct',
    },
    east: {
      title: 'East Window • Gentle Morning Glow',
      desc: 'Soft dawn sunlight without afternoon heat scorch. Ideal for tropical fenestrated vines.',
      plant: 'Monstera deliciosa & Pothos',
      lightTag: 'Bright Indirect',
    },
    west: {
      title: 'West Window • Warm Golden Hour',
      desc: 'Strong afternoon sunshine and radiant golden hour heat. Great for rubber trees and figs.',
      plant: 'Rubber Tree & Pothos',
      lightTag: 'Bright Direct',
    },
    north: {
      title: 'North Window • Cool Consistent Ambient',
      desc: 'Gentle, even indirect lighting without harsh rays. Flawless for indestructible foliage.',
      plant: 'ZZ Plant & Cast Iron',
      lightTag: 'Low Light',
    },
  };

  const handleExposureSelect = (exp: LightExposure) => {
    setSelectedExposure(exp);
    if (onFilterByLight) {
      onFilterByLight(exposureGuides[exp].lightTag);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden bg-[#f9f8f4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Container with Natural Tones Stone/Sand Background & Radial Shine */}
        <div className="rounded-3xl overflow-hidden relative shadow-lg bg-[#e9e5db] border border-white/60 p-6 sm:p-10 lg:p-12">
          {/* Subtle natural radial gradient highlight as in design */}
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #ffffff 0%, transparent 70%)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            
            {/* Left Column: Typography, Tagline, Value Proposition & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Tagline / Eyebrow from Natural Tones theme */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
                <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
                  PRACTICAL INDOOR PLANT RESOURCE • GROW · CARE · THRIVE
                </span>
              </div>

              {/* Main Headline with italic text-leafy "In." */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1a3c34] leading-[1.1] tracking-tight">
                  Bring the <br className="hidden sm:inline" />
                  Outside <span className="italic text-[#4caf50]">In.</span>
                </h1>
                <p className="script font-script text-2xl sm:text-3xl text-[#c56d44] font-normal tracking-wide">
                  Practical, beautiful guidance for growing a thriving indoor jungle
                </p>
              </div>

              {/* Sub-headline / Core Positioning */}
              <p className="text-base sm:text-lg text-[#1a3c34]/85 max-w-xl leading-relaxed">
                Clear problem-solving, sunlight calibration for your specific windows, unacademic plant guides, and tested equipment recommendations.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  id="hero-guides-cta-btn"
                  onClick={onExploreGuidesClick}
                  className="btn-natural shadow-lg inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Plant Guides</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onShopClick && (
                  <button
                    id="hero-shop-cta-btn"
                    onClick={onShopClick}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1a3c34] font-bold text-xs uppercase tracking-wider border border-[#e9e5db] shadow-xs hover:border-[#4caf50] hover:text-[#4caf50] transition-all duration-200 cursor-pointer"
                  >
                    <span>Shop Indoor Plants</span>
                  </button>
                )}

                <button
                  id="hero-diagnose-cta-btn"
                  onClick={onDiagnoseProblemClick || handleDiagnose}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[#c56d44] hover:bg-[#fbeee8] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span className="w-5 h-5 rounded-full bg-[#fbeee8] text-[#c56d44] flex items-center justify-center font-bold text-xs">
                    ?
                  </span>
                  <span>Diagnose a Problem</span>
                </button>
              </div>

              {/* Micro Trust Highlights: The 4 Core Differentiators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl border-t border-[#1a3c34]/10">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#edf7ed] text-[#4caf50] shrink-0">
                    <Sun className="w-4 h-4 text-[#c56d44]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a3c34]">Window Light</p>
                    <p className="text-[10px] text-[#1a3c34]/70">Calibrated by glass</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#fbeee8] text-[#c56d44] shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#c56d44]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a3c34]">Triage Guides</p>
                    <p className="text-[10px] text-[#1a3c34]/70">Symptom recovery</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#edf7ed] text-[#4caf50] shrink-0">
                    <Sparkles className="w-4 h-4 text-[#4caf50]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a3c34]">Zero Jargon</p>
                    <p className="text-[10px] text-[#1a3c34]/70">Practical rules</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#e9e5db] text-[#1a3c34] shrink-0">
                    <HeartHandshake className="w-4 h-4 text-[#1a3c34]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a3c34]">Tested Gear</p>
                    <p className="text-[10px] text-[#1a3c34]/70">Honest reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sunlit Visual & Window Plant Interactive Preview */}
            <div className="lg:col-span-5 space-y-5">
              {/* Main Sun-Drenched Image Card */}
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Outer frame matching Natural Tones cards */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group transition-all duration-300">
                  <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-[#e9e5db]">
                    <img
                      src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=85"
                      alt="Sun-drenched living room with houseplants near a bright window"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34]/75 via-transparent to-transparent pointer-events-none" />

                    {/* Badge on image */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white shadow-md flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#c56d44]">
                          Field Resource Highlight
                        </span>
                        <h4 className="text-sm font-serif font-bold text-[#1a3c34]">
                          Monstera Light & Aeration Guide
                        </h4>
                        <p className="text-[11px] text-[#1a3c34]/75">Why leaves fenestrate under East window dawn light</p>
                      </div>
                      <button
                        onClick={onExploreGuidesClick}
                        className="px-3 py-1.5 rounded-full bg-[#4caf50] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#43a047] transition-colors cursor-pointer"
                      >
                        Read
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Tag: "Grow • Care • Thrive" */}
                <div className="absolute -top-3.5 -left-3 sm:-left-4 bg-white px-3 py-2 rounded-xl shadow-lg border border-[#e9e5db] flex items-center gap-2.5 z-20">
                  <BrandLogo size="xs" className="border border-[#1a3c34]/20" />
                  <div>
                    <p className="text-[11px] font-bold text-[#1a3c34] leading-tight">The Leafy Window</p>
                    <p className="text-[9px] text-[#4caf50] font-bold tracking-wider">GROW · CARE · THRIVE</p>
                  </div>
                </div>
              </div>

              {/* Interactive "Window Sunlight Matcher" Card */}
              <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-white shadow-md">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#4caf50]" />
                    <span className="text-[11px] font-bold text-[#1a3c34] uppercase tracking-wider">
                      Quick Window Compass
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#4caf50]">Select glass direction:</span>
                </div>

                {/* Direction selector buttons */}
                <div className="grid grid-cols-4 gap-2 mb-2.5">
                  {(['south', 'east', 'west', 'north'] as LightExposure[]).map((exp) => (
                    <button
                      key={exp}
                      onClick={() => handleExposureSelect(exp)}
                      className={`py-1.5 px-1 text-[10px] font-bold uppercase rounded-lg transition-all duration-200 cursor-pointer ${
                        selectedExposure === exp
                          ? 'bg-[#4caf50] text-white shadow-xs'
                          : 'bg-[#f9f8f4] text-[#1a3c34]/80 hover:bg-[#edf7ed] hover:text-[#4caf50] border border-[#e9e5db]/60'
                      }`}
                    >
                      {exp}
                    </button>
                  ))}
                </div>

                {/* Exposure details */}
                <div className="p-3 rounded-xl bg-[#f9f8f4] border border-[#e9e5db] text-xs space-y-1">
                  <div className="flex items-center justify-between font-semibold text-[#1a3c34]">
                    <span className="text-[11px]">{exposureGuides[selectedExposure].title}</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#edf7ed] text-[#4caf50] font-bold uppercase">
                      {exposureGuides[selectedExposure].lightTag}
                    </span>
                  </div>
                  <p className="text-[#1a3c34]/75 text-[10px] leading-relaxed">
                    {exposureGuides[selectedExposure].desc}
                  </p>
                  <div className="pt-1 flex items-center justify-between text-[10px]">
                    <span className="text-[#c56d44] font-semibold">Natural match: {exposureGuides[selectedExposure].plant}</span>
                    <button
                      onClick={onExploreGuidesClick}
                      className="text-[#4caf50] hover:underline font-bold flex items-center gap-0.5 cursor-pointer"
                    >
                      Find plant guide <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
