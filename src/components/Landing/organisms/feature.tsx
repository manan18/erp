import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#1f2335] p-4 rounded-full">{icon}</div>
      <h3 className="text-2xl font-bold mt-4">{title}</h3>
      <p className="text-center mt-4 text-gray-400">{description}</p>
    </div>
  );
};

const Feature = () => {
  return (
    <div
      className="h-screen bg-[#0b1121] flex-col text-white bg-blend-lighten flex justify-center items-center"
      id="features"
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
      <div className="flex gap-8 mt-8">
        <FeatureCard
          title="Easy to Use"
          description="Our product is designed to be user-friendly and easy to use."
          icon={<i className="fas fa-user-friends text-5xl"></i>}
        />
      </div>
    </div>
  );
};

export default Feature;
