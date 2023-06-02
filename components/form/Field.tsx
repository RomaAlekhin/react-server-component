interface Props {
  name: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
}

export const Field: React.FC<Props> = ({
  name,
  label,
  className,
  children,
}) => {
  return (
    <div className={className}>
      <label className="text-card" htmlFor={name}>
        {label}
      </label>
      {children}
    </div>
  );
};
