import { ComponentProps, FC } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "../Field";

interface Props extends ComponentProps<typeof Textarea> {
  name: string;
  label: string;
  className?: ComponentProps<typeof Field>["className"];
}

export const TextAreaField: FC<Props> = ({
  name,
  label,
  className,
  ...rest
}) => {
  return (
    <Field name={name} label={label} className={className}>
      <Textarea {...rest} id={name} />
    </Field>
  );
};
