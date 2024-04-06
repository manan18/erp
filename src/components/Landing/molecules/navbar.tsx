"use client";

import React, { useEffect, useRef } from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Highlights", href: "#highlights" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navRef?.current?.classList.add("bg-white");
        navRef?.current?.classList.add("shadow-md");
        navRef?.current?.classList.add("top-0");
      } else {
        navRef?.current?.classList.remove("bg-white");
        navRef?.current?.classList.remove("top-0");
        navRef?.current?.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed z-10 w-full top-5 transition-all duration-300 ease-in-out"
      ref={navRef}
    >
      <div className="w-[90%] mx-auto flex justify-between items-center px-16 py-2">
        <Image src={logo} alt="logo" width={50} height={50} />
        <div className="flex items-center space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              className="text-pallete1-headersmall transition-all duration-300 ease-in-out"
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
