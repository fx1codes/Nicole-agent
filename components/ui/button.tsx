type ButtonVariant = "primary" | "secondary";

export function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
}) {
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
