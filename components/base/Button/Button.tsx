import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}
export const Button: FC<Props> = ({ children, ...rest }) => {
  return (
    <button
      className="px-6 py-2 leading-5 text-primary transition-colors duration-200 transform bg-primary-foreground rounded-lg focus:outline-none "
      {...rest}
    >
      {children}
    </button>
  );
};
