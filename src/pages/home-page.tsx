import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Industries from "@/components/sections/industries";
import InvestorRelations from "@/components/sections/investor-relations";
import Partners from "@/components/sections/partners";
import Services from "@/components/sections/services";
import VisionMission from "@/components/sections/vission-mission";
import { HomePageData } from "@/type";

export default async function HomePage({ data }: { data: HomePageData }) {
  return (
    <>
      {data?.HeroSection && <Hero {...data.HeroSection} />}
      {data?.AboutSection && <About {...data.AboutSection} />}
      {data?.VisionAndMission && <VisionMission {...data.VisionAndMission} />}
      {data?.ServiceSection && <Services {...data.ServiceSection} />}
      {data?.IndustriesSection && <Industries {...data.IndustriesSection} />}
      {data?.PartnerSection && <Partners {...data.PartnerSection} />}
      {data?.InvestorSection && <InvestorRelations {...data.InvestorSection} />}
      {data?.ContactSection && data?.CompanyInformation && (
        <Contact {...data.ContactSection} {...data.CompanyInformation} />
      )}
    </>
  );
}
