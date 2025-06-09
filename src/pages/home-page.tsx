import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Industries from "@/components/sections/industries";
import InvestorRelations from "@/components/sections/investor-relations";
import Partners from "@/components/sections/partners";
import Services from "@/components/sections/services";
import VisionMission from "@/components/sections/vission-mission";
import { HomePageData } from "@/type";
// import { getDataHomePage } from "@/utils/get-data-home-page";

export default async function HomePage({ data }: { data: HomePageData }) {
  return (
    <>
      <Hero {...data.HeroSection} />
      <About {...data.AboutSection} />
      <VisionMission {...data.VisionAndMission} />
      <Services {...data.ServiceSection} />
      <Industries {...data.IndustriesSection} />
      <Partners {...data.PartnerSection} />
      <InvestorRelations {...data.InvestorSection} />
      <Contact {...data.ContactSection} />
    </>
  );
}
