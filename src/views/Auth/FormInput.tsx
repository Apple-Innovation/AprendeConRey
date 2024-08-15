import type { User } from "@/app/userInitialState";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import React from "react";

export interface FormInputProps {
  label?: React.HTMLAttributes<HTMLLabelElement>["children"];
  inputType?: React.HTMLInputTypeAttribute;
  inputId?: keyof User;
  inputPlaceholder?: string;
  inputAutoComplete?: React.HTMLInputAutoCompleteAttribute;
  error: string | undefined;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label = "",
      inputType = "text",
      inputId = "username",
      inputPlaceholder = "",
      inputAutoComplete = "username",
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor={inputId} className="dark:text-gray-200 text-gray-800">
          {label}
        </Label>
        <Input
          type={inputType}
          id={inputId}
          placeholder={inputPlaceholder}
          autoComplete={inputAutoComplete}
          className="min-w-80 aria-[errormessage]:border-red-500"
          aria-errormessage={error}
          {...props}
          ref={ref}
        />
        <p
          className="invisible aria-[errormessage]:visible text-xxs text-red-500 h-2"
          aria-errormessage={error}
        >
          {error}
        </p>
      </div>
    );
  }
);
