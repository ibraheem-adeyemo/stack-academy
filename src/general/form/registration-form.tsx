"use client";

import React from "react";
import FormField from "./form-field";
import FormInput from "./form-input";
import FormButton from "./form-button";
import FormDropdown from "./form-dropdown";
import FormRadioGroup from "./form-radio-group";
import FormFileUpload from "./form-file-upload";
import { useCustomForm } from "hooks/form-hook";

export interface StudentRegistrationData {
  fullName: string;
  dob: string;
  gender: "male" | "female" | "other" | string;
  email: string;
  stack: string;
  phone: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  relationship: "parent" | "guardian" | "sponsor" | string;
  passport?: File;
}

const StudentRegistration = () => {
  const {
    errors,
    stage,
    register,
    onSubmit,
    handleSubmit,
    setStage,
  } = useCustomForm();

  console.log(errors, "errors=====");

  const Formone = () => (
    <section>
      <h3 className="text-xl font-semibold">Basic Information</h3>
      <FormField label="Full Name" className="text-active-blue-600">
        <FormInput {...register("fullName")} required />
      </FormField>
      <FormField label="Gender">
        <FormRadioGroup
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          {...register("gender")}
        />
      </FormField>
      <FormField label="Select a course">
        <FormDropdown
          options={[
            { label: "Frontend", value: "frontend" },
            { label: "Backend", value: "backend" },
            { label: "Fullstack", value: "fullstack" },
          ]}
          {...register("stack")}
          required
        />
      </FormField>
      <FormField label="Date of Birth">
        <FormInput type="date" {...register("dob")} required />
      </FormField>
      <FormField label="Upload Passport Photograph">
        <FormFileUpload {...register("passport")} required />
      </FormField>
    </section>
  );

  const Formtwo = () => (
    <section>
      <h3 className="text-xl font-semibold">Guardian Information</h3>
      <FormField label="Guardian's Name">
        <FormInput {...register("guardianName")} required />
      </FormField>
      <FormField label="Relationship">
        <FormDropdown
          options={[
            { label: "Parent", value: "parent" },
            { label: "Sibling", value: "sibling" },
            { label: "Other", value: "other" },
          ]}
          {...register("relationship")}
          required
        />
      </FormField>
      <FormField label="Guardian's Phone Number">
        <FormInput {...register("guardianPhone")} required />
      </FormField>
    </section>
  );

  const Formthree = () => (
    <section>
      <h3 className="text-xl font-semibold">Contact Details</h3>
      <FormField label="Email">
        <FormInput type="email" {...register("email")} required />
      </FormField>
      <FormField label="Phone Number">
        <FormInput {...register("phone")} required />
      </FormField>
      <FormField label="Address">
        <FormInput {...register("address")} required />
      </FormField>
    </section>
  );

  const getRegistrationForm = () => {
    switch (stage) {
      case 0:
        return <Formone />;
      case 1:
        return <Formtwo />;
      case 2:
        return <Formthree />;
      default:
        return null;
    }
  };
  return (
    <form
      className="max-w-4xl mx-auto p-6 space-y-6 shadow-md rounded-md text-active-blue-600"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold">
        Student Registration - TopStak Tech Academy
      </h2>
      {getRegistrationForm()}
      <div className="flex justify-center text-center gap-10">
        <FormButton
          onClick={() => setStage(stage >= 1 ? stage - 1 : 0)}
          disabled={stage === 0}
        >
          previous
        </FormButton>
        <FormButton type="submit">Submit Registration</FormButton>
        <FormButton
          onClick={() => setStage(stage <= 1 ? stage + 1 : 0)}
          disabled={stage === 2}
        >
          next
        </FormButton>
      </div>
    </form>
  );
};

export default StudentRegistration;
