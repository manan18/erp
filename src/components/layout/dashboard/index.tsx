

import React from "react";
import clsx from "clsx";
import Header from "./header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-pallete1-background px-14 grid grid-rows-[auto,1fr] h-screen overflow-hidden">
      <Header />
      <main className={clsx("overflow-y-auto py-2")}>{children}</main>
    </div>
  );
};

export default DashboardLayout;
