interface CategoryHeaderProps {
  id: string;
  name: string;
  description: string;
}

export default function CategoryHeader({ id, name, description }: CategoryHeaderProps) {
  return (
    <div id={id} className="pt-24 pb-8 mb-8 border-b border-brand-border scroll-mt-20">
      <h2 className="text-3xl font-bold text-brand-charcoal mb-4">{name}</h2>
      <p className="text-brand-taupe max-w-3xl text-lg">{description}</p>
    </div>
  );
}
