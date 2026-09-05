import { X, Sun, Droplets, Wind, Thermometer, ShieldAlert, Sparkles, CheckCircle, AlertTriangle, Sprout, Compass, Layers } from 'lucide-react';
import { PlantGuide } from '../types';

interface GuideModalProps {
  guide: PlantGuide | null;
  onClose: () => void;
  onSelectProblem?: (problemTitle: string) => void;
  onOpenProblem?: (problemName: string) => void;
  onOpenDigitalShop?: () => void;
  onExploreAllGuides?: () => void;
}

export default function GuideModal({
  guide,
  onClose,
  onSelectProblem,
  onOpenProblem,
  onOpenDigitalShop,
  onExploreAllGuides,
}: GuideModalProps) {
  if (!guide) return null;

  const handleProblemClick = (problemName: string) => {
    if (onOpenProblem) {
      onOpenProblem(problemName);
    } else if (onSelectProblem) {
      onSelectProblem(problemName);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#f9f8f4] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-white/40 z-10 animate-scale-in max-h-[92vh] flex flex-col">
        
        {/* Header Bar with Close Button */}
        <div className="relative bg-[#1a3c34] text-white p-6 sm:p-8 flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img
              src={guide.image}
              alt={guide.name}
              referrerPolicy="no-referrer"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-white/30 shadow-md bg-[#e9e5db]"
            />
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#4caf50] text-white text-[10px] font-bold uppercase tracking-wider">
                  {guide.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-semibold">
                  {guide.difficulty}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                  guide.petSafe ? 'bg-[#edf7ed] text-[#1a3c34]' : 'bg-[#fbeee8] text-[#c56d44]'
                }`}>
                  {guide.petSafe ? '✓ Pet Friendly' : '⚠️ Toxic to Pets'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                {guide.name}
              </h2>
              <p className="text-xs sm:text-sm text-white/80 italic font-mono">
                {guide.scientificName}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Guide Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-grow">
          
          {/* Quick Overview */}
          <section className="space-y-2">
            <h3 className="font-serif font-bold text-lg text-[#1a3c34] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#c56d44]" />
              Quick Overview
            </h3>
            <p className="text-sm text-[#1a3c34]/85 leading-relaxed bg-white p-4 rounded-2xl border border-[#e9e5db]">
              {guide.quickOverview}
            </p>
          </section>

          {/* Quick Care Summary Checklist */}
          <section className="p-5 rounded-2xl bg-[#edf7ed] border border-[#4caf50]/30 space-y-3">
            <h3 className="font-serif font-bold text-sm text-[#1a3c34] uppercase tracking-wider flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#4caf50]" />
              Quick Care Rules of Thumb
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#1a3c34]/85">
              {guide.quickCareSummary.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white text-[#4caf50] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Detailed Requirements Grid */}
          <section className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#1a3c34] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#4caf50]" />
              Environment & Botanical Requirements
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Light */}
              <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1a3c34]">
                  <Sun className="w-4 h-4 text-[#c56d44]" />
                  <span>Light Exposure</span>
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#edf7ed] text-[#4caf50]">
                    {guide.light}
                  </span>
                </div>
                <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
                  Best positioned in an East-facing window for morning glow, or 3–5 feet back from South/West glass with a sheer curtain.
                </p>
              </div>

              {/* Water */}
              <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1a3c34]">
                  <Droplets className="w-4 h-4 text-[#4caf50]" />
                  <span>Watering Protocol</span>
                </div>
                <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
                  {guide.water}
                </p>
              </div>

              {/* Soil */}
              <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1a3c34]">
                  <Layers className="w-4 h-4 text-[#c56d44]" />
                  <span>Soil & Drainage</span>
                </div>
                <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
                  {guide.soil}
                </p>
              </div>

              {/* Humidity & Temp */}
              <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1a3c34]">
                  <Wind className="w-4 h-4 text-[#4caf50]" />
                  <span>Humidity & Temperature</span>
                </div>
                <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
                  Humidity: {guide.humidity} | Temp: {guide.temperature}
                </p>
              </div>

              {/* Feeding */}
              <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1a3c34]">
                  <Sprout className="w-4 h-4 text-[#4caf50]" />
                  <span>Feeding & Fertilizer</span>
                </div>
                <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
                  {guide.feeding}
                </p>
              </div>

              {/* Repotting & Propagation */}
              <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1a3c34]">
                  <Sparkles className="w-4 h-4 text-[#c56d44]" />
                  <span>Repotting & Propagation</span>
                </div>
                <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
                  Repotting: {guide.repotting} • Propagation: {guide.propagation}
                </p>
              </div>
            </div>
          </section>

          {/* Common Problems for this specific plant */}
          <section className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#1a3c34] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#c56d44]" />
              Known Failure Points & Solutions
            </h3>
            <div className="space-y-2.5">
              {guide.commonProblems.map((prob, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#e9e5db] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-[#c56d44]">{prob.symptom}</p>
                    <p className="text-xs text-[#1a3c34]/80">{prob.fix}</p>
                  </div>
                  {(onSelectProblem || onOpenProblem) && (
                    <button
                      onClick={() => {
                        onClose();
                        handleProblemClick(prob.symptom);
                      }}
                      className="text-[11px] font-bold text-[#4caf50] hover:underline self-start sm:self-auto cursor-pointer shrink-0"
                    >
                      Diagnose symptom →
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Contextual Helpful Resource Banner */}
          <div className="p-4 rounded-2xl bg-[#e9e5db]/60 border border-[#e9e5db] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="text-xs font-bold text-[#1a3c34]">
                Want the printable failure checklist for this plant?
              </p>
              <p className="text-[11px] text-[#1a3c34]/75">
                Included in The Indoor Plant Survival Guide with full seasonal watering logs.
              </p>
            </div>
            {onOpenDigitalShop && (
              <button
                onClick={() => {
                  onClose();
                  onOpenDigitalShop();
                }}
                className="px-4 py-2 rounded-full bg-[#1a3c34] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4caf50] transition-colors shrink-0 cursor-pointer"
              >
                View Survival Guide
              </button>
            )}
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 bg-white border-t border-[#e9e5db] flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-[#1a3c34]/60">
            The Leafy Window Horticultural Field Guide
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
}
