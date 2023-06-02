import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
}

export const FormCard: FC<Props> = ({ title, children }) => {
  return (
    <section className="max-w-xl w-10/12 p-6 mx-auto bg-card-foreground rounded-xl shadow-md">
      <h1 className="text-xl font-bold text-card capitalize">{title}</h1>
      {children}
    </section>
  );
};
