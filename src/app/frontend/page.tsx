import BuildWeb from "general/build-web/build-web";
import StudentRegistration from "general/form/registration-form";
import CustomMenubar from "general/menu-bar";
import React from "react";

const FrontendPage = () => {
  return (
    <main>
      <div className="px-4px md:px-[10rem]">
        <CustomMenubar />
        <BuildWeb />
      </div>
      <div className="bg-active-blue-800">
        <StudentRegistration />
      </div>
    </main>
  );
};

export default FrontendPage;
