import { ReactNode } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs: { label: string; pageId?: string }[];
  onNavigate: (pageId: string) => void;
  actions?: ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  breadcrumbs,
  onNavigate,
  actions,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-[#edf7ed]/50 via-[#f9f8f4] to-[#f9f8f4] border-b border-[#e9e5db] pt-24 sm:pt-28 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-[#1a3c34]/60 font-medium">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#4caf50] transition-colors cursor-pointer flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#1a3c34]/40" />
              {crumb.pageId ? (
                <button
                  onClick={() => onNavigate(crumb.pageId!)}
                  className="hover:text-[#4caf50] transition-colors cursor-pointer"
                >
                  {crumb.label}
                </button>
              ) : (
                <span className="text-[#1a3c34] font-semibold">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Title & Badge Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            {badge && (
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1a3c34] text-[#f9f8f4]">
                {badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a3c34] tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm sm:text-base text-[#1a3c34]/75 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {actions && (
            <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
              {actions}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
