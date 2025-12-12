"use client";

import VisibilityIcon from "@/_icons/VisibilityIcon";
import VisibilityOffIcon from "@/_icons/VisibilityOffIcon";
import { useState } from "react";
import FormError from "./FormError";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
}

export default function Input({
  name,
  label,
  placeholder,
  error,
  type,
}: InputProps & React.HTMLProps<HTMLInputElement>) {
  const [inputType, setInputType] = useState(type ?? "text");

  const toggleInputType = () => {
    setInputType((prev) => {
      return prev === "password" ? "text" : "password";
    });
  };

  return (
    <div className="w-full">
      {label ? (
        <label className="block text-base font-bold mb-2">{label}</label>
      ) : null}

      <div className="relative">
        <input
          name={name}
          placeholder={placeholder}
          className={`px-4 py-3 text-base bg-second-2 rounded-sm w-full mb-1 ${
            type === "password" ? "pr-10" : ""
          }`}
          type={inputType}
        />

        {type === "password" ? (
          <div
            className="absolute right-2 top-2/4 -translate-y-1/2 cursor-pointer"
            onClick={() => toggleInputType()}>
            {inputType === "text" ? (
              <VisibilityOffIcon fill="black" />
            ) : (
              <VisibilityIcon fill="black" />
            )}
          </div>
        ) : null}
      </div>

      <FormError error={error} />
    </div>
  );
}
