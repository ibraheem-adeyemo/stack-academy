import CourseOverview from "general/course-overview";
import CourseBrief from "general/course-overview/course-brief";
import WhatYouWillLearn from "general/what-you-will-learn";
import { anotherBenefits, stacks } from "lib/mock/mock";
import React from "react";

const FrontendPage = () => {
  return (
    <div className="px-4px md:px-[4rem] lg:px-[10rem]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
        <div className="col-span-3">
          <CourseOverview
            stackTitle={stacks.frontend.stackTitle}
            stackDescription={stacks.frontend.stackDescription}
            duration={stacks.frontend.duration}
            youWillLearn={stacks.frontend.youWillLearn}
            nextCohortDate={stacks.frontend.nextCohort}
          />
        </div>
        <div className="col-span-2">
          <CourseBrief
            courseBenefits={anotherBenefits.courseBenefits}
            enrolled={anotherBenefits.enrolled}
            imgSrc={"/desola-lanre-ologun-YgOCJz9uGMk-unsplash.jpg"}
            imgAlt={"Group of topstack student doing group coding"}
          />
        </div>
      </div>
      <div>
        <WhatYouWillLearn whatYouLearn={stacks.frontend.whatYouWillLearn} />
      </div>
    </div>
  );
};

export default FrontendPage;
