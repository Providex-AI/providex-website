type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
};

export function SectionWrapper({
  children,
  className = "",
  dark = false,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${
        dark ? "bg-navy text-white" : "bg-surface"
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
