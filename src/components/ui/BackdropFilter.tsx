interface Props {
  children: React.ReactNode;
  className?: string;
}

const BackdropFilter = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-950/40 backdrop-blur`}
    >
      {children}
    </div>
  );
};

export default BackdropFilter;
