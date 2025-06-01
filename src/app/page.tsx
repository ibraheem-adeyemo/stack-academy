import MainBanner from "general/banners/main-banner";
import CareerBootcamp from "general/career-bootcamp";
import CustomMenubar from "general/menu-bar";
import WhyTopStack from "general/why-topstack";

export default function Home() {
  return (
    <main>
      <div className="px-4px md:px-[10rem]">
        <CustomMenubar />
        <MainBanner />
        <CareerBootcamp />
      </div>
      <WhyTopStack />
    </main>
  );
}
