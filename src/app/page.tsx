import { Metadata } from "next";
import logo from "@/assets/images/logo.png";
import HomeView from "@/ui/Home/page";

export const metadata: Metadata = {
  title: "Welcome to Startup Sync",
  description:
    "Startup Sync is a platform that helps you to sync your startup with the right resources and tools.",
  icons: {
    icon: logo.src,
  },
};

export default HomeView;
