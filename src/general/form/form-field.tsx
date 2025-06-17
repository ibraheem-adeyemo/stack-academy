import React from "react";

const FormField = ({
  label,
  children,
  className = "text-active-blue-600",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className="mb-4">
    <label className={`block text-sm font-medium mb-1 ${className}`}>
      {label}
    </label>
    {children}
  </div>
);

export default FormField;
