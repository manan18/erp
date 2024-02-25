import Button from "@/components/atoms/button";
import { Metadata } from "next";
import logo from "@/assets/images/logo.png";

export const metadata: Metadata = {
  title: "Welcome to ERP",
  description: "Welcome to ERP",
  icons: {
    icon: logo.src,
  },
};

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button>Click me</Button>
    </div>
  );
}
