import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}
export const Button: FC<Props> = ({ children, ...rest }) => {
  return (
    <button
      className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-lg hover:bg-pink-600 active:bg-pink-700 focus:outline-none "
      {...rest}
    >
      {children}
    </button>
  );
};
