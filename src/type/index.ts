export type Partner = {
  id: number;
  Name: string;
  Description: string;
};

export type CompanyInformation = {
  id: number;
  CompanyName: string;
  CompanyDescription: string;
  CompanyAddress: string;
  Email: string;
  Phone: string;
};

export type SEOSetting = {
  id: number;
  SiteTitle: string;
  SiteDescription: string;
  SiteKeywords: string;
};

export type Section = {
  id: number;
  Title?: string;
  title?: string;
  Description?: string;
  description?: string;
};

export type VisionAndMission = {
  id: number;
  Title: string;
  Description: string;
};

export type HeroSection = {
  id: number;
  HeroTitle: string;
  HeroDescription: string;
};

export type PartnerSection = {
  id: number;
  Title: string;
  HighlightedTitle: string;
  Description: string;
  Partners: Partner[];
};

export type InvestorSection = {
  id: number;
  title: string;
  TitleSecondary: string;
  Description: string;
  TrustedInvestmentTitle: string;
  TrustedInvestmentDescription: string;
  JoinText: string;
  MarketGrowthText: string;
  MarketGrowthDesription: string;
  MarketGrowthDigitalApplicationText: string;
};

export type ContactSection = {
  id: number;
  Languanges: string;
};

export type HomePageData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  CompanyInformation: CompanyInformation;
  SEOSetting: SEOSetting;
  HeroSection: HeroSection;
  AboutSection: Section;
  VisionAndMission: VisionAndMission;
  ServiceSection: Section;
  IndustriesSection: Section;
  PartnerSection: PartnerSection;
  InvestorSection: InvestorSection;
  ContactSection: ContactSection;
};

export type HomePageResponse = {
  data: HomePageData;
  meta: Record<string, string >;
};
