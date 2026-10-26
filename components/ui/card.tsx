export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`shell-surface ${className}`}>{children}</div>;
}
