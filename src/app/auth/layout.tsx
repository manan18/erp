import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full sm:max-w-2xl max-w-[80vw] p-5 bg-white rounded-md shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Layout;
