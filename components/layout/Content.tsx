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
        "mx-auto max-w-7xl pt-6 pb-20 px-3 md:pb-6 sm:px-6 lg:px-8"
      )}
    >
      {children}
    </main>
  );
};
