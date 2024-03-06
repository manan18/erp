import Button from "@/components/atoms/button";
import { Metadata } from "next";
import logo from "@/assets/images/logo.png";
import Navbar from "@/components/Landing/molecules/navbar";
import Hero from "@/components/Landing/organisms/hero";
import Highlights from "@/components/Landing/organisms/highlight";
import Features from "@/components/Landing/organisms/feature";
import Contact from "@/components/Landing/organisms/contact";

export const metadata: Metadata = {
  title: "Welcome to ERP",
  description: "Welcome to ERP",
  icons: {
    icon: logo.src,
  },
};

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Contact />
    </div>
  );
}
