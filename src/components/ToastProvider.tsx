"use client";

import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";

type ToastProviderProps = {
  children: ReactNode;
};

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
