interface ProjectSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function ProjectSection({ id, title, children }: ProjectSectionProps) {
  return (
    <section id={id} className="py-16 border-b border-gray-100 last:border-b-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
}