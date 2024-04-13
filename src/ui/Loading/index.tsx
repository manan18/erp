import React from "react";
import { PacmanLoader } from "react-spinners";

const LoadingView = () => {
  return (
    <div className="flex fixed z-10 justify-center items-center h-screen w-full bg-pallete1-background">
      <PacmanLoader />
    </div>
  );
};

export default LoadingView;
