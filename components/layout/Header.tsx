import { FC, ReactNode } from "react";

interface Props {
  title: string;
  action?: ReactNode;
}

export const Header: FC<Props> = ({ title, action }) => {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          {title}
        </h1>
        {action}
      </div>
    </header>
  );
};
