"use client";

import {Button} from "@/components/ui/button";
import {FaTwitter} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
// import {signIn} from "@/auth";
import {signIn} from "next-auth/react"; //For client component

const Social = () => {
  const onClick = async (provider: "twitter" | "google") => {
    await signIn(provider);
  };
  return (
    <div className="flex items-center gap-x-2 w-full mt-4">
      <Button
        onClick={() => onClick("google")}
        variant={"outline"}
        className="w-full"
      >
        <FcGoogle className="h-7 w-7" />
      </Button>
      <Button
        onClick={() => onClick("twitter")}
        variant={"outline"}
        className="w-full"
      >
        <FaTwitter className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Social;
