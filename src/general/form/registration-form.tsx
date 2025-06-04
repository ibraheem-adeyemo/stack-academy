"use client";

import React, { FormEventHandler, useState } from "react";
import FormField from "./form-field";
import FormInput from "./form-input";
import FormButton from "./form-button";
import FormDropdown from "./form-dropdown";
import FormRadioGroup from "./form-radio-group";
import FormFileUpload from "./form-file-upload";
import { supabaseClient } from "lib/supa-base-client";
import { useToast } from "hooks/toast-hook";

export interface StudentRegistrationData {
  fullName: string;
  dob: string;
  gender: "male" | "female" | "other";
  email: string;
  phone: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  relationship: "parent" | "guardian" | "sponsor" | string;
  passport: File;
}

const StudentRegistration = () => {
  const [formData, setFormData] = useState<StudentRegistrationData>({
    fullName: "",
    dob: "",
    email: "",
    gender: "other",
    phone: "",
    address: "",
    guardianName: "",
    guardianPhone: "",
    relationship: "",
    passport: {} as File,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { showToast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, type, value } = e.target;
    if (type === "file") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: target.files?.[0] || null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const supabase = supabaseClient();

    try {
      let photoUrl: string | null = null;

      const file = formData?.passport;

      if (file && file instanceof File) {
        const fileName = `photos/${Date.now()}_${file.name}`;
        const uploadResult = await supabase.storage
          .from("portfolio1")
          .upload(fileName, file);

        if (uploadResult.error) {
          showToast({
            type: "error",
            message: `File upload failed: ${uploadResult.error.message}`,
          });
        }

        const { data: publicUrlData } = supabase.storage
          .from("portfolio1")
          .getPublicUrl(fileName);

        photoUrl = publicUrlData.publicUrl;
      }

      const payload = {
        ...formData,
        passport: photoUrl,
      };
      const { error } = await supabase.from("tech-academy").insert([payload]);

      if (error) {
        showToast({
          type: "error",
          message: `File upload failed: ${error.message}`,
        });
        return;
      }

      showToast({
        type: "success",
        message: 'Your registration is completed successfully'
      });
      
      setSuccess(true);
    } catch (err: unknown) {

      const errorMessage = err && typeof err === 'object' && 'message' in err ? (err as { message: string}).message : 'Something went wrong'    
      showToast({
        type: "success",
        message: errorMessage,
      });
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="max-w-4xl mx-auto p-6 space-y-6 shadow-md rounded-md text-white"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold">
        Student Registration - TopStak Tech Academy
      </h2>

      <section>
        <h3 className="text-xl font-semibold">Basic Information</h3>
        <FormField label="Full Name">
          <FormInput name="fullName" onChange={handleChange} required />
        </FormField>
        <FormField label="Gender">
          <FormRadioGroup
            name="gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            onChange={handleChange}
          />
        </FormField>
        <FormField label="Date of Birth">
          <FormInput type="date" name="dob" onChange={handleChange} required />
        </FormField>
        <FormField label="Upload Passport Photograph">
          <FormFileUpload name="passport" onChange={handleChange} required />
        </FormField>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Guardian Information</h3>
        <FormField label="Guardian's Name">
          <FormInput name="guardianName" onChange={handleChange} required />
        </FormField>
        <FormField label="Relationship">
          <FormDropdown
            name="relationship"
            options={[
              { label: "Parent", value: "parent" },
              { label: "Sibling", value: "sibling" },
              { label: "Other", value: "other" },
            ]}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField label="Guardian's Phone Number">
          <FormInput name="guardianPhone" onChange={handleChange} required />
        </FormField>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Contact Details</h3>
        <FormField label="Email">
          <FormInput
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField label="Phone Number">
          <FormInput name="phone" onChange={handleChange} required />
        </FormField>
        <FormField label="Address">
          <FormInput name="address" onChange={handleChange} required />
        </FormField>
      </section>

      <div className="text-center">
        <FormButton type="submit">Submit Registration</FormButton>
      </div>
    </form>
  );
};

export default StudentRegistration;
