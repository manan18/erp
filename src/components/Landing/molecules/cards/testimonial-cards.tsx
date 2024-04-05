import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";
import { Tilt } from "react-tilt";

interface TestimonialCardProps {
  name: string;
  username: string;
  designation: string;
  company: string;
  message: string;
  image: string | StaticImageData;
  className?: string;
  style?: React.CSSProperties;
}

const Small = ({
  name,
  username,
  designation,
  company,
  message,
  image,
  className,
  style,
}: TestimonialCardProps) => {
  return (
    <Tilt
      className="Tilt"
      options={{
        scale: 1,
        max: 25,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      }}
    >
      <div
        className={clsx(
          "bg-transparent border-white max-h-[400px] border p-4 max-w-[400px] h-full flex justify-between flex-col rounded-lg shadow-lg cursor-default hover:drop-shadow-glow",
          className
        )}
        style={style}
      >
        <p className="text-white/70 flex-1 flex items-center mx-3 mt-4 mb-5 text-[15px] italic">
          &quot;{message}&quot;
        </p>
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full w-12 h-12"
          />
          <div>
            <p className="font-bold text-lg text-white">{name}</p>
            <p className="text-[#cccdce] text-sm">{username}</p>
            <p className="text-[#cccdce] text-sm">
              {designation}, {company}
            </p>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
const Large = ({
  name,
  username,
  designation,
  company,
  message,
  image,
  className,
  style,
}: TestimonialCardProps) => {
  return (
    <div className={clsx("border border-white", className)} style={style}></div>
  );
};

const TestimonialCard = {
  Small,
  Large,
};

export default TestimonialCard;
