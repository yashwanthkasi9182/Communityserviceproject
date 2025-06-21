import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Droplets, Trees, Leaf, Users, Target, Award } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { projectsData, impactStats } from '@/lib/data';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Community working together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Community Service Projects related to 
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Plantation, Drinking water availability and water facilities, use of chemicals on fruits and vegetables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Measuring success through community transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three comprehensive community service initiatives addressing critical needs
              in water access, environmental restoration, and sustainable agriculture.
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

      {/* Mission Section */}
      {/* <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl mb-6 text-green-100">
                We believe in empowering communities to create sustainable solutions
                for their most pressing challenges. Through collaborative partnerships
                and evidence-based approaches, we work alongside local leaders to
                build lasting change.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <Droplets className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="font-semibold">Clean Water Access</h3>
                </div>
                <div className="text-center">
                  <Trees className="h-12 w-12 mx-auto mb-4 text-green-200" />
                  <h3 className="font-semibold">Environmental Restoration</h3>
                </div>
                <div className="text-center">
                  <Leaf className="h-12 w-12 mx-auto mb-4 text-green-300" />
                  <h3 className="font-semibold">Sustainable Agriculture</h3>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in creating lasting positive impact in communities across India.
            Whether you&apos;re interested in volunteering, partnering, or supporting our work,
            there are many ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-300 font-semibold rounded-lg hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}