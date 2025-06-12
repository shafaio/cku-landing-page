import { HomePageResponse } from "@/type";

export const getDataHomePage: () => Promise<HomePageResponse> = async () => {
  try {
    const query = new URLSearchParams({
      "populate[CompanyInformation][populate]": "*",
      "populate[SEOSetting][populate]": "*",
      "populate[HeroSection][populate]": "*",
      "populate[AboutSection][populate][Features][populate]": "*",
      "populate[VisionAndMission][populate]": "*",
      "populate[ServiceSection][populate]": "*",
      "populate[IndustriesSection][populate]": "*",
      "populate[PartnerSection][populate][Partners][populate]": "*",
      "populate[PartnerSection][populate][PartnerCTA][populate]": "*",
      "populate[PartnerSection][populate][TrusIndicator][populate]": "*",
      "populate[InvestorSection][populate]": "*",
      "populate[ContactSection][populate]": "*",
    }).toString();

    const res = await fetch(
      `${process.env.NEXT_BASE_API}/api/cku-landing-page?${query}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
    throw error;
  }
};
