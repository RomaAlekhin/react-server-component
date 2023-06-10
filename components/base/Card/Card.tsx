import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  className?: string;
  children?: ReactNode;
}

export const Card: FC<Props> = ({ title, className, children }) => {
  return (
    <div
      className={classNames(
        "py-6 px-4 bg-card-foreground rounded-lg",
        className
      )}
    >
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  );
};
