import { useState } from 'react';
import { AlertCircle, CheckCircle, RefreshCw, ArrowRight, HelpCircle, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';
import { PlantProblem } from '../types';
import { PLANT_PROBLEMS } from '../data/knowledgeData';

interface ProblemFinderToolProps {
  onSelectProblem?: (problem: PlantProblem) => void;
  onOpenProblemModal?: (problemId: string) => void;
  onOpenDigitalShop?: () => void;
}

export default function ProblemFinderTool({ onSelectProblem, onOpenProblemModal, onOpenDigitalShop }: ProblemFinderToolProps) {
  // Step tracker
  const [step, setStep] = useState<number>(1);

  // Form selections
  const [plantType, setPlantType] = useState<string>('monstera');
  const [symptom, setSymptom] = useState<string>('yellow-leaves');
  const [location, setLocation] = useState<string>('near-window');
  const [lightLevel, setLightLevel] = useState<string>('medium-indirect');
  const [waterFrequency, setWaterFrequency] = useState<string>('calendar');
  const [soilFeel, setSoilFeel] = useState<string>('wet-top');

  const plantOptions = [
    { id: 'monstera', label: 'Monstera / Philodendron / Pothos', group: 'Aroids' },
    { id: 'succulent', label: 'Jade / Cacti / Echeveria', group: 'Succulents' },
    { id: 'hardy', label: 'ZZ Plant / Snake Plant', group: 'Resilient Foliage' },
    { id: 'tropical', label: 'Peace Lily / Fittonia / Fern', group: 'Moisture Lovers' },
    { id: 'tree', label: 'Fiddle Leaf Fig / Rubber Tree', group: 'Indoor Trees' },
  ];

  const symptomOptions = [
    { id: 'yellow-leaves', label: 'Yellowing leaves (starting at bottom or scattered)' },
    { id: 'brown-tips', label: 'Crispy brown tips or dry paper-like leaf edges' },
    { id: 'curling', label: 'Leaves curling inward like cylinders or cupping downward' },
    { id: 'drooping', label: 'Entire plant limp, wilting, or collapsed over pot edge' },
    { id: 'mushy-stem', label: 'Soft, black, or squishy stems near the soil surface' },
    { id: 'gnats', label: 'Tiny black flies hovering over soil surface' },
    { id: 'leggy', label: 'Thin, stretched stems with small leaves leaning toward light' },
  ];

  const locationOptions = [
    { id: 'right-on-sill', label: 'Directly on window sill (unshaded glass)' },
    { id: 'near-window', label: '2–4 feet from window with gentle or filtered light' },
    { id: 'deep-room', label: '6+ feet away in center of room / dark corner' },
  ];

  const soilOptions = [
    { id: 'wet-top', label: 'Top 2 inches feel soggy/wet for over 5 days' },
    { id: 'bone-dry', label: 'Bone dry throughout, soil pulling away from pot edges' },
    { id: 'compacted', label: 'Hard, compacted crust where water runs down the sides' },
  ];

  const waterOptions = [
    { id: 'calendar', label: 'Fixed schedule (e.g. every Sunday regardless of soil)' },
    { id: 'finger-test', label: 'Only when top 2 inches feel dry to finger touch' },
    { id: 'random', label: 'Irregularly / when I remember' },
  ];

  // Logic to synthesize diagnosis
  const getDiagnosticResult = () => {
    // 1. Overwatering / Root Rot risk
    if ((soilFeel === 'wet-top' || waterFrequency === 'calendar') && (symptom === 'yellow-leaves' || symptom === 'mushy-stem' || symptom === 'drooping')) {
      return {
        severity: 'High Priority Check',
        likelyCauses: [
          'Root zone saturation and anaerobic suffocation from frequent watering.',
          'Container lacking an open drainage hole or standing in collected saucer water.',
          'Dense peat soil mix holding moisture longer than the plant can consume.'
        ],
        thingsToCheck: [
          'Lift the nursery pot: does it feel significantly heavy with water weight?',
          'Inspect pot bottom: are roots white and firm, or brown, mushy, and stringy?',
          'Check if decorative cachepot has 1–2 inches of stagnant standing water trapped at the bottom.'
        ],
        tryThisFirst: [
          'Stop all watering immediately. Move the plant 2 feet closer to gentle indirect light to speed transpirational dry-down.',
          'Empty any water collected in outer saucers or decorative planters.',
          'If stems smell sour or feel squishy, unpot and prune away rotting roots before repotting in chunky aerated aroid mix.'
        ],
        relatedProblemId: 'yellow-leaves'
      };
    }

    // 2. Underwatering / Drought Stress
    if (soilFeel === 'bone-dry' || symptom === 'curling' || (symptom === 'drooping' && soilFeel !== 'wet-top')) {
      return {
        severity: 'Immediate Hydration Needed',
        likelyCauses: [
          'Acute root ball dehydration: soil has become hydrophobic and repels water.',
          'Leaves are curling or wilting inward to minimize surface evaporation area.',
          'Heat stress from intense unshaded window glass or nearby heating register.'
        ],
        thingsToCheck: [
          'Is the potting soil pulled away from the sides of the pot creating a gap?',
          'When you pour water, does it instantly run out the bottom without soaking the root ball?'
        ],
        tryThisFirst: [
          'Give the plant a 30-minute "bottom watering" bath: place pot in a basin with 2 inches of room-temp water so it wicks upward.',
          'Trim only completely desiccated, dead crispy foliage (leave partly green leaves alone).',
          'Move 2 feet away from heat radiators or harsh direct afternoon sun.'
        ],
        relatedProblemId: 'curling-leaves'
      };
    }

    // 3. Low Humidity / Tap Water Minerals
    if (symptom === 'brown-tips') {
      return {
        severity: 'Environmental Adjustment',
        likelyCauses: [
          'Dry indoor ambient air (below 40% humidity), exacerbated by winter heaters.',
          'Sensitivity to chlorine, fluoride, or dissolved salts in municipal tap water.',
          'Inconsistent soil moisture cycles (going from bone-dry to waterlogged).'
        ],
        thingsToCheck: [
          'Is the plant located within the draft zone of an air conditioner or heating vent?',
          'Does your city tap water have high mineral hardness or chloramines?'
        ],
        tryThisFirst: [
          'Group tropical houseplants together on a pebble tray or run a cool-mist ultrasonic humidifier nearby.',
          'Switch to resting your tap water for 24 hours, or use filtered/distilled water for sensitive plants like Peace Lilies and Spiders.',
          'Trim brown tips with sterile scissors, leaving a microscopic margin of brown so live tissue is not cut.'
        ],
        relatedProblemId: 'brown-leaf-tips'
      };
    }

    // 4. Fungus Gnats
    if (symptom === 'gnats') {
      return {
        severity: 'Surface Moisture Management',
        likelyCauses: [
          'Top 1–2 inches of soil remain consistently moist, providing organic nourishment for gnat larvae.',
          'Bagged commercial soil that was stored damp outdoors before purchase.'
        ],
        thingsToCheck: [
          'Are adults flying up specifically when you disturb the soil or pour water?',
          'Is the top layer of soil covered in slow-decomposing organic debris?'
        ],
        tryThisFirst: [
          'Allow the top 2–3 inches of soil to completely dry between waterings — larvae cannot survive in dry substrate.',
          'Insert yellow sticky cards at soil level to intercept breeding adults.',
          'Water with Mosquito Bit tea (BTI bacteria) on your next two watering sessions to safely neutralize larvae.'
        ],
        relatedProblemId: 'fungus-gnats'
      };
    }

    // 5. Etiolation / Insufficient Light
    return {
      severity: 'Sunlight Energy Deficit',
      likelyCauses: [
        'Etiolation: the plant is spending internal starch reserves stretching its stems toward the nearest window.',
        'Ambient room light is below the minimum threshold required for active photosynthetic leaf growth.'
      ],
      thingsToCheck: [
        'How many feet is the plant from the nearest unobstructed exterior window?',
        'Are new leaves significantly smaller than the older base leaves?'
      ],
      tryThisFirst: [
        'Move the plant within 2–4 feet of your brightest East or South-facing window.',
        'If window placement is limited, supplement with an E26 36W full-spectrum LED grow light bulb on a 12-hour timer.',
        'Prune back weak, leggy stems to encourage bushier root-level branching.'
      ],
      relatedProblemId: 'leggy-growth'
    };
  };

  const result = getDiagnosticResult();

  const resetFinder = () => {
    setStep(1);
    setPlantType('monstera');
    setSymptom('yellow-leaves');
    setSoilFeel('wet-top');
    setWaterFrequency('calendar');
  };

  return (
    <section id="diagnostic-tool" className="py-16 md:py-20 bg-[#f9f8f4] border-b border-[#e9e5db]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbeee8] border border-[#c56d44]/30 text-[#c56d44] text-[10px] font-bold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5" />
            Interactive Triage Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a3c34] tracking-tight">
            What’s Wrong With My Plant?
          </h2>
          <p className="text-sm sm:text-base text-[#1a3c34]/80 leading-relaxed">
            Answer 4 quick questions about your plant’s symptoms and soil. We will pinpoint the most likely causes and give you a practical, step-by-step triage plan.
          </p>
        </div>

        {/* Diagnostic Tool Box */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#e9e5db] overflow-hidden">
          
          {/* Step Progress Indicator */}
          <div className="bg-[#1a3c34] p-4 sm:p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#4caf50] text-white font-bold text-xs flex items-center justify-center">
                {step <= 4 ? step : '✓'}
              </span>
              <span className="font-serif font-bold text-sm tracking-wide">
                {step === 1 && 'Step 1: Identify Your Plant Family'}
                {step === 2 && 'Step 2: What is the Primary Symptom?'}
                {step === 3 && 'Step 3: Location & Sunlight Environment'}
                {step === 4 && 'Step 4: Soil Condition & Watering Habit'}
                {step === 5 && 'Preliminary Diagnostic Findings'}
              </span>
            </div>
            {step < 5 ? (
              <span className="text-[11px] font-mono text-white/70">Step {step} of 4</span>
            ) : (
              <button
                onClick={resetFinder}
                className="text-xs font-bold text-[#4caf50] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Start Over
              </button>
            )}
          </div>

          <div className="p-6 sm:p-8">
            
            {/* STEP 1: Plant Type */}
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-base font-serif font-bold text-[#1a3c34]">
                  What type of indoor plant are you troubleshooting?
                </h3>
                <div className="space-y-2.5">
                  {plantOptions.map((opt) => (
                    <label
                      key={opt.id}
                      onClick={() => setPlantType(opt.id)}
                      className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        plantType === opt.id
                          ? 'border-[#4caf50] bg-[#edf7ed] shadow-xs'
                          : 'border-[#e9e5db] bg-[#f9f8f4] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          plantType === opt.id ? 'border-[#4caf50] bg-[#4caf50]' : 'border-[#1a3c34]/40'
                        }`}>
                          {plantType === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <span className="text-sm font-semibold text-[#1a3c34]">{opt.label}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-[#c56d44] bg-white px-2 py-0.5 rounded-full border border-[#e9e5db]">
                        {opt.group}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-natural inline-flex items-center gap-2"
                  >
                    <span>Next: Choose Symptom</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Main Symptom */}
            {step === 2 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-base font-serif font-bold text-[#1a3c34]">
                  What is the most alarming symptom right now?
                </h3>
                <div className="space-y-2.5">
                  {symptomOptions.map((opt) => (
                    <label
                      key={opt.id}
                      onClick={() => setSymptom(opt.id)}
                      className={`flex items-center p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        symptom === opt.id
                          ? 'border-[#4caf50] bg-[#edf7ed] shadow-xs'
                          : 'border-[#e9e5db] bg-[#f9f8f4] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          symptom === opt.id ? 'border-[#4caf50] bg-[#4caf50]' : 'border-[#1a3c34]/40'
                        }`}>
                          {symptom === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <span className="text-sm font-semibold text-[#1a3c34]">{opt.label}</span>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-[#1a3c34]/70 hover:text-[#1a3c34] cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn-natural inline-flex items-center gap-2"
                  >
                    <span>Next: Location & Light</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Location */}
            {step === 3 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-base font-serif font-bold text-[#1a3c34]">
                  Where does the plant sit in relation to your window?
                </h3>
                <div className="space-y-2.5">
                  {locationOptions.map((opt) => (
                    <label
                      key={opt.id}
                      onClick={() => setLocation(opt.id)}
                      className={`flex items-center p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        location === opt.id
                          ? 'border-[#4caf50] bg-[#edf7ed] shadow-xs'
                          : 'border-[#e9e5db] bg-[#f9f8f4] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          location === opt.id ? 'border-[#4caf50] bg-[#4caf50]' : 'border-[#1a3c34]/40'
                        }`}>
                          {location === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <span className="text-sm font-semibold text-[#1a3c34]">{opt.label}</span>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs font-bold text-[#1a3c34]/70 hover:text-[#1a3c34] cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="btn-natural inline-flex items-center gap-2"
                  >
                    <span>Next: Soil & Moisture</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Soil feel & watering habit */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-base font-serif font-bold text-[#1a3c34] mb-3">
                    What does the soil feel like right now (2 inches down)?
                  </h3>
                  <div className="space-y-2">
                    {soilOptions.map((opt) => (
                      <label
                        key={opt.id}
                        onClick={() => setSoilFeel(opt.id)}
                        className={`flex items-center p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                          soilFeel === opt.id
                            ? 'border-[#4caf50] bg-[#edf7ed] shadow-xs'
                            : 'border-[#e9e5db] bg-[#f9f8f4] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            soilFeel === opt.id ? 'border-[#4caf50] bg-[#4caf50]' : 'border-[#1a3c34]/40'
                          }`}>
                            {soilFeel === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-[#1a3c34]">{opt.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-serif font-bold text-[#1a3c34] mb-3">
                    How do you typically decide when to water?
                  </h3>
                  <div className="space-y-2">
                    {waterOptions.map((opt) => (
                      <label
                        key={opt.id}
                        onClick={() => setWaterFrequency(opt.id)}
                        className={`flex items-center p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                          waterFrequency === opt.id
                            ? 'border-[#4caf50] bg-[#edf7ed] shadow-xs'
                            : 'border-[#e9e5db] bg-[#f9f8f4] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            waterFrequency === opt.id ? 'border-[#4caf50] bg-[#4caf50]' : 'border-[#1a3c34]/40'
                          }`}>
                            {waterFrequency === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-[#1a3c34]">{opt.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setStep(3)}
                    className="text-xs font-bold text-[#1a3c34]/70 hover:text-[#1a3c34] cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(5)}
                    className="btn-natural inline-flex items-center gap-2"
                  >
                    <span>Run Diagnostic Triage</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Results & Action Plan */}
            {step === 5 && (
              <div className="space-y-6 animate-scale-in">
                
                {/* Disclaimer banner */}
                <div className="p-3.5 rounded-xl bg-[#fff8e1] border border-[#ffe082] text-xs text-[#b78103] flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 shrink-0" />
                  <span>
                    <strong>Preliminary Assessment:</strong> Indoor environments have many micro-variables. These represent the <em>most likely causes</em> and recommended steps based on your answers.
                  </span>
                </div>

                {/* Most Likely Causes */}
                <div className="p-5 rounded-2xl bg-white border border-[#e9e5db] space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-base text-[#1a3c34] flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-[#c56d44]" />
                      Most Likely Causes
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#fbeee8] text-[#c56d44]">
                      {result.severity}
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#1a3c34]/85">
                    {result.likelyCauses.map((cause, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c56d44] mt-2 shrink-0" />
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Things to Check */}
                <div className="p-5 rounded-2xl bg-[#f9f8f4] border border-[#e9e5db] space-y-3">
                  <h4 className="font-serif font-bold text-sm text-[#1a3c34] uppercase tracking-wider text-[#1a3c34]">
                    Things to Check Right Away
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#1a3c34]/80">
                    {result.thingsToCheck.map((chk, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#4caf50] font-bold">✓</span>
                        <span>{chk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Try This First (Immediate Action Plan) */}
                <div className="p-5 rounded-2xl bg-[#edf7ed] border border-[#4caf50]/40 space-y-3">
                  <h4 className="font-serif font-bold text-sm text-[#1a3c34] uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4caf50]" />
                    Try This First (Immediate Action Plan)
                  </h4>
                  <ol className="space-y-2.5 text-xs sm:text-sm text-[#1a3c34]/90">
                    {result.tryThisFirst.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-white text-[#4caf50] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          {idx + 1}
                        </span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Actions & Next Steps */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#e9e5db]">
                  {(onSelectProblem || onOpenProblemModal) && (
                    <button
                      onClick={() => {
                        if (onSelectProblem) {
                          const prob = PLANT_PROBLEMS.find((p) => p.id === result.relatedProblemId) || PLANT_PROBLEMS[0];
                          onSelectProblem(prob);
                        } else if (onOpenProblemModal) {
                          onOpenProblemModal(result.relatedProblemId);
                        }
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#1a3c34] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4caf50] transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Read Detailed Symptom File</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <button
                    onClick={resetFinder}
                    className="text-xs font-bold text-[#1a3c34]/70 hover:text-[#1a3c34] flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" /> Test Another Plant
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
