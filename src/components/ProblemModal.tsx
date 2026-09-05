import { X, AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, Sprout, AlertTriangle, Clock, RefreshCw, HelpCircle, Package } from 'lucide-react';
import { PlantProblem } from '../types';

interface ProblemModalProps {
  problem: PlantProblem | null;
  onClose: () => void;
  onNavigateToGuides?: () => void;
  onOpenGuide?: (plantName: string) => void;
  onOpenShopCategory?: (category: string) => void;
  onOpenDigitalShop?: () => void;
}

export default function ProblemModal({
  problem,
  onClose,
  onNavigateToGuides,
  onOpenGuide,
  onOpenShopCategory,
  onOpenDigitalShop,
}: ProblemModalProps) {
  if (!problem) return null;

  const urgencyColors: Record<string, string> = {
    'Routine Adjustment': 'bg-[#edf7ed] text-[#4caf50] border-[#4caf50]/30',
    'Moderate Attention': 'bg-[#fff8e1] text-[#b78103] border-[#ffe082]',
    'Urgent Intervention': 'bg-[#fbeee8] text-[#c56d44] border-[#c56d44]/40',
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
        
        {/* Header with image */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#1a3c34] flex-shrink-0">
          <img
            src={problem.image}
            alt={problem.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34] via-[#1a3c34]/50 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="Close symptom modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 space-y-1.5 text-white">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${urgencyColors[problem.urgency] || 'bg-white/20 text-white'}`}>
                {problem.urgency}
              </span>
              <span className="text-[11px] text-white/80">
                {problem.category ? `${problem.category} • Triage File` : 'Diagnostic Triage File'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {problem.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
          
          {/* Brief Symptom Description */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-1">
            <p className="text-xs font-bold text-[#c56d44] uppercase tracking-wider">
              Primary Symptom
            </p>
            <p className="text-sm text-[#1a3c34]/85 leading-relaxed">
              {problem.symptomBrief}
            </p>
          </div>

          {/* Visual Signs to Confirm */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-sm text-[#1a3c34] uppercase tracking-wider flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#c56d44]" />
              Visual Identification Signs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {problem.visualCues.map((cue, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-[#e9e5db] text-xs text-[#1a3c34]/85 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c56d44] mt-1.5 shrink-0" />
                  <span>{cue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Root Causes */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-sm text-[#1a3c34] uppercase tracking-wider text-[#1a3c34]">
              Most Likely Root Causes
            </h3>
            <ul className="space-y-1.5 text-xs text-[#1a3c34]/80 pl-2">
              {problem.likelyCauses.map((cause, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#4caf50] font-bold">•</span>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Check First (if present) */}
          {(problem.whatToCheckFirst || problem.whatToCheck) && (
            <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-2">
              <h3 className="font-serif font-bold text-xs uppercase tracking-wider text-[#1a3c34] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#1a3c34]" />
                What to Physically Check Right Now
              </h3>
              <ul className="space-y-1.5 text-xs text-[#1a3c34]/80">
                {(problem.whatToCheckFirst || problem.whatToCheck || []).map((chk, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50] mt-1.5 shrink-0" />
                    <span>{chk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Immediate Action Plan */}
          <div className="p-5 rounded-2xl bg-[#edf7ed] border border-[#4caf50]/30 space-y-3">
            <h3 className="font-serif font-bold text-sm text-[#1a3c34] uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4caf50]" />
              Immediate Recovery Protocol (What to do today)
            </h3>
            <ol className="space-y-2 text-xs sm:text-sm text-[#1a3c34]/85">
              {(problem.whatToDoFirst || problem.immediateAction || []).map((action, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white text-[#4caf50] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {idx + 1}
                  </span>
                  <span>{action}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* What NOT to Do (Crucial botanical protection) */}
          {problem.whatNotToDo && problem.whatNotToDo.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#fbeee8] border border-[#c56d44]/30 space-y-2">
              <h3 className="font-serif font-bold text-xs uppercase tracking-wider text-[#c56d44] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#c56d44]" />
                Critical: What NOT to Do (Common Panics)
              </h3>
              <ul className="space-y-1.5 text-xs text-[#1a3c34]/85">
                {problem.whatNotToDo.map((bad, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#c56d44] font-bold shrink-0">✕</span>
                    <span>{bad}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* When to Wait vs. When to Repot */}
          {(problem.whenToWait || problem.whenToRepot) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {problem.whenToWait && (
                <div className="p-3.5 rounded-xl bg-white border border-[#e9e5db] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1a3c34]">
                    <Clock className="w-3.5 h-3.5 text-[#1a3c34]" />
                    <span>When to Wait & Observe</span>
                  </div>
                  <p className="text-xs text-[#1a3c34]/75">{problem.whenToWait}</p>
                </div>
              )}
              {problem.whenToRepot && (
                <div className="p-3.5 rounded-xl bg-white border border-[#e9e5db] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#c56d44]">
                    <RefreshCw className="w-3.5 h-3.5 text-[#c56d44]" />
                    <span>When Repotting is Required</span>
                  </div>
                  <p className="text-xs text-[#1a3c34]/75">{problem.whenToRepot}</p>
                </div>
              )}
            </div>
          )}

          {/* Long Term Prevention */}
          <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#4caf50] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-xs font-bold text-[#1a3c34] uppercase tracking-wider">
                How to Prevent Recurrence
              </p>
              <p className="text-xs text-[#1a3c34]/80 leading-relaxed">
                {problem.prevention}
              </p>
            </div>
          </div>

          {/* Plant-Specific Nuances */}
          {problem.plantSpecificNotes && Object.keys(problem.plantSpecificNotes).length > 0 && (
            <div className="p-4 rounded-2xl bg-white border border-[#e9e5db] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a3c34]">
                Species-Specific Behavior
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1a3c34]/80">
                {Object.entries(problem.plantSpecificNotes).map(([pl, note]) => (
                  <div key={pl} className="p-2.5 rounded-xl bg-[#f9f8f4]">
                    <span className="font-bold text-[#1a3c34] block mb-0.5">{pl}:</span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Affected Plant Families */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[11px] font-bold text-[#1a3c34] flex items-center gap-1">
              <Sprout className="w-3.5 h-3.5 text-[#4caf50]" /> Commonly impacts:
            </span>
            {problem.affectedPlants.map((plant, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (onOpenGuide) {
                    onOpenGuide(plant);
                  }
                }}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-colors ${
                  onOpenGuide
                    ? 'bg-[#edf7ed] hover:bg-[#4caf50] hover:text-white text-[#1a3c34] cursor-pointer'
                    : 'bg-[#e9e5db] text-[#1a3c34]'
                }`}
              >
                {plant} {onOpenGuide && '→'}
              </button>
            ))}
          </div>

          {/* Contextual Resource Link */}
          {onOpenDigitalShop && (
            <div className="p-4 rounded-2xl bg-[#fbeee8] border border-[#c56d44]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <p className="text-xs font-bold text-[#1a3c34]">
                  Need a printable emergency plant triage checklist?
                </p>
                <p className="text-[11px] text-[#1a3c34]/75">
                  Included in The Indoor Plant Survival Guide with full recovery flowcharts.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenDigitalShop();
                }}
                className="px-4 py-2 rounded-full bg-[#c56d44] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#b05832] transition-colors shrink-0 cursor-pointer"
              >
                Inspect Survival Guide
              </button>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="p-4 bg-white border-t border-[#e9e5db] flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-[#1a3c34]/60">
            The Leafy Window Diagnostic Center
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
