import Image from "next/image";
import Button from "@/components/atoms/button";
import googleicon from "@/assets/svg/google.svg";

const GoogleButton = () => {
  return (
    <Button className="bg-white text-gray-600 flex my-2 items-center justify-center gap-2">
      <Image src={googleicon} alt="google" width={20} height={20} />
      <span>Sign up with Google</span>
    </Button>
  );
};

export default GoogleButton;
