import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden h-screen bg-[#0b1121] flex items-center justify-center">
      {children}
    </div>
  );
  // const containerRef = useRef(null);
  // useGSAP(() => {
  //   const tl = gsap.timeline();
  //   tl.from(containerRef.current, {
  //     opacity: 0,
  //     duration: 0.5,
  //     y: -50,
  //   });
  // }, [containerRef.current]);
  // return (
  //   <div className="overflow-hidden h-screen bg-[#0b1121] flex items-center justify-center">
  // <div
  //   className="w-full sm:max-w-3xl max-w-[85vw] p-5 rounded-md shadow-md bg-white bg-opacity-10 backdrop-blur-lg border-2 border-white border-opacity-10"
  //   ref={containerRef}
  // >
  //       {children}
  //     </div>
  //   </div>
  // );
};

export default Layout;
