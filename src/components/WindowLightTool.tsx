import { useState } from 'react';
import { Compass, Sun, ArrowRight, CheckCircle, Info, Sparkles } from 'lucide-react';
import { LightExposure, PlantGuide } from '../types';
import { PLANT_GUIDES } from '../data/knowledgeData';

interface WindowLightToolProps {
  onSelectPlantCategory?: (category: string) => void;
  onNavigateToGuides?: () => void;
  onSelectGuide?: (guide: PlantGuide) => void;
}

export default function WindowLightTool({
  onSelectPlantCategory,
  onNavigateToGuides,
  onSelectGuide,
}: WindowLightToolProps) {
  const [direction, setDirection] = useState<LightExposure>('south');
  const [distance, setDistance] = useState<'close' | 'mid' | 'far'>('close');
  const [obstruction, setObstruction] = useState<'clear' | 'sheer' | 'blocked'>('clear');

  // Compute practical light tier based on inputs
  const computeLightTier = () => {
    if (direction === 'south') {
      if (distance === 'close' && obstruction === 'clear') {
        return {
          tier: 'Direct Sunlight (High Intensity)',
          color: 'text-[#c56d44] bg-[#fbeee8] border-[#c56d44]/30',
          desc: 'Hot, unfiltered rays pouring directly onto leaves for 5+ hours daily. Excellent for sun-worshipers, but can scorch soft tropical foliage.',
          footCandles: '1,000 – 4,000+ FC (Foot-Candles)',
          bestPlants: ['Jade Plant (Crassula)', 'Succulents & Cacti', 'Fiddle Leaf Fig', 'Bird of Paradise'],
          warning: 'Move delicate tropical plants (Calatheas, ferns, Monsteras) at least 3 feet back to prevent leaf burn.',
          lightTag: 'Bright Direct'
        };
      }
      if (distance === 'mid' || obstruction === 'sheer') {
        return {
          tier: 'Bright Indirect Light (Prime Tropical Zone)',
          color: 'text-[#4caf50] bg-[#edf7ed] border-[#4caf50]/30',
          desc: 'Abundant daylight without hot physical beam scorch. The gold standard for monsteras, philodendrons, and climbing vines.',
          footCandles: '400 – 1,000 FC',
          bestPlants: ['Monstera deliciosa', 'Rubber Tree', 'Arrowhead Plant', 'Golden Pothos'],
          warning: 'Rotate pot 90 degrees weekly so stems climb evenly without leaning toward the glass.',
          lightTag: 'Bright Indirect'
        };
      }
    }

    if (direction === 'east') {
      if (distance === 'close') {
        return {
          tier: 'Gentle Morning Direct + Bright Indirect',
          color: 'text-[#4caf50] bg-[#edf7ed] border-[#4caf50]/30',
          desc: 'Cool dawn sunlight that delivers energy before the scorching afternoon heat builds up. Safest spot for delicate leaves.',
          footCandles: '500 – 1,200 FC',
          bestPlants: ['Monstera adansonii', 'Fittonia (Nerve Plant)', 'Peace Lily', 'Spider Plant'],
          warning: 'Keep within 3 feet of the glass; east light falls off quickly as the morning progresses.',
          lightTag: 'Bright Indirect'
        };
      }
    }

    if (direction === 'west') {
      return {
        tier: 'Warm Golden Hour Light',
        color: 'text-[#c56d44] bg-[#fbeee8] border-[#c56d44]/30',
        desc: 'Gentle ambient light for most of the morning, followed by intense late-afternoon radiant sun and warmer glass.',
        footCandles: '600 – 2,500 FC',
        bestPlants: ['Rubber Plant', 'Golden Pothos', 'Jade Plant', 'Snake Plant'],
        warning: 'Summer afternoon heat near west glass can dry potting soil rapidly; check moisture frequently.',
        lightTag: 'Bright Direct'
      };
    }

    // North or distant
    if (direction === 'north' || distance === 'far' || obstruction === 'blocked') {
      return {
        tier: 'Low to Medium Ambient Light',
        color: 'text-[#1a3c34] bg-[#e9e5db] border-[#1a3c34]/20',
        desc: 'Steady, soft, cool light with zero direct sun exposure throughout the year. Plants survive stably, but growth is slower.',
        footCandles: '75 – 250 FC',
        bestPlants: ['ZZ Plant', 'Snake Plant (Sansevieria)', 'Cast Iron Plant', 'Lucky Bamboo'],
        warning: 'Watering needs drop by 50% here because the plant is not burning starch in intense photosynthesis.',
        lightTag: 'Low Light'
      };
    }

    return {
      tier: 'Medium Indirect Light',
      color: 'text-[#4caf50] bg-[#edf7ed] border-[#4caf50]/30',
      desc: 'Comfortable reading light. Leaves stay green and healthy without stretching excessively.',
      footCandles: '200 – 500 FC',
      bestPlants: ['Golden Pothos', 'Peace Lily', 'Spider Plant', 'Fittonia'],
      warning: 'Clean dust off foliage monthly to maximize photon capture.',
      lightTag: 'Medium Indirect'
    };
  };

  const calculated = computeLightTier();

  return (
    <section id="window-light" className="py-16 md:py-24 bg-[#f9f8f4] border-b border-[#e9e5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
            <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
              SIGNATURE TOOL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a3c34] tracking-tight">
            The Window Light Guide.
          </h2>
          <p className="text-base text-[#1a3c34]/80 leading-relaxed">
            Most plant guides say “bright indirect light” and leave you guessing. Use our interactive light calculator to evaluate your window orientation, distance from glass, and room conditions — then match the ideal plants.
          </p>
        </div>

        {/* 4 Light Tiers Explained in plain terms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-[#e9e5db] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a3c34] px-2 py-0.5 rounded-full bg-[#e9e5db]">
              Tier 1
            </span>
            <h3 className="font-serif font-bold text-base text-[#1a3c34]">Low Light</h3>
            <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
              Enough light to comfortably read a book during the day without lamps, but shadows are barely visible. North windows or 8+ feet from glass.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#e9e5db] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#4caf50] px-2 py-0.5 rounded-full bg-[#edf7ed]">
              Tier 2
            </span>
            <h3 className="font-serif font-bold text-base text-[#1a3c34]">Medium Light</h3>
            <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
              Soft, diffuse daylight. Casting a fuzzy, indistinct shadow on a white wall. 4–6 feet from an East or West window.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#e9e5db] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#4caf50] px-2 py-0.5 rounded-full bg-[#edf7ed]">
              Tier 3
            </span>
            <h3 className="font-serif font-bold text-base text-[#1a3c34]">Bright Indirect</h3>
            <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
              Vibrant sunbeam right next to the window, but the leaves never feel hot to the touch. Filtered through a sheer curtain or 2–3 feet from glass.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#e9e5db] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#c56d44] px-2 py-0.5 rounded-full bg-[#fbeee8]">
              Tier 4
            </span>
            <h3 className="font-serif font-bold text-base text-[#1a3c34]">Direct Sunlight</h3>
            <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
              Unfiltered, physical beams of sun hitting leaves directly. High heat; leaves feel warm. Direct South or West sills.
            </p>
          </div>
        </div>

        {/* Interactive Calculator Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e9e5db] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Input Selectors */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* 1. Window Direction */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#4caf50]" />
                  1. Which direction does your window face?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['north', 'east', 'south', 'west'] as LightExposure[]).map((exp) => (
                    <button
                      key={exp}
                      onClick={() => setDirection(exp)}
                      className={`py-3 px-2 rounded-xl text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${
                        direction === exp
                          ? 'bg-[#1a3c34] text-white shadow-xs'
                          : 'bg-[#f9f8f4] text-[#1a3c34]/80 hover:bg-[#edf7ed] border border-[#e9e5db]'
                      }`}
                    >
                      {exp} Window
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Distance from Glass */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-[#c56d44]" />
                  2. Distance from window glass:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setDistance('close')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      distance === 'close'
                        ? 'bg-[#1a3c34] text-white shadow-xs'
                        : 'bg-[#f9f8f4] text-[#1a3c34]/80 hover:bg-[#edf7ed] border border-[#e9e5db]'
                    }`}
                  >
                    0–2 Feet <br />
                    <span className="text-[10px] font-normal opacity-80">(Window Sill)</span>
                  </button>

                  <button
                    onClick={() => setDistance('mid')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      distance === 'mid'
                        ? 'bg-[#1a3c34] text-white shadow-xs'
                        : 'bg-[#f9f8f4] text-[#1a3c34]/80 hover:bg-[#edf7ed] border border-[#e9e5db]'
                    }`}
                  >
                    3–5 Feet <br />
                    <span className="text-[10px] font-normal opacity-80">(Side Table)</span>
                  </button>

                  <button
                    onClick={() => setDistance('far')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      distance === 'far'
                        ? 'bg-[#1a3c34] text-white shadow-xs'
                        : 'bg-[#f9f8f4] text-[#1a3c34]/80 hover:bg-[#edf7ed] border border-[#e9e5db]'
                    }`}
                  >
                    6+ Feet <br />
                    <span className="text-[10px] font-normal opacity-80">(Room Interior)</span>
                  </button>
                </div>
              </div>

              {/* 3. Obstruction / Filters */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#4caf50]" />
                  3. Window covering or exterior obstruction:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setObstruction('clear')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      obstruction === 'clear'
                        ? 'bg-[#4caf50] text-white shadow-xs'
                        : 'bg-[#f9f8f4] text-[#1a3c34]/80 border border-[#e9e5db]'
                    }`}
                  >
                    Clear Glass
                  </button>

                  <button
                    onClick={() => setObstruction('sheer')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      obstruction === 'sheer'
                        ? 'bg-[#4caf50] text-white shadow-xs'
                        : 'bg-[#f9f8f4] text-[#1a3c34]/80 border border-[#e9e5db]'
                    }`}
                  >
                    Sheer Curtain
                  </button>

                  <button
                    onClick={() => setObstruction('blocked')}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      obstruction === 'blocked'
                        ? 'bg-[#4caf50] text-white shadow-xs'
                        : 'bg-[#f9f8f4] text-[#1a3c34]/80 border border-[#e9e5db]'
                    }`}
                  >
                    Tree / Building Outside
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Real-time Calculated Result Card */}
            <div className="lg:col-span-6 bg-[#f9f8f4] rounded-2xl p-6 sm:p-8 border border-[#e9e5db] space-y-5">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c56d44]">
                    Calculated Energy Rating
                  </span>
                  <span className="text-[11px] font-mono text-[#1a3c34]/60">
                    {calculated.footCandles}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a3c34]">
                  {calculated.tier}
                </h3>
                <p className="text-xs sm:text-sm text-[#1a3c34]/85 leading-relaxed">
                  {calculated.desc}
                </p>
              </div>

              {/* Best Matched Plants */}
              <div className="p-4 rounded-xl bg-white border border-[#e9e5db] space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#4caf50]" />
                  Plants That Will Naturally Flourish Here:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {calculated.bestPlants.map((plant, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#edf7ed] text-[#1a3c34] text-xs font-semibold border border-[#4caf50]/20"
                    >
                      {plant}
                    </span>
                  ))}
                </div>
              </div>

              {/* Warning / Pro Tip */}
              <div className="p-3.5 rounded-xl bg-[#fff8e1] border border-[#ffe082] text-xs text-[#b78103] flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Horticultural Note:</strong> {calculated.warning}
                </span>
              </div>

              {/* Action */}
              {onNavigateToGuides && (
                <button
                  onClick={onNavigateToGuides}
                  className="w-full py-3 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Explore Plant Guides For This Light Level</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
