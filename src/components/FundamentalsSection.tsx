import { Sun, Droplets, Layers, Wind, ShieldCheck } from 'lucide-react';

export default function FundamentalsSection() {
  const principles = [
    {
      num: '01',
      icon: Sun,
      title: 'The Inverse Square Light Rule',
      concept: 'Light drops by the square of distance.',
      desc: 'Moving a plant from 1 foot from window glass to 4 feet away reduces available photon energy by over 80%. What looks "bright" to human eyes is often starvation for tropical plants.',
      rule: 'Measure distance from window glass, not how brightly lit your room feels.',
    },
    {
      num: '02',
      icon: Droplets,
      title: 'The Finger Test Over Calendar Schedules',
      concept: 'Never water on a recurring weekday.',
      desc: 'Plant water consumption fluctuates weekly based on temperature, heating systems, and season. Watering every Tuesday causes winter root rot when evaporation slows.',
      rule: 'Insert your index finger 2 inches into soil. Water only when cool moisture is absent.',
    },
    {
      num: '03',
      icon: Layers,
      title: 'Air-Filled Porosity (AFP) Over Dense Peat',
      concept: 'Roots breathe oxygen just as much as they drink water.',
      desc: 'Cheap bagged potting peat compresses into a dense, soggy brick that suffocates root cells. Chunky pine bark, coarse perlite, and pumice keep oxygen channels open even when soaked.',
      rule: 'Aim for a chunky soil mix with 30–40% visible airy grit and bark.',
    },
    {
      num: '04',
      icon: Wind,
      title: 'Container Drainage Physics',
      concept: 'Pots without drainage holes are death traps.',
      desc: 'Gravel or rocks at the bottom of a hole-less pot do NOT create drainage; they simply raise the perched water table closer to delicate roots, accelerating anaerobic decay.',
      rule: 'Always plant in porous terracotta or nursery pots with open drainage holes.',
    },
  ];

  return (
    <section id="fundamentals" className="py-16 md:py-24 bg-white border-b border-[#e9e5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
            <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
              HORTICULTURAL FOUNDATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a3c34] tracking-tight">
            The 4 Plant Care Fundamentals.
          </h2>
          <p className="text-base text-[#1a3c34]/80 leading-relaxed">
            Forget complex plant mythology and mysterious green thumbs. Indoor plants thrive when you respect four basic laws of light physics, root respiration, and soil biology.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="p-8 rounded-3xl bg-[#f9f8f4] border border-[#e9e5db] flex flex-col justify-between hover:border-[#4caf50]/60 transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-serif font-bold text-[#e9e5db] group-hover:text-[#4caf50] transition-colors">
                      {p.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#e9e5db] flex items-center justify-center text-[#4caf50] shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c56d44] block mb-1">
                      {p.concept}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#1a3c34]">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1a3c34]/80 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#e9e5db] mt-6">
                  <div className="p-3 rounded-xl bg-white border border-[#e9e5db] flex items-start gap-2 text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#4caf50] shrink-0 mt-0.5" />
                    <span className="text-[#1a3c34]/85">
                      <strong>The Rule:</strong> {p.rule}
                    </span>
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
