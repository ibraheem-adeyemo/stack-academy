import React from "react";

const FormInput = ({ type = "text", ...props }) => (
  <input
    type={type}
    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
);

export default FormInput;
