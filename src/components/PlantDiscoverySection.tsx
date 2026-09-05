import { useState, useMemo } from 'react';
import { PLANT_DISCOVERY_LIST } from '../data/plantDiscoveryData';
import { PlantDiscoveryItem, PlantGuide } from '../types';
import { Sun, Droplets, ShieldCheck, Heart, ArrowRight, Filter, Sparkles, Home, Check } from 'lucide-react';

interface PlantDiscoverySectionProps {
  onSelectGuideById: (guideId: string) => void;
  onNavigateToShop: () => void;
}

export default function PlantDiscoverySection({
  onSelectGuideById,
  onNavigateToShop,
}: PlantDiscoverySectionProps) {
  // Filter States
  const [lightFilter, setLightFilter] = useState<string>('All');
  const [wateringFilter, setWateringFilter] = useState<string>('All');
  const [roomFilter, setRoomFilter] = useState<string>('All');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  const [onlyPetSafe, setOnlyPetSafe] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const lightOptions = ['All', 'Low Light', 'Medium Indirect', 'Bright Indirect', 'Direct Light'];
  const wateringOptions = ['All', 'Low / Drought Tolerant', 'Moderate', 'Frequent / Evenly Moist'];
  const roomOptions = ['All', 'Living Room', 'Bedroom', 'Bathroom', 'Low-light Office', 'Sunny Sill'];
  const difficultyOptions = ['All', 'Easy', 'Intermediate'];

  // Filtered List
  const filteredPlants = useMemo(() => {
    return PLANT_DISCOVERY_LIST.filter((plant) => {
      if (lightFilter !== 'All' && plant.light !== lightFilter) return false;
      if (wateringFilter !== 'All' && plant.watering !== wateringFilter) return false;
      if (roomFilter !== 'All' && plant.roomType !== roomFilter) return false;
      if (difficultyFilter !== 'All' && plant.difficulty !== difficultyFilter) return false;
      if (onlyPetSafe && !plant.petSafe) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = plant.name.toLowerCase().includes(q);
        const matchesSci = plant.scientificName.toLowerCase().includes(q);
        const matchesSummary = plant.summary.toLowerCase().includes(q);
        if (!matchesName && !matchesSci && !matchesSummary) return false;
      }
      return true;
    });
  }, [lightFilter, wateringFilter, roomFilter, difficultyFilter, onlyPetSafe, searchQuery]);

  const resetFilters = () => {
    setLightFilter('All');
    setWateringFilter('All');
    setRoomFilter('All');
    setDifficultyFilter('All');
    setOnlyPetSafe(false);
    setSearchQuery('');
  };

  const hasActiveFilters =
    lightFilter !== 'All' ||
    wateringFilter !== 'All' ||
    roomFilter !== 'All' ||
    difficultyFilter !== 'All' ||
    onlyPetSafe ||
    searchQuery !== '';

  return (
    <section id="plants" className="py-20 bg-white border-b border-[#e9e5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4caf50]" />
            <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
              EXPLORE BY PLANT • DISCOVERY ECOSYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1a3c34] tracking-tight">
            Find the Right Plant <br className="hidden sm:inline" />
            <span className="italic text-[#4caf50]">For Your Exact Space.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#1a3c34]/80 leading-relaxed max-w-2xl mx-auto">
            Browse our core indoor botanical library by sunlight intensity, watering frequency, room atmosphere, and pet safety. Every specimen links directly to field-tested care protocols.
          </p>
        </div>

        {/* Filter Toolbar Container */}
        <div className="bg-[#f9f8f4] border border-[#e9e5db] rounded-3xl p-5 sm:p-6 mb-10 shadow-xs space-y-5">
          {/* Top Row: Search & Pet Safe Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name (e.g. Monstera, Pothos, Jade)..."
                className="w-full pl-4 pr-4 py-2.5 rounded-2xl bg-white border border-[#e9e5db] text-xs sm:text-sm text-[#1a3c34] focus:outline-hidden focus:border-[#4caf50] transition-colors"
              />
            </div>

            {/* Pet Friendly Toggle & Reset */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setOnlyPetSafe((prev) => !prev)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                  onlyPetSafe
                    ? 'bg-[#1a3c34] text-[#f9f8f4] border-[#1a3c34]'
                    : 'bg-white text-[#1a3c34]/80 border-[#e9e5db] hover:border-[#4caf50]'
                }`}
              >
                <ShieldCheck className={`w-4 h-4 ${onlyPetSafe ? 'text-[#4caf50]' : 'text-[#4caf50]'}`} />
                <span>Pet-Safe Only</span>
                {onlyPetSafe && <Check className="w-3.5 h-3.5 ml-0.5" />}
              </button>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-3 py-2 text-xs font-semibold text-[#c56d44] hover:underline cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Bottom Row: Categorical Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#e9e5db]">
            {/* Light Exposure Filter */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-[#c56d44]" />
                <span>Window Light</span>
              </label>
              <select
                value={lightFilter}
                onChange={(e) => setLightFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#e9e5db] text-xs text-[#1a3c34] focus:outline-hidden focus:border-[#4caf50] cursor-pointer"
              >
                {lightOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Watering Routine Filter */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#4caf50]" />
                <span>Watering Needs</span>
              </label>
              <select
                value={wateringFilter}
                onChange={(e) => setWateringFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#e9e5db] text-xs text-[#1a3c34] focus:outline-hidden focus:border-[#4caf50] cursor-pointer"
              >
                {wateringOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Room Suitability Filter */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#1a3c34]" />
                <span>Room Placement</span>
              </label>
              <select
                value={roomFilter}
                onChange={(e) => setRoomFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#e9e5db] text-xs text-[#1a3c34] focus:outline-hidden focus:border-[#4caf50] cursor-pointer"
              >
                {roomOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1a3c34] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#c56d44]" />
                <span>Experience Level</span>
              </label>
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#e9e5db] text-xs text-[#1a3c34] focus:outline-hidden focus:border-[#4caf50] cursor-pointer"
              >
                {difficultyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-semibold text-[#1a3c34]/70">
            Showing <strong className="text-[#1a3c34]">{filteredPlants.length}</strong> indoor botanical profiles
          </p>
          {filteredPlants.length === 0 && (
            <button
              onClick={resetFilters}
              className="text-xs font-bold text-[#c56d44] hover:underline cursor-pointer"
            >
              Reset filters to see all plants
            </button>
          )}
        </div>

        {/* Plant Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              id={`plant-card-${plant.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e9e5db] shadow-xs hover:border-[#4caf50] hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-3.5"
            >
              {/* Plant Image */}
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#e9e5db] mb-3">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Light badge */}
                  <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-[#1a3c34] px-2.5 py-0.5 rounded-full shadow-xs">
                    {plant.light}
                  </span>

                  {/* Pet Safe Badge */}
                  {plant.petSafe ? (
                    <span className="absolute top-2.5 left-2.5 bg-[#edf7ed] text-[#4caf50] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs border border-[#4caf50]/30">
                      🐾 Pet Safe
                    </span>
                  ) : (
                    <span className="absolute top-2.5 left-2.5 bg-black/60 text-white/90 text-[9px] font-medium tracking-wider px-2 py-0.5 rounded-full backdrop-blur-xs">
                      Mild Toxicity
                    </span>
                  )}

                  {/* Size & Habit */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-medium drop-shadow-xs">
                    <span>{plant.size} Size</span>
                    <span>{plant.growthHabit}</span>
                  </div>
                </div>

                {/* Name & Scientific */}
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-[#1a3c34] group-hover:text-[#4caf50] transition-colors leading-snug">
                    {plant.name}
                  </h3>
                  <p className="text-xs italic text-[#1a3c34]/60 font-serif">
                    {plant.scientificName}
                  </p>
                  <p className="text-xs text-[#1a3c34]/75 line-clamp-2 leading-relaxed pt-1">
                    {plant.summary}
                  </p>
                </div>

                {/* Quick Attributes */}
                <div className="mt-3 pt-3 border-t border-[#e9e5db] grid grid-cols-2 gap-2 text-[11px] text-[#1a3c34]/80">
                  <div className="flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-[#4caf50] shrink-0" />
                    <span className="truncate">{plant.watering}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-[#c56d44] shrink-0" />
                    <span className="truncate">{plant.roomType}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-[#e9e5db] flex items-center gap-2">
                {plant.guideId && (
                  <button
                    type="button"
                    onClick={() => onSelectGuideById(plant.guideId!)}
                    className="flex-1 py-2 px-3 rounded-xl bg-[#1a3c34] hover:bg-[#4caf50] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={onNavigateToShop}
                  title="Explore related pots, soil, and plants in Shop"
                  className="py-2 px-3 rounded-xl bg-[#f9f8f4] hover:bg-[#e9e5db] text-[#1a3c34] text-xs font-bold border border-[#e9e5db] transition-colors cursor-pointer"
                >
                  Shop
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#f9f8f4] border border-[#e9e5db] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-base text-[#1a3c34]">
              Unsure which window exposure matches your apartment?
            </h4>
            <p className="text-xs text-[#1a3c34]/75">
              Use our interactive Window Compass tool to measure distance from glass, obstruction, and lux levels.
            </p>
          </div>
          <a
            href="#window-light"
            className="px-5 py-2.5 rounded-full bg-[#c56d44] hover:bg-[#b05832] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            Open Window Light Tool →
          </a>
        </div>

      </div>
    </section>
  );
}
