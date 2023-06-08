import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Content: FC<Props> = ({ children }) => {
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 px-3 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
};
