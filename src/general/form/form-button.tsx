import React from "react";

type FormButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const FormButton = ({ children, ...props }: FormButtonProps) => (
  <button
    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
    {...props}
  >
    {children}
  </button>
);

export default FormButton;
