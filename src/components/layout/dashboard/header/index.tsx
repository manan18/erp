import React, { useContext } from "react";
import AuthContext from "@/contexts/AuthContext";

const ProfileIcon = () => {
  const { authData } = useContext(AuthContext);
  
};

const Header = () => {
  return <div className="p-4 bg-transparent flex justify-between">Header</div>;
};

export default Header;
