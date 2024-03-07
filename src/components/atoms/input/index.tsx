"use client";
import React from "react";
import clsx from "clsx";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  adornment?: {
    start?: {
      icon: React.ReactNode;
    };
    end?: {
      icon: React.ReactNode;
    };
  };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  register?: UseFormRegister<any>;
  className?: string;
}

const Input = ({
  placeholder,
  type,
  error = false,
  helperText,
  adornment,
  onChange,
  name,
  value,
  rules,
  register,
  className,
  ...rest
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        {adornment && adornment.start && (
          <div
            className={clsx(
              "absolute inset-y-0 flex items-center pl-3 pointer-events-none z-10",
              {
                "text-gray-500": !error,
                "text-red-500": error,
              }
            )}
          >
            {adornment.start.icon}
          </div>
        )}
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={clsx(
            "w-full p-3 transition-all duration-100 text-gray-500 font-[500] placeholder:font-normal rounded-md focus:outline-none focus:drop-shadow-input bg-gray-800 border min-w-[200px]",
            className,
            {
              "border-red-500 focus:border-red-500": error,
              "pl-10": adornment && adornment.start,
              "pr-10": adornment && adornment.end,
            }
          )}
          {...(register && name && register(name, rules))}
        />
        {adornment && adornment.end && (
          <div
            className={clsx("absolute inset-y-0 flex items-center right-3", {
              "text-gray-500": !error,
              "text-red-500 hover:text-red-500": error,
            })}
          >
            {adornment.end.icon}
          </div>
        )}
      </div>
      <small
        className={clsx({
          "text-red-500": error,
          "text-gray-500": !error,
          "text-sm": true,
        })}
      >
        {helperText}
      </small>
    </div>
  );
};

export default Input;
