import React from "react";

const FormInput = ({ type = "text", ...props }) => (
  <input
    type={type}
    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none border-active-blue-100"
    {...props}
  />
);

export default FormInput;
