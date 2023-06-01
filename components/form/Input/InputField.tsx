import { ComponentProps, FC, InputHTMLAttributes } from "react";
import { Input } from "./Input";
import { Field } from "../Field";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className?: ComponentProps<typeof Field>["className"];
}

export const InputField: FC<Props> = ({ name, label, className, ...rest }) => {
  return (
    <Field name={name} label={label} className={className}>
      <Input {...rest} id={name} />
    </Field>
  );
};
