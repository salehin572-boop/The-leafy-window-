import { useState, useEffect } from 'react';
import { Compass, AlertCircle, Sparkles } from 'lucide-react';
import WindowLightTool from './WindowLightTool';
import ProblemFinderTool from './ProblemFinderTool';
import PageHeader from './PageHeader';
import { PlantGuide, PlantProblem } from '../types';

interface ToolsPageProps {
  initialTool?: 'window-light' | 'diagnostic-tool';
  onNavigate: (pageId: string) => void;
  onSelectGuide?: (guide: PlantGuide) => void;
  onSelectProblem?: (problem: PlantProblem) => void;
}

export default function ToolsPage({
  initialTool = 'window-light',
  onNavigate,
  onSelectGuide,
  onSelectProblem,
}: ToolsPageProps) {
  const [activeTool, setActiveTool] = useState<'window-light' | 'diagnostic-tool'>(initialTool);

  useEffect(() => {
    if (initialTool) {
      setActiveTool(initialTool);
    }
  }, [initialTool]);

  return (
    <div className="min-h-screen bg-[#f9f8f4]">
      {/* Page Header */}
      <PageHeader
        title="Botanical Interactive Tools"
        subtitle="Calibrate indoor light exposure with our window compass or diagnose ailing plants with step-by-step triage."
        badge="Interactive Botanical Suite"
        breadcrumbs={[
          { label: 'Tools' },
          { label: activeTool === 'window-light' ? 'Window Light Guide' : 'Plant Problem Finder' },
        ]}
        onNavigate={onNavigate}
        actions={
          <div className="inline-flex p-1 rounded-full bg-white border border-[#e9e5db] shadow-xs">
            <button
              onClick={() => setActiveTool('window-light')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTool === 'window-light'
                  ? 'bg-[#1a3c34] text-white shadow-xs'
                  : 'text-[#1a3c34]/70 hover:text-[#1a3c34]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Window Light Guide</span>
            </button>
            <button
              onClick={() => setActiveTool('diagnostic-tool')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTool === 'diagnostic-tool'
                  ? 'bg-[#c56d44] text-white shadow-xs'
                  : 'text-[#1a3c34]/70 hover:text-[#1a3c34]'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Plant Problem Finder</span>
            </button>
          </div>
        }
      />

      {/* Main Tool Container */}
      <div className="py-6">
        {activeTool === 'window-light' ? (
          <div>
            <WindowLightTool
              onSelectGuide={onSelectGuide}
              onNavigateToGuides={() => onNavigate('guides')}
            />
          </div>
        ) : (
          <div>
            <ProblemFinderTool
              onSelectProblem={onSelectProblem}
              onOpenDigitalShop={() => onNavigate('shop')}
            />
          </div>
        )}
      </div>

    </div>
  );
}
