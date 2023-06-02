import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = (props) => {
  return (
    <input
      {...props}
      className="block w-full px-4 py-2 mt-2 text-card bg-card-foreground border rounded-md focus:border-accent focus:outline-none focus:ring"
    />
  );
};
