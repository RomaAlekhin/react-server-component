import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Content: FC<Props> = ({ children, className }) => {
  return (
    <main
      className={classNames(
        className,
        "mx-auto max-w-7xl py-6 px-3 sm:px-6 lg:px-8"
      )}
    >
      {children}
    </main>
  );
};
