import React from "react";
import clsx from "clsx";

const variants = {
  pill: "rounded-full border-[1.5px] bg-[#19203c] border-[#282d60] text-sm text-[#818cf8] font-semibold",
  outline: "border",
  link: "underline",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  textClassName?: string;
  className?: string;
}

const Button = ({
  title,
  variant = "pill",
  textClassName,
  className,
  children,
  style,
  type,
  onClick,
  ...properties
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={clsx(
        "bg-primary px-4 py-2 transition-all duration-300 ease-in-out",
        variants[variant],
        textClassName,
        className
      )}
      {...properties}
    >
      {children && children}
      {title && <p className={` ${textClassName}`}>{title}</p>}
    </button>
  );
};

export default Button;
