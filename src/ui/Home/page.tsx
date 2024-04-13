"use client";

import useAuth from "@/hooks/auth";
import { Role } from "@/types/user";
import DashboardView from "@/ui/Home/Dasboard";
import LandingView from "@/ui/Home/Landing";
import LoadingView from "@/ui/Loading";

export default function HomeView() {
  const { loading, role } = useAuth();

  if (loading) {
    return <LoadingView />;
  } else if (role === Role.USER) {
    return <DashboardView />;
  } else {
    return <LandingView />;
  }
}
