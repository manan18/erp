import React from "react";
import Navbar from "@/components/Landing/molecules/navbar";
import Hero from "@/components/Landing/organisms/hero";
import Highlights from "@/components/Landing/organisms/highlight";
import Features from "@/components/Landing/organisms/feature";
import Testimonial from "@/components/Landing/organisms/testimonial";
import Contact from "@/components/Landing/organisms/contact";

const LandingView = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default LandingView;
