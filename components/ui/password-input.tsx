import * as React from "react";

import {cn} from "@/lib/utils";
import {Input} from "./input";
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {InputSuffix} from "./input-suffix";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({className, ...props}, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className=" flex gap-1 items-center">
        <InputSuffix
          className={className}
          {...props}
          ref={ref}
          type={showPassword ? "text" : "password"}
          suffix={showPassword ? <EyeIcon /> : <EyeOffIcon />}
        />
        {/* {suffix={<EyeIcon />}} */}
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export {PasswordInput};
