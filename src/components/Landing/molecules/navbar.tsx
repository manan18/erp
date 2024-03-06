"use client";

import React from "react";
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

  return (
    <div className="fixed z-10 w-full top-10">
      <div className="bg-black/35 w-[85%] mx-auto flex justify-between items-center px-16 py-2 rounded-full backdrop-blur-sm border border-black/20">
        <Image src={logo} alt="logo" width={50} height={50} />
        <div className="flex items-center space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out"
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
