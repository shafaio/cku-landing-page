export type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type Media = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large?: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
    thumbnail?: ImageFormat;
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
};

export type Partner = {
  id: number;
  Name: string;
  Description: string;
  image: Media;
};

export type PartnerCTA = {
  id: number;
  Text: string;
  Link: string;
};

export type TrustIndicator = {
  id: number;
  Title: string;
  Description: string;
  Indicators: string;
  icon: string | null;
};

export type CompanyInformation = {
  id: number;
  CompanyName: string;
  CompanyDescription: string;
  CompanyAddress: string;
  Email: string;
  Phone: string;
  Logo: Media;
};

export type SEOSetting = {
  id: number;
  SiteTitle: string;
  SiteDescription: string;
  SiteKeywords: string;
  OGImage: Media;
  Favicon: Media;
};

export type HeroButton = {
  id: number;
  Text: string;
  Link: string;
};

export type HeroSection = {
  id: number;
  HeroTitle: string;
  HeroDescription: string;
  PrimaryButton: HeroButton;
  Secondary: HeroButton;
};

export type Feature = {
  id: number;
  Title: string;
  Description: string;
  Indicators: string;
  icon: string;
};

export type Section = {
  id: number;
  Title?: string;
  title?: string;
  Description?: string;
  description?: string;
  Features?: Feature[];
  Services?: Feature[];
  Industries?: Feature[];
};

export type VisionAndMission = {
  id: number;
  Title: string;
  Description: string;
  Vision: Feature;
  Mission: Feature;
  WhyApproach: Feature;
};

export type InvestorStat = {
  id: number;
  Name: string;
  Description: string;
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
  MarketGrowthData: InvestorStat[];
  PrimaryCTA: PartnerCTA;
  SecondayCTA: PartnerCTA;
};

export type ContactSection = {
  id: number;
  Languanges: string;
  ContactCTA: PartnerCTA;
  title: string;
  Description: string;
};

export type PartnerSection = {
  id: number;
  Title: string;
  HighlightedTitle: string;
  Description: string;
  Partners: Partner[];
  PartnerCTA: PartnerCTA;
  TrusIndicator: TrustIndicator;
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
  meta: Record<string, unknown>;
};
