import React from "react";

type FormButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const FormButton = ({ children, ...props }: FormButtonProps) => (
  <button
    className="px-6 py-2 bg-active-blue-400 text-white font-semibold rounded-md hover:bg-active-blue-500 cursor-pointer"
    {...props}
  >
    {children}
  </button>
);

export default FormButton;
