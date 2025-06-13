import { DynamicFavicon } from "@/components/dynamic-favicon";
import { DynamicSEO } from "@/components/dynamic-seo";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePage from "@/pages/home-page";
import { getDataHomePage } from "@/utils/get-data-home-page";

export default async function Home() {
  const { data } = await getDataHomePage();
  const faviconUrl = `${process.env.NEXT_BASE_API}${data?.SEOSetting?.Favicon.url}`;

  return (
    <>
      <DynamicFavicon href={faviconUrl} />
      <DynamicSEO {...data?.SEOSetting} {...data?.CompanyInformation} />
      <Header {...data.CompanyInformation} />
      <main>
        <HomePage data={data} />
      </main>
      <Footer {...data.CompanyInformation} {...data.ServiceSection} />
    </>
  );
}
