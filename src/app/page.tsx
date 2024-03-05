import Button from "@/components/atoms/button";
import { Metadata } from "next";
import logo from "@/assets/images/logo.png";
import Navbar from "@/components/Landing/molecules/navbar";
import Hero from "@/components/Landing/organisms/hero";
import Feature from "@/components/Landing/organisms/feature";

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
      <Feature />
    </div>
  );
}
