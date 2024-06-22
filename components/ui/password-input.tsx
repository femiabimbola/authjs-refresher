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
  ({suffix, className, ...props}, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className=" flex gap-1 items-center">
        <Input
          className={className}
          {...props}
          ref={ref}
          type={showPassword ? "text" : "password"}
        />

        {showPassword ? (
          <EyeIcon
            className="select-none"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <EyeOffIcon
            className="select-none"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export {PasswordInput};
