import React from "react";
import useAuth from "@/hooks/auth";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import IconButton from "@/components/atoms/button/icon";

//assets
import logo from "@/assets/images/logo.png";
import avatar from "@/assets/images/avatars/user.jpeg";
import { MdOutlineSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { FaAngleRight, FaQuestion } from "react-icons/fa6";
import Link from "next/link";

type ProfileOption = {
  type: "link" | "button" | "toggle";
  icon: React.ReactNode;
  title: string;
  path?: string;
  onClick?: () => void;
};

const ProfileIcon = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const profileOptions: ProfileOption[] = [
    {
      type: "link",
      icon: <MdOutlineSettings />,
      title: "Settings & Privacy",
      path: "/settings",
    },
    {
      type: "link",
      icon: <FaQuestion />,
      title: "Help & Support",
      path: "/help",
    },
    {
      type: "toggle",
      icon: <IoMdMoon />,
      title: "Dark Mode",
      onClick: () => console.log("Toggle Dark Mode"),
    },
  ];

  return (
    <Popover as="div" className="relative">
      <Popover.Button className="focus:outline-none">
        <Image
          src={avatar}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full cursor-pointer w-10 h-10"
        />
      </Popover.Button>
      <Popover.Panel className="absolute right-0 z-10 w-max p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between border-b items-center gap-3">
          <div className="flex flex-col pb-2 flex-1">
            <p className="text-sm font-medium text-gray-800">{user?.name}</p>
            <p className="text-xs text-gray-500">{`@${user?.username}`}</p>
          </div>
          <IconButton
            icon={<FiLogOut />}
            tooltip="Logout"
            onClick={handleLogout}
            className="text-red-500"
          />
        </div>
        <div className="mt-4 space-y-4">
          {profileOptions.map((option, index) => {
            if (option.type === "link" && option.path) {
              return (
                <Link
                  key={index}
                  href={option.path}
                  className="flex items-center gap-2"
                >
                  {option.icon}
                  <span>{option.title}</span>
                </Link>
              );
            } else if (option.type === "button") {
              return (
                <button
                  key={index}
                  onClick={option.onClick}
                  className="flex items-center space-x-2"
                >
                  {option.icon}
                  <span>{option.title}</span>
                </button>
              );
            } else {
              return (
                <button
                  key={index}
                  onClick={option.onClick}
                  className="flex items-center space-x-2"
                >
                  {option.icon}
                  <span>{option.title}</span>
                </button>
              );
            }
          })}
        </div>
      </Popover.Panel>
    </Popover>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between py-4 w-full mx-auto">
      <Image src={logo} alt="logo" width={40} height={40} />
      <div className="flex items-center space-x-4">
        <ProfileIcon />
      </div>
    </div>
  );
};

export default Header;
