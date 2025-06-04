import React from "react";

const FormField = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-white mb-1">
      {label}
    </label>
    {children}
  </div>
);

export default FormField;
