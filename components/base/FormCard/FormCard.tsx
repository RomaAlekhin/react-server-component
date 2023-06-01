import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
}

export const FormCard: FC<Props> = ({ title, children }) => {
  return (
    <section className="max-w-xl w-10/12 p-6 mx-auto bg-gray-800 rounded-xl shadow-md mt-20">
      <h1 className="text-xl font-bold text-white capitalize">{title}</h1>
      {children}
    </section>
  );
};
