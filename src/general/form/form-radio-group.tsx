import { FormOptionsProps } from "models/form-interface";
import React from "react";

type FormRadioGroup = React.InputHTMLAttributes<HTMLPictureElement> & {
  name: string;
  options: FormOptionsProps[];
};

const FormRadioGroup = ({ name, options = [], ...props }: FormRadioGroup) => (
  <div className="flex gap-4">
    {options.map((opt) => (
      <label key={opt.value} className="flex items-center gap-2">
        <input type="radio" name={name} value={opt.value} {...props} />{" "}
        {opt.label}
      </label>
    ))}
  </div>
);

export default FormRadioGroup;
