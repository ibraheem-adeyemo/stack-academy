import { urls } from "constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CourseBriefProps {
  enrolled: string;
  courseBenefits: string[];
  imgSrc: string;
  imgAlt: string;
}
const CourseBrief = (props: CourseBriefProps) => {
  const { enrolled, courseBenefits, imgSrc, imgAlt } = props;
  return (
    <div className="shadow-2xl rounded-2xl overflow-hidden">
      <div className="relative h-70">
        <Image src={imgSrc} alt={imgAlt} fill />
      </div>
      <div className="border-b-2 pb-5 border-active-blue-100 mx-5">
        <h3 className="mt-5 text-2xl font-bold text-center">{enrolled}</h3>
        <div className="flex relative justify-center">
          <Link
            href={urls.register}
            className="border block bg-active-red-700 shadow-xl text-center hover:bg-active-red-500 text-white cursor-pointer font-semibold text-xl my-6 px-10 py-4 tracking-wide rounded-4xl w-max"
          >
            Register for the next cohort now
          </Link>
        </div>
      </div>
      <div className="pt-5 mb-10 mx-10">
        <h4 className="text-center font-bold text-2xl mb-5">
          {" "}
          This course includes:
        </h4>
        <ul className="list-disc flex flex-col text-[16px] gap-3">
          {courseBenefits.map((item: string, i: number) => (
            <li key={i} className="">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseBrief;
