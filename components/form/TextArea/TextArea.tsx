import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: React.FC<Props> = (props) => {
  return (
    <textarea
      {...props}
      className="block w-full px-4 py-2 mt-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
    ></textarea>
  );
};
