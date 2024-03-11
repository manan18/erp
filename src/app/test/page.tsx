"use client";
import Button from "@/components/atoms/button";
import React from "react";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";

const TestPage = () => {
  return (
    <div className="h-screen bg-[#0b1121]">
      <Button
        onClick={() => {
          //problem
          toast.error("Error creating account", {
            position: "top-right",
            autoClose: 1000,
            transition: Zoom,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
      >
        Click me
      </Button>
    </div>
  );
};

export default TestPage;
