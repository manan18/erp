import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden h-screen bg-[url(https://tailwindui.com/img/beams-home@95.jpg)] bg-cover flex items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
