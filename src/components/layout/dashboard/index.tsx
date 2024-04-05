import React from "react";
import DashboardSidebar from "./sidebar";
import { Truculenta } from "next/font/google";
import clsx from "clsx";

const truculenta = Truculenta({ subsets: ["latin-ext"] });

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary-background grid grid-cols-[auto,1fr] h-screen overflow-hidden">
      <DashboardSidebar />
      <main className={clsx("overflow-y-auto p-8", truculenta.className)}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
