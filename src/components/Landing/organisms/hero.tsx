import React from "react";
import Button from "@/components/Landing/atoms/button";
import Redirect from "@/components/Landing/atoms/link";
import HeroBanner from "../molecules/hero-banner";

const Hero = () => {
  return (
    <div
      className="h-screen bg-[url('/images/hero.jpg')] bg-contain flex gap-8 p-10 items-center justify-center"
      id="#home"
    >
      <div className="max-w-[600px]">
        <div className="flex items-center space-x-4 my-5">
          <Button variant="pill">What&apos;s New</Button>
          <Redirect to="https://github.com/sumit-022/erp">Open Source</Redirect>
        </div>
        <h1 className="text-5xl font-bold text-white">
          Manage your business with ease!
        </h1>
        <p className="text-gray-300 mt-4">
          ERP is a modern, open-source, and easy-to-use management system for
          your business.
        </p>
      </div>
      <HeroBanner />
    </div>
  );
};

export default Hero;
