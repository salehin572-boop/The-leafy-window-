import { AlertCircle, Compass, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

interface WhatWeHelpWithProps {
  onNavigate: (sectionId: string) => void;
}

export default function WhatWeHelpWith({ onNavigate }: WhatWeHelpWithProps) {
  const pillars = [
    {
      id: 'diagnostic-tool',
      icon: AlertCircle,
      iconColor: 'text-[#c56d44] bg-[#fbeee8]',
      title: 'Diagnose Plant Problems',
      subtitle: 'Triage before it’s too late',
      desc: 'Pinpoint why leaves turn yellow, curl inward, or drop. Step-by-step recovery plans without confusing botanical jargon.',
      cta: 'Diagnose a Symptom',
    },
    {
      id: 'window-light',
      icon: Compass,
      iconColor: 'text-[#4caf50] bg-[#edf7ed]',
      title: 'Window Light Calibration',
      subtitle: 'Stop guessing sunlight',
      desc: 'Calculate the true photosynthetic energy of North, East, South, and West windows based on distance and obstructions.',
      cta: 'Calculate Window Light',
    },
    {
      id: 'guides',
      icon: BookOpen,
      iconColor: 'text-[#1a3c34] bg-[#e9e5db]',
      title: 'Practical Plant Guides',
      subtitle: '11+ essential indoor species',
      desc: 'Standardized field manuals detailing exact watering thresholds, aerated soil mixes, pet safety, and propagation.',
      cta: 'Explore All Guides',
    },
    {
      id: 'reviews',
      icon: Sparkles,
      iconColor: 'text-[#c56d44] bg-[#fbeee8]',
      title: 'Tested Gear & Substrates',
      subtitle: 'Zero sponsored listicles',
      desc: 'Honest reviews explaining who needs specific grow lights, breathable pots, moisture meters, and chunky aroid soils.',
      cta: 'View Gear Reviews',
    },
  ];

  return (
    <section id="what-we-help-with" className="py-16 md:py-20 bg-white border-b border-[#e9e5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
            <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
              THE INDOOR JUNGLE RESOURCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a3c34] tracking-tight">
            How The Leafy Window helps you thrive.
          </h2>
          <p className="text-base sm:text-lg text-[#1a3c34]/80 leading-relaxed">
            Indoor gardening shouldn’t be a cycle of buying pretty plants and watching them slowly wither. We provide the practical diagnostics, light science, and honest product guidance so you can grow with total confidence.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-[#f9f8f4] border border-[#e9e5db] hover:border-[#4caf50]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c56d44]">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-[#1a3c34] group-hover:text-[#4caf50] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#1a3c34]/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#e9e5db] mt-6">
                  <button
                    onClick={() => onNavigate(pillar.id)}
                    className="text-xs font-bold text-[#1a3c34] hover:text-[#4caf50] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
