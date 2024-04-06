import React from "react";
import { Truculenta } from "next/font/google";
import clsx from "clsx";
import Header from "./header";

const truculenta = Truculenta({ subsets: ["latin-ext"] });

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary-background grid grid-rows-[auto,1fr] h-screen overflow-hidden">
      <Header />
      <main className={clsx("overflow-y-auto p-8", truculenta.className)}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
