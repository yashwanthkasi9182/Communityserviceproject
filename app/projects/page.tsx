import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <main>
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Community Service Projects</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Explore our comprehensive community development initiatives that address
              critical needs in water access, environmental restoration, and sustainable agriculture.
              Each project is designed with community participation at its core, ensuring
              lasting impact and local ownership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                slug={project.slug}
                image={project.heroImage}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}