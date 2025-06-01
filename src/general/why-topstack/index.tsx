import React from "react";
import Image, { StaticImageData } from "next/image";
import Image1 from "../../../public/van-tay-media--S2-AKdWQoQ-unsplash.jpg";
import Image2 from "../../../public/desola-lanre-ologun-BVr3XaBiWLU-unsplash.jpg";
import Image3 from "../../../public/desola-lanre-ologun-7d4LREDSPyQ-unsplash.jpg";
import { generateClassName } from "lib/utils";

interface WhyTopStackDisplayProps {
  title: string;
  content: string;
  img: StaticImageData;
  shouldReferse: boolean;
}
const whyUsInfo = [
  {
    title: "Get solid foundations by working on real-world projects",
    content:
      "Join courses developed with industry experts and practice on hands-on projects to get actionable skills. Develop a standout portfolio to be ready for your job search.",
    img: Image1,
    shouldReferse: true,
  },
  {
    title: "Learn from industry experts who will spend time with you",
    content:
      "Tired of going it alone with pre-recorded videos and generic advice? Join a program where real mentors walk the journey with you—every step of the way. We believe in accountability, support, and results—not just content. Choose the learning environment that fits you best. Whether you're joining us on campus or online, you'll experience a fully interactive, hands-on curriculum with live classes, collaborative projects, and personal feedback from experienced instructors who are invested in your success.",
    img: Image3,
    shouldReferse: false,
  },
  {
    title: "Benefit from career support and 1:1 coaching",
    content:
      "Our career services will prepare you to land a job in tech through personal coaching, job fairs, and a network of 1000+ hiring partners.",
    img: Image2,
    shouldReferse: true,
  },
];
const WhyTopStack = () => {
  const Display = ({
    title,
    content,
    img,
    shouldReferse,
  }: WhyTopStackDisplayProps) => (
    <div
      className={generateClassName(
        `flex gap-8`,
        shouldReferse && "md:flex-row-reverse",
        "mb-30",
      )}
    >
      <div className="w-300 rounded-2xl overflow-hidden">
        <Image src={img} alt={"img"} />
      </div>
      <div className="max-w-[35rem] p-[3rem]">
        <h4 className="text-3xl md:text-2xl font-bold mb-10 text-active-blue-200">
          {title}
        </h4>
        <p className="text-xl">{content}</p>
      </div>
    </div>
  );
  return (
    <div className="bg-active-blue-900 text-white px-5 md:px-[10rem] py-[5rem]">
      <div className="text-center mb-40">
        <h4 className="uppercase mb-10 text-active-blue-200 font-bold">
          Why Topstack
        </h4>
        <h3 className="text-3xl md:text-4xl font-bold mb-10">
          Gain real-world skills with expert mentors and transform your career
          in just a few months.
        </h3>
      </div>
      <div>
        {whyUsInfo.map((item, i) => (
          <Display
            title={item.title}
            content={item.content}
            img={item.img}
            shouldReferse={item.shouldReferse}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyTopStack;
