import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = (props) => {
  return (
    <input
      {...props}
      className="block w-full px-4 py-2 mt-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
    />
  );
};
