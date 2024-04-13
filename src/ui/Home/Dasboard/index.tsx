import React from "react";
import DashboardLayout from "@/components/layout/dashboard";
import useAuth from "@/hooks/auth";

const DashboardView = () => {
  const hours = new Date().getHours();
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-xl font-medium">{`Good ${
          hours < 12 ? "Morning" : hours < 18 ? "Afternoon" : "Evening"
        } ${user?.name.split(" ")[0]},`}</h1>
      </div>
    </DashboardLayout>
  );
};

export default DashboardView;
