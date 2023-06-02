import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: React.FC<Props> = (props) => {
  return (
    <textarea
      {...props}
      className="block w-full px-4 py-2 mt-2 text-card bg-card-foreground border rounded-md focus:border-accent focus:outline-none focus:ring"
    ></textarea>
  );
};
