type CardProps = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export function Card({ children, className = "", dark = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border ${
        dark
          ? "bg-navy-light border-white/10 text-white"
          : "bg-white border-border"
      } p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
