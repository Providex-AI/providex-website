type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "brand";
  className?: string;
};

const variants = {
  default: "bg-surface text-text-muted border-border",
  success: "bg-success/10 text-success border-success/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  brand: "bg-brand/10 text-brand border-brand/20",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
