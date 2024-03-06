import React from "react";
import Card from "../atoms/card";
import { MdSpaceDashboard } from "react-icons/md";

const Features = () => {
  return (
    <div
      className="min-h-screen bg-[#0b1121] flex-col text-white bg-blend-lighten flex justify-center items-center py-2"
      id="highlights"
    >
      <div className="flex flex-col items-center max-w-[800px]">
        <p className="text-[#818cf8] text-xl font-bold">Features</p>
        <h3 className="text-4xl font-bold mt-4">Why Choose Us?</h3>
        <p className="text-center mt-4 text-gray-400">
          Every feature is designed to make your life easier and better. We are
          constantly working on improving our product so that you can have the
          best experience.
        </p>
      </div>
      <div className="flex justify-between items-center gap-8 mt-16">
        <Card
          icon={<MdSpaceDashboard size={30} />}
          title="Dashboard"
          description="Get a quick overview of your business in one place."
        />
      </div>
    </div>
  );
};

export default Features;
