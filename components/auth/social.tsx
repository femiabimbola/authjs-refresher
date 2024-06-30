import {Button} from "@/components/ui/button";
import {FaTwitter} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

const Social = () => {
  return (
    <div className="flex items-center gap-x-2 w-full mt-4">
      <Button
        onClick={() => {}}
        variant={"outline"}
        className="w-full"
      >
        <FcGoogle className="h-7 w-7" />
      </Button>
      <Button
        variant={"outline"}
        className="w-full"
      >
        <FaTwitter className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Social;
