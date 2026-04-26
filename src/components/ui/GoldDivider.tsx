export default function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`h-0.5 w-16 bg-brand-gold ${className}`} />
  );
}
