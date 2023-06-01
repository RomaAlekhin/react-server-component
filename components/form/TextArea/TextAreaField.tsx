import { ComponentProps, FC, TextareaHTMLAttributes } from "react";
import { Field } from "../Field";
import { TextArea } from "./TextArea";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
      <TextArea {...rest} id={name} />
    </Field>
  );
};
