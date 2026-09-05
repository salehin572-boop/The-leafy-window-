import { PlantProblem } from '../types';

export const ALL_PLANT_PROBLEMS: PlantProblem[] = [
  {
    id: 'yellow-leaves',
    title: 'Yellowing Leaves',
    symptomBrief: 'Foliage turning pale lime or solid yellow, often starting with bottom-most older leaves or spreading across leaf veins.',
    image: 'https://images.unsplash.com/photo-1596724807490-a7d0e40fa5e3?auto=format&fit=crop&w=900&q=80',
    urgency: 'Moderate Attention',
    visualCues: ['Yellow lower leaves with soggy soil', 'Leaves feel limp and rubbery', 'Loss of vibrant green hue'],
    likelyCauses: [
      'Chronic overwatering suffocating feeder roots (most common cause).',
      'Natural leaf shedding as the plant directs resources to new canopy growth.',
      'Nitrogen depletion in aged potting mix (chlorosis where veins stay pale).',
      'Cold drafts from air conditioning vents or winter window panes.'
    ],
    whatToCheck: [
      'Probe soil moisture depth 2 to 3 inches below the surface.',
      'Inspect pot drainage holes to confirm water drains freely and does not pool.',
      'Check if the yellowing is confined to a single bottom leaf (often normal) or affects fresh upper leaves (stress).'
    ],
    whatToDoFirst: [
      'Withhold all water immediately until the top 50% of the container soil dries out completely.',
      'Ensure the nursery pot is never sitting in accumulated drainage saucer water.',
      'Move the plant to a spot with brighter, gentle indirect light to speed up natural transpiration.'
    ],
    whatNotToDo: [
      'Do NOT fertilize a plant with yellowing leaves (fertilizer salts burn compromised roots).',
      'Do NOT immediately saturate the soil again thinking the plant is thirsty.',
      'Do NOT rip yellow leaves off with bare hands; snip cleanly at the stem base.'
    ],
    whenToWait: 'If only one bottom leaf is fading slowly and the soil is damp-to-dry, wait 7–10 days. The plant will absorb leftover nutrients from the leaf before naturally letting it drop.',
    whenToRepot: 'Repot only if the soil remains foul-smelling or swampy 8+ days after watering, or if roots are black and mushy.',
    plantSpecificDifferences: 'On Monstera, yellow lower leaves usually indicate suffocated roots. On ZZ and Snake plants, yellow stems indicate severe root rhizome rot from stagnant water.',
    prevention: 'Test soil depth moisture with a finger or dual-probe meter rather than watering on a fixed calendar day.',
    affectedPlants: ['Monstera', 'Pothos', 'ZZ Plant', 'Peace Lily', 'Ficus'],
    relatedProducts: ['dual-probe-moisture-meter', 'italian-terracotta-set', 'chunky-aroid-soil-mix'],
    relatedGuideIds: ['monstera-deliciosa', 'golden-pothos', 'zz-plant']
  },
  {
    id: 'brown-tips',
    title: 'Brown & Crispy Leaf Tips',
    symptomBrief: 'Dry, papery brown margins or tips on otherwise firm, green foliage.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=80',
    urgency: 'Routine Adjustment',
    visualCues: ['Crispy brittle leaf margins', 'Brown pointed leaf tips', 'Tannin rings between green and brown tissue'],
    likelyCauses: [
      'Low ambient indoor humidity, especially during winter home heating.',
      'Fluoride, chlorine, or dissolved mineral salts in municipal tap water.',
      'Brief, sporadic underwatering cycles that desiccate leaf extremities.',
      'Fertilizer salt accumulation in the potting medium.'
    ],
    whatToCheck: [
      'Check room relative humidity (anything below 40% dries thin tropical leaves).',
      'Check if the plant is in direct airflow from a furnace vent or AC unit.',
      'Check for white crusty mineral deposits on the soil surface or pot rim.'
    ],
    whatToDoFirst: [
      'Group tropical houseplants together to create a localized humidity microclimate.',
      'Switch from untreated municipal tap water to filtered, distilled, or rested rainwater.',
      'Flush the potting mix thoroughly with distilled water to leach out accumulated fertilizer salts.'
    ],
    whatNotToDo: [
      'Do NOT cut into healthy green leaf tissue when trimming; leave a hairline 1mm border of brown.',
      'Do NOT mist plants heavily in the dark (causes fungal leaf spots rather than sustained humidity).'
    ],
    whenToWait: 'Brown tips will never turn green again. Once new environmental conditions are corrected, wait for fresh leaves to unfurl with pristine edges.',
    whenToRepot: 'Repotting is usually unnecessary unless soil is encrusted with salt crust.',
    plantSpecificDifferences: 'Spider Plants and Peace Lilies are intensely sensitive to fluoride in municipal water; Monsteras develop brown tips primarily from dry air and heater drafts.',
    prevention: 'Run a cool-mist humidifier in winter and avoid placing plants directly above baseboard heaters.',
    affectedPlants: ['Spider Plant', 'Peace Lily', 'Calathea', 'Monstera', 'Fittonia'],
    relatedProducts: ['brass-mist-sprayer', 'dual-probe-moisture-meter'],
    relatedGuideIds: ['spider-plant', 'peace-lily', 'monstera-deliciosa']
  },
  {
    id: 'curling-leaves',
    title: 'Curling & Cupping Leaves',
    symptomBrief: 'Leaf edges rolling inward into cylinders, margins cupping downward, or wrinkled deflated surfaces.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=900&q=80',
    urgency: 'Moderate Attention',
    visualCues: ['Leaves rolling like tacos or tubes', 'Soil pulling away from the pot edge', 'Dull matte appearance'],
    likelyCauses: [
      'Acute dehydration: the plant rolls its foliage to reduce surface area and conserve moisture.',
      'Heat scorch or direct unshaded window sunlight drying leaf cells.',
      'Pests (sap-sucking spider mites or thrips feeding beneath the leaf surface).'
    ],
    whatToCheck: [
      'Slide a finger into the soil: is the rootball bone dry and hard as a brick?',
      'Inspect the leaf undersides with a bright flashlight for tiny moving specks or fine webbing.',
      'Touch the window glass: is direct radiant heat burning the leaves?'
    ],
    whatToDoFirst: [
      'If the soil is desiccated and hydrophobic, place the pot in a basin of water for 30 minutes (bottom watering).',
      'Move the plant 2 to 3 feet back from hot afternoon window rays.',
      'Wipe foliage with a damp cloth if dust or pest webbing is present.'
    ],
    whatNotToDo: [
      'Do NOT pour water on top if water immediately rushes down the sides without wetting the rootball.',
      'Do NOT apply chemical pesticides during the hottest direct sun hours.'
    ],
    whenToWait: 'If caused by underwatering, leaves typically uncurl and reinflate within 4 to 12 hours after a deep soak.',
    whenToRepot: 'Repot if the rootball has become a solid mass of roots holding no soil.',
    plantSpecificDifferences: 'Monstera leaves roll inward when thirsty or scorched. Fittonia and Peace Lily curl and faint completely flat.',
    prevention: 'Maintain consistent watering schedules before the soil shrinks away from container walls.',
    affectedPlants: ['Monstera', 'Fittonia', 'Pothos', 'Ficus', 'Peace Lily'],
    relatedProducts: ['brass-mist-sprayer', 'dual-probe-moisture-meter'],
    relatedGuideIds: ['monstera-deliciosa', 'fittonia', 'golden-pothos']
  },
  {
    id: 'drooping',
    title: 'Drooping & Limp Stems',
    symptomBrief: 'Entire plant appears collapsed, vines hang lifelessly, or stems lose structural turgor pressure.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=900&q=80',
    urgency: 'Moderate Attention',
    visualCues: ['Stems lost rigidity', 'Leaves feel soft and paper-thin', 'Whole plant leans sideways'],
    likelyCauses: [
      'Severe underwatering (lack of hydrostatic pressure in plant cells).',
      'Advanced root rot: drowned roots can no longer pull water upward even if soil is saturated.',
      'Transplant shock or sudden extreme room temperature drop below 50°F (10°C).'
    ],
    whatToCheck: [
      'Check the weight of the pot: featherlight indicates dry soil; heavy and cold indicates root rot.',
      'Inspect stems at the soil boundary for mushiness or black discoloration.'
    ],
    whatToDoFirst: [
      'If soil is dry: water thoroughly until water flows out the bottom drainage holes.',
      'If soil is wet and plant droops: unpot immediately to inspect root health for brown decay.',
      'Shield from hot direct sun while turgor pressure recovers.'
    ],
    whatNotToDo: [
      'Do NOT pour more water onto a drooping plant if the soil is already wet to the touch.',
      'Do NOT prune limp stems while the plant is in shock.'
    ],
    whenToWait: 'A dry Peace Lily or Fittonia will stand upright within 2 to 3 hours of rehydration. For overwatered root rot, recovery takes weeks of careful drying.',
    whenToRepot: 'Repot immediately only if the root system smells sour or shows rotten roots.',
    plantSpecificDifferences: 'Peace Lily is famous for fainting dramatically without lasting harm. Succulents drooping indicates stem rot.',
    prevention: 'Water based on soil moisture depth rather than calendar intervals.',
    affectedPlants: ['Peace Lily', 'Fittonia', 'Pothos', 'Arrowhead', 'Monstera'],
    relatedProducts: ['dual-probe-moisture-meter', 'chunky-aroid-soil-mix'],
    relatedGuideIds: ['peace-lily', 'fittonia', 'golden-pothos']
  },
  {
    id: 'overwatering',
    title: 'Overwatering Symptoms',
    symptomBrief: 'Pot stays heavy for weeks, soil smells sour or musty, lower foliage turns translucent yellow, and stems soften.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
    urgency: 'Urgent Intervention',
    visualCues: ['Soil surface stays wet 10+ days', 'Yellow lower leaves that detach easily', 'Algae or mold on soil surface'],
    likelyCauses: [
      'Pots without drainage holes trapping stagnant water at the bottom.',
      'Dense potting mix with zero perlite, pumice, or bark for aeration.',
      'Watering too frequently before the root zone has had time to breathe.',
      'Oversized pots with too much excess soil holding unused moisture.'
    ],
    whatToCheck: [
      'Look underneath the pot: is water sitting inside an ornamental decorative cachepot?',
      'Poke a wooden chopstick into the rootball: does it come out wet and coated in muddy soil?'
    ],
    whatToDoFirst: [
      'Empty any standing water from saucers or cachepots immediately.',
      'Gently slide the plant out of its pot and rest the wet rootball on paper towels or newspaper for 6 hours.',
      'Aerate the soil by poking several pencil-sized holes into the mix to allow oxygen in.'
    ],
    whatNotToDo: [
      'Do NOT add more water.',
      'Do NOT fertilize.',
      'Do NOT put a waterlogged plant directly into blistering sun (stresses damaged roots).'
    ],
    whenToWait: 'Allow the soil to dry down until the top 2/3 of the pot feels dry before your next cautious drink.',
    whenToRepot: 'Repot if the soil is compacted pure peat or roots are beginning to turn brown and squishy.',
    plantSpecificDifferences: 'ZZ plants and Snake plants hold water in tubers and rot quickly when overwatered. Monsteras can tolerate brief dampness if potting mix is chunky.',
    prevention: 'Always plant in pots with drainage holes and use airy, coarse substrates.',
    affectedPlants: ['ZZ Plant', 'Snake Plant', 'Jade Plant', 'Monstera', 'Pothos'],
    relatedProducts: ['italian-terracotta-set', 'chunky-aroid-soil-mix', 'dual-probe-moisture-meter'],
    relatedGuideIds: ['zz-plant', 'snake-plant', 'jade-plant']
  },
  {
    id: 'underwatering',
    title: 'Underwatering & Severe Drought',
    symptomBrief: 'Featherlight pot, soil pulling away from container walls, crispy dry foliage, and drooping leaf petioles.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80',
    urgency: 'Moderate Attention',
    visualCues: ['Soil is hard, dusty, or cracked', 'Leaves papery and dull', 'Container feels weightless'],
    likelyCauses: [
      'Extended interval between waterings.',
      'Hydrophobic soil where water channels down the edges without penetrating the inner rootball.',
      'High indoor temperatures or strong sun accelerating soil evaporation.'
    ],
    whatToCheck: [
      'When you water from the top, does water instantly shoot through the pot into the saucer? (Signs of hydrophobic peat).',
      'Examine lower leaf tiers for dry yellow or brown leaf drop.'
    ],
    whatToDoFirst: [
      'Submerge the bottom 3 inches of the pot in room-temperature water for 30–45 minutes to rehydrate the soil core.',
      'Gently aerate the top soil surface with a fork to break hard crusts.',
      'Let the pot drain freely for 15 minutes before returning to its saucer.'
    ],
    whatNotToDo: [
      'Do NOT soak in boiling or freezing water.',
      'Do NOT leave the pot sitting submerged overnight.'
    ],
    whenToWait: 'Expect foliage to reinflate and stand tall within 3 to 12 hours after a thorough bottom soak.',
    whenToRepot: 'Repot if the rootball is so dense that there is no remaining soil to retain moisture.',
    plantSpecificDifferences: 'Succulents like Jade wrinkle and soften when thirsty. Tropicals like Pothos and Fittonia wilt quickly.',
    prevention: 'Weigh pots by lifting them regularly; lightweight pots tell you it is time for a drink.',
    affectedPlants: ['Pothos', 'Peace Lily', 'Fittonia', 'Spider Plant', 'Jade Plant'],
    relatedProducts: ['brass-mist-sprayer', 'dual-probe-moisture-meter'],
    relatedGuideIds: ['golden-pothos', 'peace-lily', 'jade-plant']
  },
  {
    id: 'root-rot',
    title: 'Root Rot (Subterranean Decay)',
    symptomBrief: 'Blackened, squishy, foul-smelling roots underneath soil accompanied by sudden foliage collapse in wet soil.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
    urgency: 'Urgent Intervention',
    visualCues: ['Musty, sour soil odor', 'Roots slide off like wet strings when gently pulled', 'Leaves turn yellow despite wet soil'],
    likelyCauses: [
      'Anaerobic soil environment from prolonged overwatering and lack of oxygen.',
      'Containers lacking drainage holes where water sits stagnant at the root base.',
      'Dense clay or suffocating un-aerated store peat.'
    ],
    whatToCheck: [
      'Slide rootball completely out of the pot to examine root color (healthy roots are firm and white/tan; rotted roots are brown/black and mushy).'
    ],
    whatToDoFirst: [
      'Gently wash away all old saturated soil with room-temperature water to expose root system.',
      'Use sterilized pruning shears to snip away every trace of brown, slimy, or hollow roots until only firm healthy tissue remains.',
      'Submerge remaining root system in a dilute solution of 1 part 3% hydrogen peroxide to 3 parts water for 10 minutes to eradicate fungal spores.',
      'Repot into a clean pot with fresh, sterile, chunky aroid/perlite substrate.'
    ],
    whatNotToDo: [
      'Do NOT reuse the old contaminated potting soil.',
      'Do NOT fertilize until new green growth clearly emerges weeks later.',
      'Do NOT drown the newly repotted plant in water.'
    ],
    whenToWait: 'Keep in bright indirect light with minimal water for 2–3 weeks while new root hairs regenerate.',
    whenToRepot: 'Emergency repotting is required immediately once root rot is confirmed.',
    plantSpecificDifferences: 'ZZ plants store water in rhizomes; rotten rhizomes must be sliced with clean razor until white clean flesh is visible. Snake plants can be propagated from healthy leaf tops if base is lost.',
    prevention: 'Never allow pots to sit in pooled saucer water and use coarse chunky substrates.',
    affectedPlants: ['ZZ Plant', 'Monstera', 'Snake Plant', 'Jade Plant', 'Peace Lily'],
    relatedProducts: ['bypass-pruner-shears', 'chunky-aroid-soil-mix', 'italian-terracotta-set'],
    relatedGuideIds: ['zz-plant', 'monstera-deliciosa', 'snake-plant']
  },
  {
    id: 'pests',
    title: 'Pests (Spider Mites, Thrips & Mealybugs)',
    symptomBrief: 'Fine webbing beneath leaves, tiny white cottony spots, silvery stippling on leaf surfaces, or sticky residue.',
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=900&q=80',
    urgency: 'Urgent Intervention',
    visualCues: ['Silvery stippling or tiny yellow pin-dots', 'Cottony white fuzz in leaf joints (mealybugs)', 'Fine webs at leaf junctions (spider mites)'],
    likelyCauses: [
      'Dry, warm indoor air providing ideal breeding conditions for spider mites.',
      'Introducing new un-quarantined plants from big-box stores.',
      'Open windows in summer allowing outdoor insects inside.'
    ],
    whatToCheck: [
      'Examine leaf undersides and stem crevices with a flashlight or magnifying lens.',
      'Wipe a white paper towel across the underside of the leaf: red/brown streaks indicate spider mites.'
    ],
    whatToDoFirst: [
      'Quarantine the infested plant away from all other houseplants immediately.',
      'Take the plant to the shower or sink and spray foliage with a lukewarm jet of water to knock off pests mechanically.',
      'Spray thoroughly with diluted cold-pressed neem oil or insecticidal castile soap, coating both tops and undersides of leaves.'
    ],
    whatNotToDo: [
      'Do NOT spray oil-based treatments in direct sunlight (causes severe leaf scorch).',
      'Do NOT stop treatment after one spray; pests hatch from eggs every 5–7 days.'
    ],
    whenToWait: 'Repeat the wash and spray treatment every 5 to 7 days for a minimum of 3 consecutive cycles.',
    whenToRepot: 'Repotting is only necessary for root mealybugs; foliage pests are treated with surface sprays.',
    plantSpecificDifferences: 'Monsteras and Alocasias are prime targets for spider mites and thrips. Pothos and Snake plants are relatively resistant.',
    prevention: 'Wipe leaves monthly with a damp cloth and quarantine new plants for 14 days before introducing to your jungle.',
    affectedPlants: ['Monstera', 'Rubber Plant', 'Calathea', 'Pothos', 'Syngonium'],
    relatedProducts: ['cold-pressed-neem-tonic', 'brass-mist-sprayer'],
    relatedGuideIds: ['monstera-deliciosa', 'rubber-plant']
  },
  {
    id: 'fungus-gnats',
    title: 'Fungus Gnats & Soil Flies',
    symptomBrief: 'Tiny black mosquito-like flies hovering around soil surfaces, flying up when watering, or crawling on pot rims.',
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=900&q=80',
    urgency: 'Routine Adjustment',
    visualCues: ['Weak-flying tiny black flies', 'White translucent larvae with black head capsules in topsoil', 'Damp soil surface'],
    likelyCauses: [
      'Keeping the top 1 to 2 inches of potting mix perpetually wet.',
      'Decomposing organic matter in store-bought potting peat.',
      'Poor surface air circulation around indoor containers.'
    ],
    whatToCheck: [
      'Scrape the top 1/2 inch of soil: do you see tiny white larvae wriggling in the organic debris?',
      'Check if other nearby plants also have damp soil and gnats.'
    ],
    whatToDoFirst: [
      'Allow the top 2 to 3 inches of potting soil to thoroughly dry out (larvae cannot survive dry conditions).',
      'Place yellow sticky traps directly at soil height to catch egg-laying adults.',
      'Water plants with BTI tea (Bacillus thuringiensis israelensis granules soaked in water) to kill larvae naturally.'
    ],
    whatNotToDo: [
      'Do NOT spray adult flies with harsh chemical aerosols indoors.',
      'Do NOT keep top-watering damp soil every few days.'
    ],
    whenToWait: 'Expect gnat population to drop 80% within 10 days of BTI watering. The 21-day lifecycle must run its course.',
    whenToRepot: 'Repotting is not necessary; bottom-watering and BTI tea cure the infestation reliably.',
    plantSpecificDifferences: 'Fungus gnats infest any plant in damp peaty soil. They do not attack dry cacti or succulent pots.',
    prevention: 'Bottom-water your plants so the surface layer remains bone dry, and dress pot tops with coarse sand or pumice.',
    affectedPlants: ['All indoor potted plants', 'Monstera', 'Peace Lily', 'Fittonia'],
    relatedProducts: ['bti-mosquito-bits', 'dual-probe-moisture-meter'],
    relatedGuideIds: ['monstera-deliciosa', 'peace-lily']
  },
  {
    id: 'leggy-growth',
    title: 'Leggy Growth & Wide Internodes',
    symptomBrief: 'Long, spindly, thin stems with unusually wide spacing between leaves, leaning noticeably toward window glass.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80',
    urgency: 'Routine Adjustment',
    visualCues: ['Elongated pale stems', 'Small juvenile leaves with no fenestrations', 'Plant bending toward the nearest window'],
    likelyCauses: [
      'Etiolation: the plant is expending cellular energy stretching stems toward insufficient light.',
      'Placing plants in room interiors beyond the effective 3-foot solar zone of windows.'
    ],
    whatToCheck: [
      'Measure the distance from the window: remember that light intensity drops dramatically with distance.',
      'Check if window is obstructed by outdoor trees, overhangs, or tinted film.'
    ],
    whatToDoFirst: [
      'Move the plant 2 to 3 feet closer to an East, South, or West-facing window.',
      'If natural sunlight is blocked, install a 36W full-spectrum LED grow light 12–18 inches above the canopy.',
      'Prune back long, weak stems using clean shears to stimulate bushy growth at the base.'
    ],
    whatNotToDo: [
      'Do NOT increase fertilizer hoping it will make the stems thicker (nitrogen without light causes even weaker, stretched growth).'
    ],
    whenToWait: 'Pruned stems will generate fresh, compact growth nodes within 2 to 4 weeks once lighting is upgraded.',
    whenToRepot: 'No need to repot unless roots are severely bound.',
    plantSpecificDifferences: 'Jade plants stretch into flimsy branches that can snap under weight. Monsteras produce small leaves without splits when light is insufficient.',
    prevention: 'Rotate pots 90 degrees every week to maintain upright balanced growth.',
    affectedPlants: ['Jade Plant', 'Monstera', 'Pothos', 'Ficus', 'Succulents'],
    relatedProducts: ['sansi-36w-grow-light', 'bypass-pruner-shears'],
    relatedGuideIds: ['jade-plant', 'monstera-deliciosa', 'golden-pothos']
  },
  {
    id: 'slow-growth',
    title: 'Slow Growth or Stalled Leaves',
    symptomBrief: 'Plant remains stationary with no new shoots or unfurling leaves for months during spring and summer.',
    image: 'https://images.unsplash.com/photo-1632307416543-55f661256240?auto=format&fit=crop&w=900&q=80',
    urgency: 'Routine Adjustment',
    visualCues: ['Zero leaf spikes developing', 'Foliage looks dull and stagnant', 'Roots coiling at pot drainage base'],
    likelyCauses: [
      'Sub-optimal lighting below the photosynthetic threshold required for vegetative growth.',
      'Root-bound pot with exhausted soil nutrients.',
      'Natural winter dormancy (completely normal from November through February).'
    ],
    whatToCheck: [
      'Check root density: slide the rootball out to see if roots form a tight spiral cage.',
      'Check the calendar season: slow growth in winter is healthy and expected.'
    ],
    whatToDoFirst: [
      'Increase indirect sunlight exposure by moving closer to bright window glass.',
      'If roots are bound tightly, repot in spring into a container 2 inches larger in diameter with fresh nutrient-rich substrate.',
      'Apply balanced organic kelp or foliage fertilizer diluted to half strength.'
    ],
    whatNotToDo: [
      'Do NOT dump double-strength fertilizer on a stalled plant.',
      'Do NOT force winter growth with heating pads if the plant is resting.'
    ],
    whenToWait: 'After repotting or increasing light, expect fresh leaf buds to emerge within 3 to 4 weeks during spring.',
    whenToRepot: 'Repot in spring if roots occupy over 80% of the container volume.',
    plantSpecificDifferences: 'ZZ plants naturally grow in slow, sudden flushes (1 or 2 fronds a year). Pothos should produce a new leaf every 10–14 days in summer.',
    prevention: 'Refresh topsoil annually and repot every 2 years in spring.',
    affectedPlants: ['Monstera', 'ZZ Plant', 'Rubber Plant', 'Snake Plant', 'Peace Lily'],
    relatedProducts: ['liquid-kelp-feed', 'chunky-aroid-soil-mix', 'sansi-36w-grow-light'],
    relatedGuideIds: ['monstera-deliciosa', 'zz-plant', 'rubber-plant']
  },
  {
    id: 'no-new-leaves',
    title: 'No New Leaves (Stubborn Dormancy)',
    symptomBrief: 'Leaf sheaths remain tightly sealed, terminal buds do not open, or emergent shoots abort before expanding.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=80',
    urgency: 'Routine Adjustment',
    visualCues: ['Leaf shoots dried and brown before opening', 'No new unfurling foliage', 'Roots poking above soil line'],
    likelyCauses: [
      'Insufficient light energy: the plant has only enough light to maintain existing leaves, not build new cells.',
      'Low humidity causing emergent leaves to stick inside their protective sheaths and tear.',
      'Underfeeding during the peak spring growing cycle.'
    ],
    whatToCheck: [
      'Check ambient humidity: if new shoots are getting stuck, mist the emerging sheath with warm water.',
      'Check light exposure with a phone lux meter app (under 200 foot-candles rarely sustains new growth).'
    ],
    whatToDoFirst: [
      'Provide supplemental full-spectrum lighting or relocate closer to window glass.',
      'Increase humidity around unfurling shoots using a gentle mister or grouping plants.',
      'Ensure soil does not stay bone dry for weeks at a time.'
    ],
    whatNotToDo: [
      'Do NOT try to manually pry open tightly rolled leaf sheaths with your fingernails (will rip new foliage).'
    ],
    whenToWait: 'With increased light and humidity, expect dormant leaf buds to begin swelling within 14 days.',
    whenToRepot: 'Check roots; if the plant has been in the same nursery soil for over 2 years, repot.',
    plantSpecificDifferences: 'Monstera new leaves can take 3 weeks to unfurl if room humidity is below 40%. Rubber Plants produce a red stipule sheath before the leaf emerges.',
    prevention: 'Maintain gentle humidity and consistent nutrition from spring through autumn.',
    affectedPlants: ['Monstera', 'Rubber Plant', 'Syngonium', 'Peace Lily'],
    relatedProducts: ['sansi-36w-grow-light', 'liquid-kelp-feed', 'brass-mist-sprayer'],
    relatedGuideIds: ['monstera-deliciosa', 'rubber-plant']
  },
  {
    id: 'leaves-falling-off',
    title: 'Leaves Falling Off (Sudden Defoliation)',
    symptomBrief: 'Green or yellow leaves dropping rapidly from stems at the slightest touch or breeze.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=900&q=80',
    urgency: 'Urgent Intervention',
    visualCues: ['Piles of shed leaves around pot base', 'Bare lower stems', 'Leaves drop while still mostly green'],
    likelyCauses: [
      'Sudden relocation shock (drastic change in light, temperature, or humidity).',
      'Cold drafts from opening doors, windows, or AC air conditioning streams.',
      'Severe root damage from either extreme dehydration or drowning.'
    ],
    whatToCheck: [
      'Has the plant recently been moved, repotted, or shipped in the mail?',
      'Is the pot in a direct breeze line from an exterior door or drafty window?'
    ],
    whatToDoFirst: [
      'Stabilize the plant in a warm, sheltered spot with consistent bright indirect light.',
      'Shield strictly from cold drafts below 60°F (15°C).',
      'Check root moisture to rule out root rot or drought.'
    ],
    whatNotToDo: [
      'Do NOT keep moving the plant from room to room trying to find the "perfect spot" (compounds relocation shock).',
      'Do NOT fertilize a defoliating plant.'
    ],
    whenToWait: 'Allow the plant 2 to 3 weeks of stable conditions to acclimate. Defoliation should halt as cell hormones adjust.',
    whenToRepot: 'Do not repot a plant in shock unless severe root rot is detected.',
    plantSpecificDifferences: 'Ficus elastica (Rubber tree) and Jade plants are notorious for dropping leaves if exposed to cold window drafts.',
    prevention: 'Acclimate plants gradually when moving them between different light levels.',
    affectedPlants: ['Rubber Plant', 'Jade Plant', 'ZZ Plant', 'Monstera'],
    relatedProducts: ['italian-terracotta-set', 'dual-probe-moisture-meter'],
    relatedGuideIds: ['rubber-plant', 'jade-plant']
  }
];
