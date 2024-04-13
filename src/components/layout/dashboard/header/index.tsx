import React from "react";
import useAuth from "@/hooks/auth";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import avatar from "@/assets/images/avatars/user.jpeg";
import { MdOutlineSettings } from "react-icons/md";
import { Popover } from "@headlessui/react";

const ProfileIcon = () => {
  const { user } = useAuth();
  return (
    <Popover as="div" className="relative">
      <Popover.Button>
        <Image
          src={avatar}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full cursor-pointer w-10 h-10"
        />
      </Popover.Button>
      <Popover.Panel className="absolute z-10 w-48 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex items-center space-x-4">
          <Image
            src={avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="text-sm font-semibold">{user?.name}</h1>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full py-2 text-left">Profile</button>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between p-4 w-[85%] mx-auto">
      <Image src={logo} alt="logo" width={40} height={40} />
      <div className="flex items-center space-x-4">
        <MdOutlineSettings className="text-2xl text-white" />
        <ProfileIcon />
      </div>
    </div>
  );
};

export default Header;
