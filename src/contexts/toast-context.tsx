'use client'

import React, { createContext, useState, ReactNode } from "react";

export interface Toast {
  id: number;
  type: "success" | "error" | "info" | "warning";
  message: string;
}

interface ToastContextType {
  showToast: (toast: Omit<Toast, "id">) => void;
}

const toastMap = {
  success: { bg: "bg-active-green-900" },
  error: { bg: "bg-active-red-600" },
  warning: { bg: "bg-active-yellow-100" },
  info: { bg: "bg-active-neutral-100" },
};
export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (toast: Omit<Toast, "id">) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);

   setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 40000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts }: { toasts: Toast[] }) => (
  <div className="fixed top-5 right-5 z-50 space-y-2">
    {toasts.map((toast) => (
      <div
        key={toast.id}
        className={`p-4 rounded-md shadow-md text-white text-sm transition-all ${toastMap[toast.type].bg} text-black`}
      >
        {toast.message}
      </div>
    ))}
  </div>
);
