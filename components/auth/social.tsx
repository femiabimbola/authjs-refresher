import {Button} from "@/components/ui/button";
import {FaGoogle} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex gap-x-2">
      <Button onClick={() => {}}>
        <FaGoogle className="h-5 w-5" />
      </Button>
      <Button>
        <FaTwitter className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
