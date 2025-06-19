import MainBanner from "general/banners/main-banner";
import CallToAction from "general/call-to-action";
import CareerBootcamp from "general/career-bootcamp";
import WhyTopStack from "general/why-topstack";

export default function Home() {
  return (
    <main>
      <div className="px-4px md:px-[4rem] lg:px-[10rem]">
        <MainBanner />
        <CareerBootcamp />
      </div>
      <WhyTopStack />
      <CallToAction />
    </main>
  );
}
