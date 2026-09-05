import { useState, MouseEvent } from 'react';
import { Play, Clock, Eye, ArrowUpRight, Sparkles, Youtube, CheckCircle2, Bookmark } from 'lucide-react';
import { VlogEpisode } from '../types';
import { VLOG_EPISODES } from '../data/plantData';

interface VlogSectionProps {
  onSelectEpisode: (episode: VlogEpisode) => void;
  onViewProduct?: (productId: string) => void;
}

export default function VlogSection({ onSelectEpisode, onViewProduct }: VlogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [savedVideos, setSavedVideos] = useState<string[]>([]);

  const categories = ['All', 'Propagation', 'Plant Care 101', 'Terrariums & DIY', 'Window Light Guide'];

  const filteredEpisodes = activeCategory === 'All'
    ? VLOG_EPISODES
    : VLOG_EPISODES.filter((ep) => ep.category === activeCategory);

  const toggleSave = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setSavedVideos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="vlog" className="py-20 bg-[#f9f8f4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with "Watch All" link at top right as in Design HTML */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e9e5db] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50]" />
              <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
                THE CARE WINDOW VLOG
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a3c34] tracking-tight">
              Recent Episodes
            </h2>
            <p className="script font-script text-2xl text-[#c56d44] font-normal mt-0.5">
              Practical care tutorials & windowsill wisdom
            </p>
          </div>

          {/* Top Right "Watch All" Link requested in design */}
          <div className="flex items-center gap-3">
            <a
              id="vlog-watch-all-link"
              href="#vlog"
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory('All');
              }}
              className="text-xs uppercase tracking-widest text-[#4caf50] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Watch All</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1a3c34] text-[#f9f8f4] shadow-xs'
                  : 'bg-white text-[#1a3c34]/80 border border-[#e9e5db] hover:border-[#4caf50] hover:text-[#4caf50]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEpisodes.map((episode) => {
            const isSaved = savedVideos.includes(episode.id);

            return (
              <div
                key={episode.id}
                id={`vlog-card-${episode.id}`}
                onClick={() => onSelectEpisode(episode)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#e9e5db] shadow-xs hover:shadow-md hover:border-[#4caf50] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                {/* Thumbnail Container with Play Overlay matching design card */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#e9e5db] p-1">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Subtle gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Play Button Overlay with white/30 backdrop-blur as in design */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-md group-hover:bg-[#4caf50] group-hover:scale-110 transition-all duration-200">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Duration Chip */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[10px] font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#66bb6a]" />
                      <span>{episode.duration}</span>
                    </div>

                    {/* Category Pill on Image */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#1a3c34]/85 backdrop-blur-xs text-[#f9f8f4] text-[9px] font-bold tracking-wider uppercase">
                      {episode.category}
                    </div>

                    {/* Save / Bookmark Button */}
                    <button
                      onClick={(e) => toggleSave(episode.id, e)}
                      aria-label="Save for later"
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/85 text-[#1a3c34] hover:text-[#4caf50] transition-colors"
                    >
                      <Bookmark className={`w-3 h-3 ${isSaved ? 'fill-[#4caf50] text-[#4caf50]' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Video Info Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    {/* Meta view count and date */}
                    <div className="flex items-center gap-2 text-[11px] text-[#1a3c34]/60 mb-1.5 font-medium">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-[#4caf50]" />
                        {episode.views}
                      </span>
                      <span>•</span>
                      <span>{episode.date}</span>
                    </div>

                    {/* Practical & Engaging Title */}
                    <h3 className="font-serif font-bold text-base text-[#1a3c34] leading-snug group-hover:text-[#4caf50] transition-colors line-clamp-2">
                      {episode.title}
                    </h3>

                    {/* Summary text */}
                    <p className="text-xs text-[#1a3c34]/70 line-clamp-2 mt-1 leading-relaxed">
                      {episode.summary}
                    </p>
                  </div>

                  {/* Bottom footer with featured plant chip */}
                  {episode.featuredPlantName && (
                    <div className="pt-2.5 border-t border-[#e9e5db] flex items-center justify-between text-xs">
                      <span className="text-[10px] text-[#c56d44] font-bold uppercase tracking-wider truncate max-w-[160px]">
                        Featured: {episode.featuredPlantName}
                      </span>
                      <span className="text-[11px] font-bold text-[#4caf50] group-hover:underline flex items-center gap-0.5">
                        Watch <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Care Banner Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#1a3c34] text-[#f9f8f4] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#e9e5db]/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#66bb6a] text-[10px] font-bold uppercase tracking-wider">
              <Youtube className="w-3.5 h-3.5 text-red-400" /> New Episode Every Thursday at 10 AM
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold">Have a specific window or plant conundrum?</h3>
            <p className="text-xs sm:text-sm text-[#f9f8f4]/80 max-w-xl">
              We film weekly tutorials based on community questions sent through our care contact desk.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-natural whitespace-nowrap text-center"
          >
            Submit Topic
          </a>
        </div>

      </div>
    </section>
  );
}
