import Image from "next/image";
import React from "react";
import BgImage from "../../../public/francis-odeyemi-u1QJm4o7cXk-unsplash.jpg";

const MainBanner = () => {
  return (
    <div className="h-[33rem] rounded-3xl overflow-hidden mt-10 relative">
      <Image src={BgImage} alt="" />

      <section className="bg-gradient-to-r from-active-blue-600 to-blue-transparent-700 text-white py-20 absolute top-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Build Your Future in Tech with TopStak Academy
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-center">
            Learn software engineering by doing. Master the skills, build real
            projects, and become job-ready in months — not years.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-active-blue-600 font-bold px-6 py-3 rounded-lg">
              Join the Next Cohort
            </button>
            <button className="border border-white px-6 py-3 rounded-lg">
              Watch How It Works
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainBanner;
