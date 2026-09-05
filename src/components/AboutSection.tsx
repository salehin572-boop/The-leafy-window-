import { ShieldCheck, Compass, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#f9f8f4] border-b border-[#e9e5db]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Official Brand Seal */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="flex justify-center mb-3">
            <BrandLogo size="2xl" className="border-4 border-[#1a3c34]/15 shadow-xl" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e9e5db] text-[#c56d44] text-[10px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Our Editorial & Horticultural Manifesto
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a3c34] tracking-tight">
            Built for Real Living Rooms.
          </h2>
          <p className="text-sm sm:text-base text-[#1a3c34]/80 leading-relaxed">
            The Leafy Window is not a storefront pushing inventory or a generic blog re-writing botanical Wikipedia articles. We are an indoor plant resource created to demystify houseplant health for apartment and home dwellers.
          </p>
        </div>

        {/* 4 Pillars of Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-white border border-[#e9e5db] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#edf7ed] text-[#4caf50] flex items-center justify-center font-bold">
              🌿
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1a3c34]">
              Real-World Apartment Testing
            </h3>
            <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
              We do not grow plants inside temperature-regulated commercial glasshouses with artificial misting grids. Everything we document is tested on ordinary window sills, across drafty winters, dry radiators, and varying sun angles.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#e9e5db] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#fbeee8] text-[#c56d44] flex items-center justify-center font-bold">
              💡
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1a3c34]">
              Problem-Solving First
            </h3>
            <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
              When leaves curl, yellow, or drop, you need diagnostic clarity within 60 seconds — not a lecture on Latin taxonomy. We prioritize rapid visual identification and immediate, non-damaging recovery plans.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#e9e5db] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#edf7ed] text-[#4caf50] flex items-center justify-center font-bold">
              🔬
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1a3c34]">
              Rigorous, Unbiased Gear Reviews
            </h3>
            <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
              We never take manufacturer kickbacks to label a mediocre grow lamp "the best overall." When we recommend a pot, moisture meter, or chunky orchid bark, we clearly disclose its specifications, pros, cons, and who should NOT buy it.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#e9e5db] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#e9e5db] text-[#1a3c34] flex items-center justify-center font-bold">
              🤝
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1a3c34]">
              Transparent Business Model
            </h3>
            <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
              We fund our independent editorial research through two honest monetization layers: affiliate referral commissions on independently vetted gear, and our own premium digital field guides. Our readers’ plant success always comes first.
            </p>
          </div>
        </div>

        {/* Faceless Editorial Pledge Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1a3c34] text-white border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#4caf50]" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#4caf50]">
                EDITORIAL STANDARDS
              </span>
            </div>
            <h4 className="text-xl font-serif font-bold">
              Respect for your time, budget, and botanical curiosity.
            </h4>
            <p className="text-xs text-white/75 max-w-xl">
              No influencer selfies. No sponsored lifestyle fluff. Just practical, beautiful guidance to help you grow a thriving indoor jungle.
            </p>
          </div>

          <div className="shrink-0">
            <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white/90">
              GROW · CARE · THRIVE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
