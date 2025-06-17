import { StudentRegistrationData } from "general/form/registration-form";
import { useState } from "react";
import { supabaseClient } from "lib/supa-base-client";
import { useToast } from "hooks/toast-hook";
import { useForm } from "react-hook-form";

export const useCustomForm = () => {
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [stage, setStage] = useState(0);

  const supabase = supabaseClient();

  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<StudentRegistrationData>({
    // resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      dob: "",
      email: "",
      gender: "",
      phone: "",
      address: "",
      guardianName: "",
      guardianPhone: "",
      relationship: "",
      passport: undefined,
    },
  });

  const onSubmit = async (data: StudentRegistrationData) => {
    setLoading(true);
    console.log(data);
    try {
      let photoUrl: string | null = null;

      const file = data.passport;

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
          return;
        }

        const { data: publicUrlData } = supabase.storage
          .from("portfolio1")
          .getPublicUrl(fileName);

        photoUrl = publicUrlData.publicUrl;
      }

      const payload = { ...data, passport: photoUrl };

      const { error } = await supabase.from("tech-academy").insert([payload]);

      if (error) {
        showToast({
          type: "error",
          message: `Submission failed: ${error.message}`,
        });
        return;
      }

      showToast({
        type: "success",
        message: "Your registration is completed successfully",
      });

      setSuccess(true);
      reset();
    } catch (err: unknown) {
        console.log(err)
      showToast({
        type: "error",
        message: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    setValue,
    errors,
    loading,
    isSubmitting,
    success,
    stage,
    setStage,
    reset,
    onSubmit,
  };
};
