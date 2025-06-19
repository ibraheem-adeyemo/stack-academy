import * as yup from "yup";

export const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  dob: yup.string().required("Date of birth is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  gender: yup.string().required("Gender is required"),
  phone: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  guardianName: yup.string().required("Guardian name is required"),
  guardianPhone: yup.string().required("Guardian phone is required"),
  relationship: yup.string().required("Relationship is required"),
  passport: yup
    .mixed<File>()
    .notRequired()
    .test("fileExists", "Passport photo is required", (value) => !!value),
});
