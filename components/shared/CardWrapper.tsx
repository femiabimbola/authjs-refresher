import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Url} from "url";
import BackButton from "@/components/shared/BackButton";

interface CardWrapperProps {
  children: React.ReactNode;
  title: String;
  secondText?: String;
  footerLabel: string;
  footerLink: string;
}

const CardWrapper = ({
  children,
  title,
  secondText,
  footerLabel,
  footerLink,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription>{secondText}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-center">
        <BackButton
          footerLabel={footerLabel}
          footerLink={footerLink}
        />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
