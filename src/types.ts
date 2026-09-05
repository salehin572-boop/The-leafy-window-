export type ProductModel = 'affiliate' | 'direct';

export interface Product {
  id: string;
  name: string;
  scientificName?: string;
  model?: ProductModel;
  price: number;
  priceDisplay?: string;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery?: string[];
  category: string;
  subcategory?: string;
  shortDescription?: string;
  description?: string;
  keyFeatures?: string[];
  whoItIsFor?: string;
  whoShouldSkipIt?: string;
  importantSpecs?: string[];
  pros?: string[];
  cons?: string[];
  howToUse?: string;
  relatedProducts?: string[];
  relatedGuideIds?: string[];
  affiliateUrl?: string; // Format: AFFILIATE_URL_PLACEHOLDER
  gumroadUrl?: string; // Format: GUMROAD_URL_PLACEHOLDER
  isBestseller?: boolean;
  // Plant-specific physical traits if applicable
  light?: string;
  water?: string;
  difficulty?: string;
  petFriendly?: boolean;
  potSize?: string;
  careTip?: string;
}

export interface PlantDiscoveryItem {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  light: 'Low Light' | 'Medium Indirect' | 'Bright Indirect' | 'Direct Light';
  watering: 'Low / Drought Tolerant' | 'Moderate' | 'Frequent / Evenly Moist';
  size: 'Small' | 'Medium' | 'Large';
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  roomType: 'Living Room' | 'Bedroom' | 'Bathroom' | 'Low-light Office' | 'Sunny Sill';
  growthHabit: 'Trailing' | 'Upright' | 'Bushy' | 'Compact';
  beginnerFriendly: boolean;
  petSafe: boolean;
  summary: string;
  guideId?: string;
  shopCategory?: string;
}

export interface PlantGuide {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  category: 'Foliage' | 'Trailing' | 'Succulent' | 'Aroid' | 'Hardy';
  difficulty: 'Beginner Friendly' | 'Moderate' | 'Care Enthusiast';
  light: 'Low Light' | 'Medium Indirect' | 'Bright Indirect' | 'Bright Direct';
  water: string;
  humidity: string;
  temperature: string;
  soil: string;
  feeding: string;
  repotting: string;
  propagation: string;
  petSafe: boolean;
  quickOverview: string;
  quickCareSummary: string[];
  commonProblems: { symptom: string; fix: string }[];
  relatedProducts?: string[];
  relatedArticleIds?: string[];
}

export interface PlantProblem {
  id: string;
  title: string;
  category?: string;
  symptomBrief: string;
  image: string;
  urgency: 'Routine Adjustment' | 'Moderate Attention' | 'Urgent Intervention';
  visualCues: string[];
  likelyCauses: string[];
  whatToCheck?: string[];
  whatToCheckFirst?: string[];
  whatToDoFirst?: string[];
  immediateAction?: string[];
  whatNotToDo?: string[];
  whenToWait?: string;
  whenToRepot?: string;
  plantSpecificDifferences?: string;
  plantSpecificNotes?: Record<string, string>;
  prevention: string;
  affectedPlants: string[];
  relatedProducts?: string[];
  relatedGuideIds?: string[];
}

export interface ProductReview {
  id: string;
  title: string;
  category: 'Grow Lights' | 'Plant Pots' | 'Plant Stands' | 'Moisture Meters' | 'Soil / Substrate' | 'Plant Food' | 'Humidifiers' | 'Pruning Tools';
  productName: string;
  priceRange: string;
  image: string;
  rating: number;
  verdict: string;
  problemSolved?: string;
  whoNeedsIt: string;
  whoDoesNotNeedIt: string;
  whatToLookFor?: string;
  importantSpecs: string[];
  pros: string[];
  cons: string[];
  potentialAlternatives?: string;
  valueForMoney?: string;
  comparisonNotes?: string;
  criteriaExplained: string;
  affiliateUrl: string;
}

export interface DigitalProduct {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  format: string;
  pages: string;
  badge?: string;
  description: string;
  inclusions: string[];
  tableOfContents: string[];
  gumroadUrl?: string; // GUMROAD_CHECKOUT_PLACEHOLDER
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content?: string[];
  keyTakeaways?: string[];
  problemAddressed?: string;
  solutionSummary?: string;
  contextualCta?: {
    label?: string;
    text?: string;
    target?: string;
    targetSection?: string;
    type?: string;
  };
  relatedGuideId?: string;
}

export interface VlogEpisode {
  id: string;
  title: string;
  subtitle?: string;
  episodeNumber?: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  summary: string;
  category?: string;
  views?: string;
  date?: string;
  featuredProductId?: string;
  featuredPlantName?: string;
  featuredPlants?: string[];
  keyLessons?: string[];
  keyTakeaways?: string[];
  timestampChapters?: { time: string; topic: string }[];
}

export interface CartItem {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    type: 'physical' | 'digital';
    subtitle?: string;
  };
  quantity: number;
}

export type LightExposure = 'south' | 'east' | 'west' | 'north';
