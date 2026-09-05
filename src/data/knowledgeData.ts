import { PlantGuide, PlantProblem, ProductReview, DigitalProduct, Article } from '../types';

export const PLANT_GUIDES: PlantGuide[] = [
  {
    id: 'monstera-deliciosa',
    name: 'Monstera Deliciosa (Swiss Cheese Plant)',
    scientificName: 'Monstera deliciosa',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80',
    category: 'Aroid',
    difficulty: 'Beginner Friendly',
    light: 'Bright Indirect',
    water: 'When top 2–3 inches of soil feel dry to the touch (typically every 7–10 days in growing season).',
    humidity: '50% – 70% preferred; tolerates average household levels (40%+).',
    temperature: '65°F – 85°F (18°C – 29°C). Protect from chilly drafts below 55°F.',
    soil: 'Chunky, well-aerated potting mix containing 40% organic compost, 30% orchid bark, 20% perlite, and 10% worm castings.',
    feeding: 'Balanced liquid houseplant fertilizer diluted to half strength monthly through spring and summer.',
    repotting: 'Every 18–24 months in spring when roots coil at the pot drainage base.',
    propagation: 'Stem cuttings with at least one active aerial root node in clean water or moist sphagnum moss.',
    petSafe: false,
    quickOverview: 'An iconic tropical climber prized for its expansive, perforated leaves that develop architectural splits (fenestrations) as light exposure increases.',
    quickCareSummary: [
      'Position 3–5 feet from an East or South-facing window with sheer filtering.',
      'Water thoroughly until moisture runs freely from bottom drainage holes, then discard saucer pool.',
      'Stake early with a sturdy moss pole or cedar trellis to support climbing vines.',
      'Wipe foliage monthly with a damp cloth to clear dust and enhance light absorption.'
    ],
    commonProblems: [
      { symptom: 'No leaf splits (fenestrations)', fix: 'Plant requires more bright indirect light; move closer to window.' },
      { symptom: 'Yellowing bottom leaves with damp soil', fix: 'Root saturation from overwatering; allow soil to dry down and ensure container drains.' },
      { symptom: 'Brown crispy edges', fix: 'Air humidity is too low or water contains high fluoride/chlorine salts.' }
    ]
  },
  {
    id: 'zz-plant',
    name: 'ZZ Plant (Zanzibar Gem)',
    scientificName: 'Zamioculcas zamiifolia',
    image: 'https://images.unsplash.com/photo-1632307416543-55f661256240?auto=format&fit=crop&w=1000&q=80',
    category: 'Hardy',
    difficulty: 'Beginner Friendly',
    light: 'Low Light',
    water: 'Infrequent: allow soil to dry completely throughout the pot (every 2–4 weeks).',
    humidity: 'Adaptable; thrives in normal dry room humidity.',
    temperature: '60°F – 80°F (15°C – 27°C).',
    soil: 'Cactus or succulent blend mixed with 30% perlite or pumice to prevent moisture retention.',
    feeding: 'Minimal: once in mid-spring and once in mid-summer with balanced foliage food.',
    repotting: 'Only when underground rhizomes visibly stretch or distort the nursery pot (every 2–3 years).',
    propagation: 'Division of underground potato-like tubers or stem cuttings rooted in soil.',
    petSafe: false,
    quickOverview: 'Virtually indestructible houseplant with upright, naturally glossy emerald foliage rising from nutrient-storing underground rhizomes.',
    quickCareSummary: [
      'Tolerates low light and interior spaces devoid of direct window access.',
      'Stores water internally: always err on the side of underwatering rather than overwatering.',
      'Do not use synthetic leaf shine; the glossy patina is completely natural.'
    ],
    commonProblems: [
      { symptom: 'Soft, mushy stems falling over', fix: 'Severe overwatering causing rhizome rot. Unpot, slice away brown mushy roots, and repot in dry gritty mix.' },
      { symptom: 'Wrinkled shriveled stems', fix: 'Severe prolonged dehydration; provide a thorough bottom soak.' }
    ]
  },
  {
    id: 'jade-plant',
    name: 'Jade Plant (Crassula ovata)',
    scientificName: 'Crassula ovata',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80',
    category: 'Succulent',
    difficulty: 'Beginner Friendly',
    light: 'Bright Direct',
    water: 'Soak thoroughly only when fleshy leaves feel slightly soft to gentle pinch (every 2–3 weeks).',
    humidity: 'Prefers arid to dry household air (30%–50%).',
    temperature: '65°F – 75°F (18°C – 24°C); cooler 55°F nights in winter encourage bloom spikes.',
    soil: 'Gritty, fast-draining succulent soil (pumice, coarse grit, potting soil in equal parts).',
    feeding: 'Organic succulent fertilizer once every 6 weeks during spring and summer.',
    repotting: 'Every 2–3 years in heavy, unglazed terracotta to anchor the heavy woody canopy.',
    propagation: 'Single leaf or stem cuttings left to callus for 3 days before resting on dry potting grit.',
    petSafe: false,
    quickOverview: 'A sculptural, tree-like succulent with jade-green oval leaves and thick woody stems, celebrated for longevity and minimal care demands.',
    quickCareSummary: [
      'Demands 4–6 hours of direct sun daily; best placed directly on South or West window ledges.',
      'Plant in heavy porous terracotta so top-heavy branches remain stable.',
      'Never allow pot to stand in pooled saucer water.'
    ],
    commonProblems: [
      { symptom: 'Leaves dropping off with minor touch', fix: 'Soggy soil holding stagnant moisture; withhold water and check root health.' },
      { symptom: 'Stretching, thin stems with wide spacing', fix: 'Etiolation from lack of sunlight; relocate to your brightest window.' }
    ]
  },
  {
    id: 'golden-pothos',
    name: 'Golden Pothos (Devil’s Ivy)',
    scientificName: 'Epipremnum aureum',
    image: 'https://images.unsplash.com/photo-1596724807490-a7d0e40fa5e3?auto=format&fit=crop&w=1000&q=80',
    category: 'Trailing',
    difficulty: 'Beginner Friendly',
    light: 'Medium Indirect',
    water: 'When top 2 inches dry out; visibly droops slightly to signal thirst without sustaining damage.',
    humidity: 'Highly adaptable (40%–60%).',
    temperature: '65°F – 85°F (18°C – 29°C).',
    soil: 'Standard indoor potting soil with 20% perlite for root aeration.',
    feeding: 'Dilute houseplant feed every 4 weeks in active growing months.',
    repotting: 'When root-bound, usually every 1–2 years.',
    propagation: 'Single-node stem cuttings root in tap water within 10–14 days.',
    petSafe: false,
    quickOverview: 'Heart-shaped trailing vine marbled with golden streaks. Forgiving of missed waterings and thrives cascading from shelves or climbing up poles.',
    quickCareSummary: [
      'Grows in nearly any light level; brighter indirect light yields vivid golden variegation.',
      'Water thoroughly, let excess drain, and empty catch-trays.',
      'Trim trailing vines periodically to encourage bushier root-level growth.'
    ],
    commonProblems: [
      { symptom: 'Foliage turning solid green without gold streaks', fix: 'Not receiving enough light to sustain variegation; move 2 feet closer to window.' },
      { symptom: 'Limp, curling leaves', fix: 'Soil is dried out; give a deep drink and leaves will reinflate within hours.' }
    ]
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant (Sansevieria / Dracaena trifasciata)',
    scientificName: 'Dracaena trifasciata',
    image: 'https://images.unsplash.com/photo-1599598425947-320b57dd166c?auto=format&fit=crop&w=1000&q=80',
    category: 'Hardy',
    difficulty: 'Beginner Friendly',
    light: 'Low Light',
    water: 'Once every 2–4 weeks; let soil dry out 100% between thorough waterings.',
    humidity: 'Normal to dry ambient air.',
    temperature: '60°F – 85°F (15°C – 29°C).',
    soil: 'Sharp-draining cactus and succulent mix with perlite or pumice.',
    feeding: 'Light feeding 1–2 times per year during summer.',
    repotting: 'Rarely: prefers being snug in its pot.',
    propagation: 'Leaf cuttings or rhizome division.',
    petSafe: false,
    quickOverview: 'Stately, architectural vertical sword-like foliage with yellow margins. Exceptional resilience to low light and irregular watering schedules.',
    quickCareSummary: [
      'Tolerates corners and spaces where delicate tropical plants fail.',
      'Pour water directly onto soil, not into the center rosette where water can sit and cause crown rot.'
    ],
    commonProblems: [
      { symptom: 'Brown mushy base and falling leaves', fix: 'Crown or root rot from overwatering; stop watering immediately.' }
    ]
  },
  {
    id: 'fittonia',
    name: 'Fittonia (Nerve Plant)',
    scientificName: 'Fittonia albivenis',
    image: 'https://images.unsplash.com/photo-1596726912305-629a13b54e44?auto=format&fit=crop&w=1000&q=80',
    category: 'Foliage',
    difficulty: 'Moderate',
    light: 'Medium Indirect',
    water: 'Keep consistently lightly moist; dramatic wilting occurs if soil dries completely.',
    humidity: 'High (60%+); exceptional candidate for open terrariums or cloches.',
    temperature: '65°F – 80°F (18°C – 27°C).',
    soil: 'Peat-rich or coco coir potting mix with vermiculite for gentle moisture retention.',
    feeding: 'Very weak liquid feed monthly during summer.',
    repotting: 'Annually in spring into shallow pots.',
    propagation: 'Stem-tip cuttings in moist potting medium.',
    petSafe: true,
    quickOverview: 'Compact, jewel-like foliage patterned with delicate mosaic veins in crimson, pink, or ivory. Famed for dramatic "fainting" when thirsty.',
    quickCareSummary: [
      'Shield strictly from direct sun which crisps delicate leaves.',
      'Never let rootball desiccate completely; keep moisture consistent but not swampy.',
      'Safe around cats and dogs.'
    ],
    commonProblems: [
      { symptom: 'Complete dramatic plant collapse/wilt', fix: 'The plant is thirsty. Water immediately and it will stand upright within 2 hours.' },
      { symptom: 'Yellowing, translucent foliage', fix: 'Soggy soil from poor drainage. Improve aeration.' }
    ]
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily (Spathiphyllum)',
    scientificName: 'Spathiphyllum wallisii',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=1000&q=80',
    category: 'Foliage',
    difficulty: 'Beginner Friendly',
    light: 'Medium Indirect',
    water: 'Weekly; keep soil evenly moist without standing in puddle.',
    humidity: '55% – 70%.',
    temperature: '65°F – 80°F.',
    soil: 'Rich, aerated potting soil with peat and perlite.',
    feeding: 'Organic houseplant feed every 6 weeks during spring.',
    repotting: 'Every 1–2 years when roots fill pot.',
    propagation: 'Crown division during spring repotting.',
    petSafe: false,
    quickOverview: 'Graceful glossy green foliage topped with serene white floral spathes. Highly communicative communicator that droops visibly when thirsty.',
    quickCareSummary: [
      'Enjoys medium, gentle indirect window light.',
      'Sensitive to harsh tap water minerals; use filtered or rested room-temp water to prevent tip browning.'
    ],
    commonProblems: [
      { symptom: 'Black leaf tips', fix: 'Chemical buildup from tap water (chlorine/fluoride) or dry air; switch to filtered water.' },
      { symptom: 'Green flowers', fix: 'Natural aging or excessive fertilizer application; reduce feeding strength.' }
    ]
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant (Ficus elastica)',
    scientificName: 'Ficus elastica',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80',
    category: 'Aroid',
    difficulty: 'Moderate',
    light: 'Bright Indirect',
    water: 'Allow top 50% of soil volume to dry before watering deeply.',
    humidity: '45% – 60%.',
    temperature: '65°F – 78°F.',
    soil: 'Well-draining chunky aroid blend with pine bark.',
    feeding: 'Monthly balanced fertilizer during spring and summer.',
    repotting: 'Every 2 years in spring.',
    propagation: 'Air layering or stem cuttings with rooting hormone.',
    petSafe: false,
    quickOverview: 'Stately architectural indoor tree with thick, leathery burgundy-green leaves and a bold glossy shine that makes a prominent room centerpiece.',
    quickCareSummary: [
      'Needs ample bright indirect light to maintain deep burgundy pigment.',
      'Dust broad leaves regularly with a soft damp microfiber cloth.'
    ],
    commonProblems: [
      { symptom: 'Dropping lower leaves', fix: 'Sudden cold draft or relocation shock; keep in a stable warm location.' }
    ]
  },
  {
    id: 'spider-plant',
    name: 'Spider Plant (Chlorophytum comosum)',
    scientificName: 'Chlorophytum comosum',
    image: 'https://images.unsplash.com/photo-1572688484437-5086576628b0?auto=format&fit=crop&w=1000&q=80',
    category: 'Trailing',
    difficulty: 'Beginner Friendly',
    light: 'Medium Indirect',
    water: 'Water once top 1–2 inches dry out; stores water in thick fleshy roots.',
    humidity: '40% – 60%.',
    temperature: '55°F – 75°F.',
    soil: 'Standard potting soil with coarse sand or perlite.',
    feeding: 'Twice during spring/summer with dilute organic feed.',
    repotting: 'When fleshy roots push the soil up near rim.',
    propagation: 'Snip off dangling "spiderettes" and root in water or moist soil.',
    petSafe: true,
    quickOverview: 'Ribbon-like arching leaves with cream center stripes. Produces charming miniature plantlets on long stems that are effortless to propagate.',
    quickCareSummary: [
      'One of the easiest and most non-toxic houseplants for households with curious pets.',
      'Flourishes in hanging baskets or raised plant stands.'
    ],
    commonProblems: [
      { symptom: 'Brown crispy tips', fix: 'Fluoride in city tap water; flush pot with rainwater or filtered water.' }
    ]
  },
  {
    id: 'arrowhead-syngonium',
    name: 'Arrowhead Plant (Syngonium podophyllum)',
    scientificName: 'Syngonium podophyllum',
    image: 'https://images.unsplash.com/photo-1620127814407-6a17b9c97b81?auto=format&fit=crop&w=1000&q=80',
    category: 'Aroid',
    difficulty: 'Beginner Friendly',
    light: 'Bright Indirect',
    water: 'Allow top half of soil to dry before saturating.',
    humidity: '50% – 70%.',
    temperature: '60°F – 80°F.',
    soil: 'Airy potting soil with coconut coir and perlite.',
    feeding: 'Bi-monthly dilute feed in active spring growth.',
    repotting: 'Every 18 months.',
    propagation: 'Stem cuttings rooted in water.',
    petSafe: false,
    quickOverview: 'Distinctive arrow-shaped juvenile foliage that transitions into lush multi-lobed climbing vines. Available in soft pastel pink and variegated tones.',
    quickCareSummary: [
      'Climbs or trails; pinch growing tips to encourage bushy habit.',
      'Protect from harsh noon rays to preserve leaf colors.'
    ],
    commonProblems: [
      { symptom: 'Pale, washed out leaves', fix: 'Sunlight is too harsh or nutrient deficiency; move away from direct ray path.' }
    ]
  },
  {
    id: 'lucky-bamboo',
    name: 'Lucky Bamboo (Dracaena sanderiana)',
    scientificName: 'Dracaena sanderiana',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80',
    category: 'Hardy',
    difficulty: 'Beginner Friendly',
    light: 'Low Light',
    water: 'If grown in water, change every 7–10 days with distilled or filtered water.',
    humidity: 'Average room humidity.',
    temperature: '65°F – 90°F.',
    soil: 'Can grow in pebbles with water, or in well-draining potting soil.',
    feeding: 'A drop of liquid fertilizer in water every 2 months.',
    repotting: 'Clean container and replace stones annually.',
    propagation: 'Cuttings of healthy green stalks.',
    petSafe: false,
    quickOverview: 'Slender architectural stalks that can be woven into braids and spirals. Thrives effortlessly in simple water vases with polished river stones.',
    quickCareSummary: [
      'Extremely vulnerable to chlorine and chlorine salts in municipal tap water.',
      'Thrives in gentle ambient office light.'
    ],
    commonProblems: [
      { symptom: 'Yellowing stalks from the base', fix: 'Excessive fertilizer or chlorine in water; drain and refill with pure bottled/rain water.' }
    ]
  }
];

export const PLANT_PROBLEMS: PlantProblem[] = [
  {
    id: 'yellow-leaves',
    title: 'Yellowing Leaves',
    symptomBrief: 'Foliage turning pale lime or solid yellow, often starting with bottom-most older leaves.',
    image: 'https://images.unsplash.com/photo-1596724807490-a7d0e40fa5e3?auto=format&fit=crop&w=800&q=80',
    urgency: 'Moderate Attention',
    visualCues: ['Yellowing lower leaves', 'Soil stays soggy for over a week', 'Soft stems near soil line'],
    likelyCauses: [
      'Overwatering and prolonged root saturation (suffocating roots).',
      'Natural leaf shedding as the plant produces newer, higher foliage.',
      'Nutrient depletion (lack of nitrogen in aged potting mix).'
    ],
    immediateAction: [
      'Check the soil moisture depth using your finger or a moisture meter.',
      'If the soil is wet 2 inches down, withhold all water until completely dry.',
      'Ensure the nursery pot is never sitting in standing saucer runoff.'
    ],
    prevention: 'Always test soil moisture before reaching for the watering can, not on a calendar schedule.',
    affectedPlants: ['Monstera', 'Pothos', 'ZZ Plant', 'Peace Lily', 'Ficus']
  },
  {
    id: 'brown-leaf-tips',
    title: 'Brown & Crispy Leaf Tips',
    symptomBrief: 'Dry, paper-like brown margins or tips on otherwise green healthy foliage.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
    urgency: 'Routine Adjustment',
    visualCues: ['Crispy brittle tips', 'Brown borders on leaves', 'Dry indoor winter air'],
    likelyCauses: [
      'Low ambient humidity (common with winter indoor heating).',
      'High minerals, fluoride, or salts in municipal tap water.',
      'Brief underwatering drought cycles.'
    ],
    immediateAction: [
      'Group houseplants together to create a localized micro-climate of humidity.',
      'Switch from tap water to filtered, distilled, or rested rainwater.',
      'Snip away brown tips with sterilized shears, leaving a tiny sliver of brown margin to avoid wounding green tissue.'
    ],
    prevention: 'Use a cool-mist humidifier during winter months and avoid positioning plants in direct line of heating vents.',
    affectedPlants: ['Spider Plant', 'Peace Lily', 'Calathea', 'Monstera']
  },
  {
    id: 'curling-leaves',
    title: 'Curling & Cupping Leaves',
    symptomBrief: 'Foliage curling inward, rolling into cylinders, or edges cupping downward.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    urgency: 'Moderate Attention',
    visualCues: ['Leaf edges curling inward', 'Soil pulling away from pot rim', 'Drooping stems'],
    likelyCauses: [
      'Underwatering: the plant is curling leaves to reduce surface area and transpirational water loss.',
      'Heat stress or direct window draft scorch.',
      'Pests (sap-sucking thrips or spider mites beneath the leaf).'
    ],
    immediateAction: [
      'Inspect undersides of leaves with bright flashlight for spider mites or webbing.',
      'If soil is bone dry, give a thorough bottom-watering soak for 30 minutes.',
      'Move plant 2–3 feet back from intense unshaded window glass.'
    ],
    prevention: 'Establish a consistent soil check cadence and monitor ambient room temperatures.',
    affectedPlants: ['Monstera', 'Fittonia', 'Pothos', 'Ficus']
  },
  {
    id: 'drooping-plants',
    title: 'Drooping & Wilting Stems',
    symptomBrief: 'Entire plant appears limp, collapsed, or leaning over the edge of the pot.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=800&q=80',
    urgency: 'Moderate Attention',
    visualCues: ['Stems lost turgor pressure', 'Dull, deflated leaves', 'Fast recovery when hydrated'],
    likelyCauses: [
      'Acute thirst: root zone lacks moisture to keep cell walls rigid.',
      'Severe root rot: damaged roots can no longer pull water upward even in wet soil.',
      'Transplant or repotting shock.'
    ],
    immediateAction: [
      'Touch the soil: If dry, water deeply until drain runs clear.',
      'If soil is already wet, inspect roots immediately for dark mushy rot.',
      'Keep out of direct sunlight while plant re-establishes cell pressure.'
    ],
    prevention: 'Water thoroughly before the plant enters extreme stress wilt.',
    affectedPlants: ['Peace Lily', 'Fittonia', 'Pothos', 'Arrowhead']
  },
  {
    id: 'root-rot',
    title: 'Root Rot (Subterranean Decay)',
    symptomBrief: 'Blackened, squishy, foul-smelling roots underneath soil accompanied by sudden foliage collapse.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    urgency: 'Urgent Intervention',
    visualCues: ['Sour or musty soil odor', 'Yellowing leaves that pull away easily', 'Roots are dark and mushy'],
    likelyCauses: [
      'Anaerobic soil environment caused by chronic overwatering and pots without drainage holes.',
      'Heavy dense soil mix that compacts and chokes oxygen exchange.'
    ],
    immediateAction: [
      'Unpot plant immediately and rinse root system clean of old saturated soil.',
      'Sterilize shears and snip off all blackened, mushy, or stringy roots until only firm white roots remain.',
      'Spray roots with 3% hydrogen peroxide solution to kill remaining fungal spores.',
      'Repot into fresh, chunky, well-aerated soil blend in a pot with generous drainage holes.'
    ],
    prevention: 'Never plant in containers lacking drainage holes; use chunky aroid/succulent substrates.',
    affectedPlants: ['ZZ Plant', 'Monstera', 'Snake Plant', 'Jade Plant']
  },
  {
    id: 'fungus-gnats',
    title: 'Fungus Gnats & Surface Pests',
    symptomBrief: 'Tiny black flies hovering around the soil surface and flying up when watering.',
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80',
    urgency: 'Routine Adjustment',
    visualCues: ['Small flies near soil', 'Larvae feeding in top inch of organic matter', 'Moist damp surface soil'],
    likelyCauses: [
      'Top 2 inches of potting soil constantly kept damp, creating ideal breeding ground for gnat larvae.',
      'Store-bought potting soil bags stored wet outdoors.'
    ],
    immediateAction: [
      'Allow top 2–3 inches of soil to thoroughly dry out (larvae cannot survive dry conditions).',
      'Place yellow sticky traps directly on soil surface to capture adult breeders.',
      'Water with Mosquito Bits / BTI tea (Bacillus thuringiensis israelensis) to eliminate larvae naturally.'
    ],
    prevention: 'Bottom-water your plants so the top layer of soil stays dry, and dress top with coarse sand or pumice.',
    affectedPlants: ['All indoor potted plants']
  },
  {
    id: 'leggy-growth',
    title: 'Leggy Growth & Wide Leaf Spacing',
    symptomBrief: 'Long, thin, weak stems with unusually wide gaps between leaves reaching toward one side.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80',
    urgency: 'Routine Adjustment',
    visualCues: ['Elongated internodes', 'Leaves significantly smaller than older growth', 'Plant leaning towards window'],
    likelyCauses: [
      'Etiolation: the plant is spending all energy stretching its stem toward a distant light source.'
    ],
    immediateAction: [
      'Move the plant significantly closer to an East or South-facing window.',
      'If natural window light is blocked, install a 36W full-spectrum LED grow light 12–18 inches above the canopy.',
      'Prune back weak, leggy stems to stimulate fresh compact growth at the base.'
    ],
    prevention: 'Rotate pots 90 degrees each week so growth remains even and upright.',
    affectedPlants: ['Jade Plant', 'Pothos', 'Monstera', 'Ficus', 'Succulents']
  },
  {
    id: 'slow-growth',
    title: 'Slow Growth or Stalled Leaves',
    symptomBrief: 'Plant looks stationary with no new leaf spikes or shoots for several months during spring/summer.',
    image: 'https://images.unsplash.com/photo-1632307416543-55f661256240?auto=format&fit=crop&w=800&q=80',
    urgency: 'Routine Adjustment',
    visualCues: ['No active unfurling leaves', 'Roots tightly bound inside pot', 'Pale washed-out color'],
    likelyCauses: [
      'Sub-optimal lighting below minimum photosynthetic threshold.',
      'Plant has become root-bound and depleted available soil nutrients.',
      'Natural winter dormancy (normal from November to February).'
    ],
    immediateAction: [
      'Slide the rootball out of the pot: if roots form a solid spiral cage, upgrade pot by 2 inches diameter.',
      'Increase indirect sunlight intensity.',
      'Resume balanced organic fertilizer diluted to half strength during active season.'
    ],
    prevention: 'Repot every 1–2 years in spring with fresh nutrient-dense compost mix.',
    affectedPlants: ['Monstera', 'ZZ Plant', 'Rubber Plant', 'Snake Plant']
  }
];

export const PRODUCT_REVIEWS: ProductReview[] = [
  {
    id: 'sansi-36w-grow-light',
    title: 'Sansi 36W Full-Spectrum Ceramic LED Bulb Review',
    category: 'Grow Lights',
    productName: 'Sansi Daylight 36W E26 Grow Bulb',
    priceRange: '$32 – $38',
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    verdict: 'The cleanest, most potent single-socket grow light for indoor plants in low-light apartments without looking like a purple disco.',
    whoNeedsIt: 'Plant parents with North-facing windows, dark apartment corners, or tropical monsteras that refuse to split leaves.',
    whoDoesNotNeedIt: 'Anyone with an unshaded South-facing window sill or plants that thrive purely in low light (ZZ, Cast Iron).',
    importantSpecs: [
      'Standard E26 base fits ordinary desk lamps and pendant fixtures',
      'True 36W power draw (equivalent to 400W incandescent)',
      '4000K neutral daylight color temperature (warm white, pleasant in living areas)',
      'Ceramic heat-sink dissipation technology (no noisy fans)'
    ],
    pros: [
      'Natural white visual spectrum that looks like sunlit window glow',
      'Measurable 180+ PPFD output at 18 inches distance',
      'Remarkable build quality and ceramic durability'
    ],
    cons: [
      'Bulb is heavy (approx. 1 lb) requiring a sturdy lamp gooseneck',
      'Runs warm to the touch (must have open air circulation)'
    ],
    criteriaExplained: 'Tested over 6 months measuring PAR/PPFD values, heat output, and new leaf development rate on Monsteras and Ficus.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-sansi-36w?tag=leafywindow-20'
  },
  {
    id: 'italian-terracotta-pots',
    title: 'Breathable Hand-Thrown Italian Terracotta Planters',
    category: 'Plant Pots',
    productName: 'Porous Heavyweight Terracotta with Drainage Saucer',
    priceRange: '$18 – $36',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    verdict: 'The gold standard for preventing root rot in succulents, aroids, and plants prone to overwatering.',
    whoNeedsIt: 'Chronic overwaterers, succulent keepers, and anyone who wants natural moisture transpiration through clay walls.',
    whoDoesNotNeedIt: 'Moisture-loving plants like Calatheas or ferns that dry out too quickly in porous clay.',
    importantSpecs: [
      '100% natural kiln-fired porous clay',
      'Large center drainage hole (18mm diameter)',
      'Detached matching terracotta drainage saucer included'
    ],
    pros: [
      'Clay walls breathe, preventing soggy anaerobic soil pockets',
      'Heavyweight base keeps tall top-heavy plants from tipping',
      'Develops a charming, authentic organic mineral patina over time'
    ],
    cons: [
      'Dries soil faster, requiring slightly more frequent watering',
      'Can break if knocked off high surfaces'
    ],
    criteriaExplained: 'Evaluated for drainage hole efficiency, wall porosity, thermal insulation, and long-term durability.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-terracotta?tag=leafywindow-20'
  },
  {
    id: 'dual-probe-moisture-meter',
    title: 'Dual-Probe Soil Moisture Sensor & Root Depth Tester',
    category: 'Moisture Meters',
    productName: 'Accurate Battery-Free Soil Moisture Meter',
    priceRange: '$14 – $18',
    image: 'https://images.unsplash.com/photo-1596726912305-629a13b54e44?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    verdict: 'An inexpensive preventative tool that eliminates guessing whether the bottom half of the pot is still wet.',
    whoNeedsIt: 'Beginners struggling with watering frequency and anyone caring for large, deep 10"+ floor containers.',
    whoDoesNotNeedIt: 'Enthusiasts comfortable testing soil weight and finger-depth moisture.',
    importantSpecs: [
      'Dual 7.5" metal probes to reach subterranean root level',
      'Completely battery-free galvanic sensor',
      'Clear color-coded 1–10 moisture gradient scale'
    ],
    pros: [
      'Takes 5 seconds to test root-level moisture',
      'Prevents premature watering when the soil surface looks deceptively dry'
    ],
    cons: [
      'Must be wiped clean and removed after each test (cannot leave in soil)',
      'Less accurate in ultra-chunky pure orchid bark substrates'
    ],
    criteriaExplained: 'Calibrated against laboratory soil weight scales across peaty, aroid, and succulent soil blends.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-moisture-meter?tag=leafywindow-20'
  },
  {
    id: 'chunky-aroid-soil-mix',
    title: 'Hand-Blended Chunky Aroid Soil Substrate',
    category: 'Soil / Substrate',
    productName: 'Bark, Pumice & Worm Casting Aerated Blend',
    priceRange: '$22 – $28',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    verdict: 'The single highest-impact upgrade you can give Monsteras, Pothos, and Philodendrons to avoid root suffocating.',
    whoNeedsIt: 'Anyone repotting houseplants out of dense, soggy store-bought nursery peat.',
    whoDoesNotNeedIt: 'Desert succulents or moisture-retentive ferns.',
    importantSpecs: [
      'Contains 35% New Zealand pinus radiata bark, 25% chunky perlite, 20% coco coir chunks, 10% horticultural charcoal, 10% worm castings',
      'pH balanced (6.0 – 6.5)'
    ],
    pros: [
      'Virtually impossible to overwater due to large pore air pockets',
      'Encourages massive, thick white feeder roots and rapid leaf fenestration'
    ],
    cons: [
      'Higher cost than generic big-box bagged soil'
    ],
    criteriaExplained: 'Tested for drainage rate, air-filled porosity (AFP), compaction resistance, and nutrient retention.',
    affiliateUrl: 'https://amazon.com/dp/placeholder-aroid-soil?tag=leafywindow-20'
  }
];

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: 'indoor-plant-survival-guide',
    title: 'The Indoor Plant Survival Guide',
    subtitle: 'The Field Manual for Never Killing a Houseplant Again',
    price: 24,
    originalPrice: 38,
    coverImage: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    format: 'Instant Digital PDF + Interactive Care Checklist (Mobile & Tablet Optimized)',
    pages: '142 Pages • 28 Printable Diagnostic Flowcharts',
    badge: 'Flagship Edition',
    description: 'A beautifully formatted, comprehensive indoor gardening manual built for beginners and recovering plant-killers. Strips away confusing horticultural jargon and replaces it with intuitive visual diagnostics, window sunlight mapping, and step-by-step triage emergency plans.',
    inclusions: [
      'Comprehensive 142-page editorial PDF ebook formatted for desktop, iPad, and mobile reading',
      'The "What’s Wrong With My Plant?" 6-Step Visual Triage Flowchart',
      'Window Compass Light Matrix: lux meters, seasonal drift, and obstruction calculations',
      'Watering Masterclass: finger-test calibration, pot weight cues, and bottom-watering setup',
      'Root Rot Emergency Protocol: step-by-step surgical recovery workflow with zero guesswork',
      'Printable Annual Plant Care & Repotting Journal with moisture tracking grids'
    ],
    tableOfContents: [
      'Chapter 1: The Physiology of Light — How Windows Actually Work',
      'Chapter 2: Soil Anatomy — Why Nursery Peat Suffocates Apartment Roots',
      'Chapter 3: The Watering Calibration Method — Moving Beyond Fixed Schedules',
      'Chapter 4: The 12 Universal Plant Problems (Visual Diagnostic Field Guide)',
      'Chapter 5: Pests Without Panic — Natural Eradication of Gnats, Mites & Thrips',
      'Chapter 6: Propagation Masterclass — Clean Nodes, Water Roots & Soil Transfer',
      'Chapter 7: 25 Detailed Plant Profiles with Strict Failure Points'
    ]
  },
  {
    id: 'monstera-masterclass',
    title: 'Monstera Care Masterclass',
    subtitle: 'From Leaf Splits to Moss Poles: The Definitive Care Companion',
    price: 18,
    coverImage: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
    format: 'Digital Field Guide & Video Companion Notes',
    pages: '68 Pages • 14 Visual Diagrams',
    badge: 'Specialized Guide',
    description: 'Everything you need to grow massive, deeply fenestrated Monstera deliciosa and adansonii in regular apartment conditions. Covers aerial root management, moss pole staking, and light thresholds.',
    inclusions: [
      '68-page high-resolution PDF guide',
      'Step-by-step moss pole fabrication and staking schematic',
      'Fenestration acceleration checklist',
      'Propagation node surgical guide'
    ],
    tableOfContents: [
      'Understanding Secondary Fenestrations',
      'Building vs. Buying Moss Poles',
      'Aerial Roots: To Prune, Stake, or Water?',
      'Preventing the Dreaded Yellow Leaf Phenomenon'
    ]
  },
  {
    id: 'indoor-jungle-planner',
    title: 'The Indoor Jungle Care Planner',
    subtitle: 'Printable & Digital Tracking System for 50+ Houseplants',
    price: 12,
    coverImage: 'https://images.unsplash.com/photo-1632307416543-55f661256240?auto=format&fit=crop&w=800&q=80',
    format: 'Printable PDF + Notion & GoodNotes Digital Template',
    pages: '45 Layout Pages',
    badge: 'Digital Tool',
    description: 'A quiet, organized tracking companion. Record watering dates, soil amendments, seasonal sunlight shifts, and propagation journals without relying on subscription-heavy phone apps.',
    inclusions: [
      'Printable minimalist A4 and US Letter journal spreads',
      'Interactive GoodNotes / Notability iPad template',
      'Pre-built Notion Houseplant Dashboard template'
    ],
    tableOfContents: [
      'Houseplant Roster & Room Assignment Sheet',
      'Seasonal Sun Tracker by Window',
      'Water & Fertilizer Logbook',
      'Repotting & Root Inspection Archives'
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'why-monstera-leaves-curling',
    title: 'Why Are My Monstera Leaves Curling Inward?',
    excerpt: 'When a Monstera’s broad foliage begins rolling like a cylinder, it is actively trying to protect itself. Here are the 4 most common causes and how to fix them.',
    category: 'Problem Solving',
    readTime: '5 min read',
    date: 'Sep 2026',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
    problemAddressed: 'Curling leaves, cupped foliage, and limp stems on Monstera plants.',
    solutionSummary: 'Check soil depth for moisture deficit first. If bone dry, bottom-water for 30 minutes. If wet, inspect for root rot or heat scorch from direct sun.',
    contextualCta: {
      label: 'Explore the complete Monstera Care Guide',
      targetSection: 'guides'
    }
  },
  {
    id: 'why-indoor-plant-leaves-yellow',
    title: 'Why Are My Houseplant Leaves Turning Yellow? (The Real Causes)',
    excerpt: 'Yellow leaves are the check-engine light of the plant world. But it does not always mean overwatering. Learn how to pinpoint the exact culprit.',
    category: 'Diagnosis',
    readTime: '6 min read',
    date: 'Aug 2026',
    image: 'https://images.unsplash.com/photo-1596724807490-a7d0e40fa5e3?auto=format&fit=crop&w=800&q=80',
    problemAddressed: 'Yellowing lower leaves, pale foliage, and falling leaves.',
    solutionSummary: 'Differentiate between natural leaf retirement (bottom leaf only), overwatering (damp soil + limp yellowing), and nitrogen depletion (veins remain pale).',
    contextualCta: {
      label: 'Use the interactive Plant Problem Finder',
      targetSection: 'diagnostic-tool'
    }
  },
  {
    id: 'how-much-light-indoor-plants-need',
    title: 'How Much Light Does an Indoor Plant Actually Need?',
    excerpt: 'Throw away the vague term "bright indirect light". We break down what light actually looks like across North, South, East, and West windows.',
    category: 'Fundamentals',
    readTime: '7 min read',
    date: 'Aug 2026',
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80',
    problemAddressed: 'Leggy growth, loss of leaf variegation, and stalled growth.',
    solutionSummary: 'Light drops by the square of distance from glass. Moving a plant from 1 foot away to 4 feet away reduces light by over 75%.',
    contextualCta: {
      label: 'Calculate your window with the Light Compass Tool',
      targetSection: 'window-light'
    }
  },
  {
    id: 'do-indoor-plants-need-grow-lights',
    title: 'Do Indoor Plants Need Grow Lights? An Honest Guide',
    excerpt: 'Not everyone needs expensive lighting setups. Here is how to know if your space actually warrants supplemental grow bulbs or if natural light suffices.',
    category: 'Equipment',
    readTime: '6 min read',
    date: 'Jul 2026',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    problemAddressed: 'Dark apartments, long winter seasons, and stunted growth.',
    solutionSummary: 'A single 36W full-spectrum bulb can transform a dim room into a thriving plant corner. Read our test results on power consumption vs. growth.',
    contextualCta: {
      label: 'Read our honest Grow Light Review',
      targetSection: 'reviews'
    }
  },
  {
    id: 'how-to-save-an-overwatered-plant',
    title: 'How to Save an Overwatered Plant: Step-by-Step Triage',
    excerpt: 'Caught an overwatered plant before it is too late? Follow this emergency triage checklist to dry the rootball and halt fungal root decay in its tracks.',
    category: 'Emergency Care',
    readTime: '8 min read',
    date: 'Jul 2026',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    problemAddressed: 'Soggy soil, yellow leaves, musty odor, and root rot.',
    solutionSummary: 'Unpot, inspect roots, prune blackened rot with sterilized shears, dust with cinnamon or hydrogen peroxide, and repot in aerated chunky substrate.',
    contextualCta: {
      label: 'Get the Indoor Plant Survival Guide',
      targetSection: 'digital-shop'
    }
  },
  {
    id: 'indoor-plant-soil-what-matters',
    title: 'Indoor Plant Soil: What Actually Matters (And What is a Gimmick)',
    excerpt: 'Why standard nursery peat suffocates roots in domestic homes, and why chunky pine bark, perlite, and pumice are essential for long-term health.',
    category: 'Fundamentals',
    readTime: '5 min read',
    date: 'Jun 2026',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80',
    problemAddressed: 'Root rot, fungus gnats, compacted soil that repels water.',
    solutionSummary: 'Soil structure matters more than brand names. Prioritize air-filled porosity so roots receive 50% air and 50% moisture.',
    contextualCta: {
      label: 'Inspect our Chunky Aroid Soil Review',
      targetSection: 'reviews'
    }
  }
];
