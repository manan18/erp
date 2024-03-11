import React from "react";
import Navbar from "@/components/Landing/molecules/navbar";
import Hero from "@/components/Landing/organisms/hero";
import Highlights from "@/components/Landing/organisms/highlight";
import Features from "@/components/Landing/organisms/feature";
import Contact from "@/components/Landing/organisms/contact";

const LandingView = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Contact />
    </div>
  );
};

export default LandingView;
