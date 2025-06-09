import Footer from "@/components/footer";
import Header from "@/components/header";
// import { dumy } from "@/data/dumy";
import HomePage from "@/pages/home-page";
import { getDataHomePage } from "@/utils/get-data-home-page";

export default async function Home() {
  const { data } = await getDataHomePage();

  return (
    <>
      <Header />
      <main>
        <HomePage data={data} />
      </main>
      <Footer {...data.CompanyInformation} />
    </>
  );
}
