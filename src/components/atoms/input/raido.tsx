import React, { LegacyRef } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

type NewType = LegacyRef<HTMLInputElement>;

interface RadioGroupProps {
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  label: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  register?: UseFormRegister<any>;
  ref?: NewType | undefined;
}

const RadioGroup = ({
  name,
  options,
  label,
  rules,
  register,
  ref,
}: RadioGroupProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex gap-14 w-full">
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              id={option.value}
              value={option.value}
              {...(register && name && register(name, rules))}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
