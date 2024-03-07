import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden h-screen bg-[#0b1121] flex items-center justify-center">
      {/* glassmorphism effect */}
      <div className="w-full sm:max-w-2xl max-w-[80vw] p-5 rounded-md shadow-md bg-white bg-opacity-10 backdrop-blur-lg border-2 border-white border-opacity-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
