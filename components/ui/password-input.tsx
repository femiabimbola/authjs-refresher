import * as React from "react";

import {cn} from "@/lib/utils";
import {Input} from "./input";
import {EyeIcon} from "lucide-react";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({suffix, className, ...props}, ref) => {
    return (
      <div>
        suffix={<EyeIcon />}
        <Input
          className={className}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export {PasswordInput};
