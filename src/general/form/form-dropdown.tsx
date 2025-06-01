import { FormOptionsProps } from "models/form-interface";
import React from "react";

type FormDropDownProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: FormOptionsProps[];
};

const FormDropdown = ({ options = [], ...props }: FormDropDownProps) => (
  <select
    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  >
    <option value="">Select an option</option>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default FormDropdown;
