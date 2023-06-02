import { FC } from "react";

interface Props {
  title?: string;
}

export const Header: FC<Props> = ({ title }) => {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          {title}
        </h1>
      </div>
    </header>
  );
};
