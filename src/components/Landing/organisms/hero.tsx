import React from "react";
import Button from "@/components/Landing/atoms/button";
import Redirect from "@/components/Landing/atoms/link";
import Banner from "../molecules/banner";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-[url('/images/hero.jpg')] bg-contain grid grid-cols-2 gap-8 p-10 place-items-center justify-center"
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
      <Banner />
    </div>
  );
};

export default Hero;
