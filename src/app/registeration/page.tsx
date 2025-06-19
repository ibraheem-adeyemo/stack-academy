import { BuildWebContent } from "general/build-web/build-web";
import StudentRegistration from "general/form/registration-form";
import React from "react";

const RegistrationPage = () => {
  return (
    <main className="px-10">
      <div
        className={`h-60 md:h-[28.5rem] w-full md:col-span-2 bg-[url('/desola-lanre-ologun-kwzWjTnDPLk-unsplash.jpg')] bg-cover bg-center rounded-2xl`}
      ></div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 my-20">
        <div className="col-span-2">
          <BuildWebContent />
        </div>
        <div className="col-span-2">
          <StudentRegistration />
        </div>
      </div>
    </main>
  );
};

export default RegistrationPage;
