import { ComponentProps, FC } from "react";
import { Input } from "@/components/ui/input";
import { Field } from "../Field";

interface Props extends ComponentProps<typeof Input> {
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
