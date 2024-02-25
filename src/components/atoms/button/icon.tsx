"use client";
import React from "react";
import clsx from "clsx";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      className={clsx(
        "p-2 rounded-full hover:bg-[#f1f1f1] transition-all duration-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:cursor-not-allowed",
        className
      )}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick(e);
      }}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default IconButton;
