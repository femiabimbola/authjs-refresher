import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface CardWrapperProps {
  children: React.ReactNode;
  title: String;
  secondText?: String;
  href: String;
  footerLabel: String;
}

const CardWrapper = ({
  children,
  title,
  secondText,
  href,
  footerLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription>{secondText}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-center">
        <Link href={href}> {footerLabel}</Link>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
