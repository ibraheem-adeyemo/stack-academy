import DisplayWithCheck from "general/display/display-with-check";
import { benefits } from "lib/mock/mock";
import React from "react";

export const BuildWebContent = () => {
  return (
    <div className="bg-active-blue-100 p-[3rem] rounded-2xl">
      <div className="text-active-blue-900 mb-[2rem]">
        <h3 className="text-xl md:text-2xl font-bold">
          Become an Intermediate frontend engineer with our frontend bootcamp
        </h3>
      </div>
      <div>
        {benefits.map((item, i) => (
          <DisplayWithCheck
            content={item.title}
            key={i}
            divClassName="mb-[1rem]"
            spanClassName="font-normal"
          />
        ))}
      </div>
    </div>
  );
};

const BuildWeb = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-[2rem]">
      <div className="md:col-span-3">
        <BuildWebContent />
      </div>
      <div
        className={`h-60 md:h-[28.5rem] w-full md:col-span-2 bg-[url('/desola-lanre-ologun-kwzWjTnDPLk-unsplash.jpg')] bg-cover bg-center rounded-2xl`}
      ></div>
    </div>
  );
};

export default BuildWeb;
