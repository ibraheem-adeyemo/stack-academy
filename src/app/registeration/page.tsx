import BuildWeb from "general/build-web/build-web";
import StudentRegistration from "general/form/registration-form";
import CustomMenubar from "general/menu-bar";
import React from "react";

const RegistrationPage = () => {
  return (
    <main>
      <div className="px-4px md:px-[4rem] lg:px-[10rem] mb-20">
        <BuildWeb />
      </div>
      <div className="bg-active-blue-800 py-10">
        <StudentRegistration />
      </div>
    </main>
  );
};

export default RegistrationPage;
