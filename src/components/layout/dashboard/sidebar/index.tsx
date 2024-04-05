import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const DashboardSidebar = () => {
  return (
    <aside className="w-56 bg-transparent border-r">
      <div className="p-4 flex gap-4 items-center">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1 className="text-3xl font-bold text-white font-reenie">FlexiFirm</h1>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
