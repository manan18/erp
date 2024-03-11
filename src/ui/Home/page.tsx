"use client";

import AuthContext, { Role } from "@/contexts/AuthContext";
import DashboardView from "@/ui/Home/Dasboard";
import LandingView from "@/ui/Home/Landing";
import LoadingView from "@/ui/Loading";
import { useContext } from "react";

export default function HomeView() {
  const {
    loading,
    authData: { role },
  } = useContext(AuthContext);

  if (loading) {
    return <LoadingView />;
  } else if (role === Role.USER) {
    return <DashboardView />;
  } else {
    return <LandingView />;
  }
}
