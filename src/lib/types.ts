export type Locale = 'ar' | 'en';
export type Theme = 'dark' | 'light';

export type BusinessSectorKey =
  | 'commercial-contracting'
  | 'culinary-hospitality'
  | 'automotive-maintenance'
  | 'retail-heritage'
  | 'consumer-services'
  | 'travel-tourism'
  | 'fintech'
  | 'construction-property'
  | 'healthcare'
  | 'saas-tech'
  | 'legal-professional';

export type ProjectClassificationKey = 'client-project' | 'independent-concept';

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface LocalizedArray {
  ar: string[];
  en: string[];
}

export interface StrategySection {
  description: LocalizedString;
  points: LocalizedString[];
}

export interface ProjectData {
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  summary: LocalizedString;
  sector: {
    key: BusinessSectorKey;
    label: LocalizedString;
  };
  classification: {
    key: ProjectClassificationKey;
    label: LocalizedString;
  };
  market: LocalizedString;
  languages: LocalizedString;
  role: LocalizedString;
  liveUrl?: string;
  previewImage: string;
  galleryImages: string[];
  featured: boolean;
  order: number;
  year: string;
  
  // Case Study Sections
  overview: LocalizedString;
  context: LocalizedString;
  challenge: LocalizedString;
  strategy: StrategySection;
  designAndUx: StrategySection;
  execution: StrategySection;
  deliverables: LocalizedArray;
  observations: LocalizedString;
  outcomeNotes: LocalizedString;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: LocalizedString;
  badge: LocalizedString;
  description: LocalizedString;
  valueProposition: LocalizedString;
  idealFor: LocalizedArray;
  deliverables: LocalizedArray;
  features: LocalizedArray;
}

export interface NavItem {
  href: string;
  label: LocalizedString;
}
