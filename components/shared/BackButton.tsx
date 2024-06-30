"use client";

import {Url} from "url";
import {Button} from "../ui/button";
import Link from "next/link";

interface CardWrapperProps {
  footerLabel: string;
  footerLink: String;
}

const BackButton = ({footerLabel, footerLink}: CardWrapperProps) => {
  return (
    <Button
      variant={"link"}
      className="font-normal w-full"
      size="sm"
      asChild
    >
      <Link href={footerLink}> {footerLabel} </Link>
    </Button>
  );
};

export default BackButton;
