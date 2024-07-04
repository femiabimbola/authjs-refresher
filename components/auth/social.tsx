"use client";

import {Button} from "@/components/ui/button";
import {FaDiscord} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
// import {signIn} from "@/auth";
import {signIn} from "next-auth/react"; //For client component

const Social = () => {
  const onClick = async (provider: "discord" | "google") => {
    await signIn(provider, {redirectTo: "/dashboard"});
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
        onClick={() => onClick("discord")}
        variant={"outline"}
        className="w-full"
      >
        <FaDiscord className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Social;
