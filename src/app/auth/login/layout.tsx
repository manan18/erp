import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full sm:max-w-lg max-w-[80vw] p-5 bg-white rounded-md shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Layout;
