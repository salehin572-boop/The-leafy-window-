import { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle, ArrowRight, Share2, Sparkles, Clock, Eye } from 'lucide-react';
import { VlogEpisode, Product } from '../types';
import { FEATURED_PRODUCTS } from '../data/plantData';

interface VideoModalProps {
  episode: VlogEpisode | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
}

export default function VideoModal({
  episode,
  onClose,
  onAddToCart,
  onViewProduct,
}: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(28);

  if (!episode) return null;

  const featuredProduct = episode.featuredProductId
    ? FEATURED_PRODUCTS.find((p) => p.id === episode.featuredProductId)
    : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#f9f8f4] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-10 animate-scale-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Simulated Screen */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <img
            src={episode.thumbnail}
            alt={episode.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isPlaying ? 'opacity-90' : 'opacity-60'
            }`}
          />

          {/* Playing Simulation Ambient Overlay */}
          {isPlaying && (
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4caf50] animate-ping" />
              <span>Playing Episode Guide</span>
            </div>
          )}

          {/* Center Play/Pause toggle overlay */}
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            {!isPlaying && (
              <div className="w-16 h-16 rounded-full bg-[#4caf50] text-white flex items-center justify-center shadow-xl transform scale-110 hover:scale-125 transition-transform duration-200">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
            )}
          </div>

          {/* Bottom Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white space-y-2">
            {/* Progress Scrub Bar */}
            <div
              className="w-full h-1.5 bg-white/30 rounded-full cursor-pointer overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(clickPos * 100));
              }}
            >
              <div
                className="h-full bg-[#4caf50] rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 hover:text-[#66bb6a] transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 hover:text-[#66bb6a] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-[11px] text-white/80 font-mono">
                  {Math.floor((progress / 100) * 8)}:24 / {episode.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-white/70">
                <span className="px-2 py-0.5 rounded bg-white/20">1080p HD</span>
                <span>The Leafy Window Care Studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Content & Plant Details */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[420px] overflow-y-auto">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full bg-[#edf7ed] text-[#4caf50] text-xs font-bold uppercase tracking-wider">
                {episode.category}
              </span>
              <span className="text-xs text-[#1a3c34]/60 flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-[#4caf50]" /> {episode.views}
              </span>
              <span className="text-xs text-[#1a3c34]/60">• {episode.date}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a3c34]">
              {episode.title}
            </h3>

            <p className="text-sm text-[#1a3c34]/80 mt-2 leading-relaxed">
              {episode.summary}
            </p>
          </div>

          {/* Key Horticultural Takeaways */}
          <div className="p-5 rounded-2xl bg-white border border-[#e9e5db] space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#1a3c34] uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#c56d44]" />
              Key Care Takeaways from this Episode
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#1a3c34]/80">
              {episode.keyTakeaways.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#4caf50] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Plant Spotlight if attached */}
          {featuredProduct && (
            <div className="p-4 rounded-2xl bg-[#edf7ed] border border-[#4caf50]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-xl object-cover bg-white"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c56d44]">
                    Plant Featured in this Video
                  </span>
                  <h5 className="font-serif font-bold text-base text-[#1a3c34]">
                    {featuredProduct.name}
                  </h5>
                  <p className="text-xs font-serif font-bold text-[#c56d44]">
                    ${featuredProduct.price} • {featuredProduct.potSize}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => onViewProduct(featuredProduct)}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-white text-[#1a3c34] text-xs font-bold uppercase tracking-wider border border-[#e9e5db] hover:bg-[#f9f8f4] transition-colors cursor-pointer"
                >
                  Inspect Specs
                </button>
                <button
                  onClick={() => onAddToCart(featuredProduct)}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
