import { Metadata } from "next";
import logo from "@/assets/images/logo.png";
import HomeView from "@/ui/Home/page";

export const metadata: Metadata = {
  title: "Welcome to ERP",
  description: "Welcome to ERP",
  icons: {
    icon: logo.src,
  },
};

export default HomeView;
