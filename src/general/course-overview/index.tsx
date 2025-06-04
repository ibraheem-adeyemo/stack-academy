import { SpiralCalendarIcon } from "general/carlender-design";
import React from "react";

interface CourseOverviewProps {
  stackTitle: string;
  stackDescription: string;
  youWillLearn: string;
  nextCohortDate: string;
  duration: string;
}

const CourseOverview = ({
  stackTitle,
  stackDescription,
  youWillLearn,
  nextCohortDate,
  duration,
}: CourseOverviewProps) => {
  return (
    <div className="col-span-3">
      <h2 className="font-extrabold text-3xl tracking-wide leading-15">
        {stackTitle}
      </h2>

      <div className="text-xl leading-10 my-10 text-justify">
        {stackDescription}
      </div>

      <div className="text-xl leading-10 my-3 text-justify">
        <p>{youWillLearn}</p>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-3 flex">
          <SpiralCalendarIcon date={new Date(nextCohortDate)} />
          <div className="ml-10">
            <h3 className="text-3xl font-bold">{duration}</h3>
          </div>
        </div>
        <div className="col-span-2">
          <div></div>
          <div className="flex">
            <span>Taught by:</span> <h4>Ibraheem Adeyemo</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
