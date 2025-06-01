import React from "react";
import CourseCard from "general/card";
import { courses, weProfide } from "lib/mock/mock";
import DisplayWithCheck from "general/display/display-with-check";

const CareerBootcamp = () => {
  return (
    <div className="my-30">
      <div className="text-center">
        <h2 className="capitalize text-3xl md:text-4xl font-bold mb-4">
          Launch Your Tech Career With Confidence
        </h2>
        <p className="text-xl my-8">
          Our transformative training courses have helped thousands of students
          launch new careers in tech.
        </p>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {weProfide.map((item, i) => (
            <div key={i} className="flex md:items-center">
              <DisplayWithCheck content={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-25 items-center">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CareerBootcamp;
