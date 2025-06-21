import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, MapPin, Users, Target, CheckCircle, Quote, TrendingUp } from 'lucide-react';
import ProjectSection from '@/components/ProjectSection';
import SectionNavigation from '@/components/SectionNavigation';
import PhotoGallery from '@/components/PhotoGallery';
import { projectsData } from '@/lib/data';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{project.description}</p>
          </div>
        </div>
      </section>

      <SectionNavigation />

      {/* Project Overview */}
      <ProjectSection id="overview" title="Project Overview">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {project.overview.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                <p className="text-gray-600">{project.overview.timeline}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">{project.overview.location}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Beneficiaries</h4>
                <p className="text-gray-600">{project.overview.beneficiaries}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="h-6 w-6 text-green-600 mr-2" />
              Key Objectives
            </h3>
            <ul className="space-y-3">
              {project.overview.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ProjectSection>

      {/* Problem Statement */}
      <ProjectSection id="problem" title="Problem Statement">
        <div className="bg-red-50 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-red-900 mb-4">Core Issue</h3>
          <p className="text-red-800 text-lg leading-relaxed">{project.problemStatement.issue}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Needs</h3>
            <ul className="space-y-3">
              {project.problemStatement.communityNeeds.map((need, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{need}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Situation</h3>
            <p className="text-gray-700 mb-4">{project.problemStatement.currentSituation}</p>
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4">
              <p className="text-orange-800 font-medium">{project.problemStatement.urgency}</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* Awareness Campaign */}
      <ProjectSection id="awareness" title="Awareness Campaign">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Initiatives</h3>
              <div className="space-y-3">
                {project.awarenessCampaign.initiatives.map((initiative, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{initiative}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Target Audience</h3>
              <p className="text-blue-800">{project.awarenessCampaign.targetAudience}</p>
              <div className="mt-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{project.awarenessCampaign.reach}</div>
                <div className="text-blue-700">People Reached</div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Methods Used</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.awarenessCampaign.methods.map((method, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="text-gray-700 font-medium">{method}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Materials Developed</h3>
              <ul className="space-y-2">
                {project.awarenessCampaign.materials.map((material, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-purple-600 rounded-full mr-3" />
                    <span className="text-gray-700">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* Alternatives Suggested */}
      <ProjectSection id="alternatives" title="Alternatives Suggested">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.alternatives.solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-green-800 text-sm"><strong>Implementation:</strong> {solution.implementation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Methods Promoted</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {project.alternatives.naturalMethods.map((method, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{method}</span>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700"><strong>Implementation Guidance:</strong> {project.alternatives.guidance}</p>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* Surveys & Interviews */}
      <ProjectSection id="surveys" title="Surveys & Interviews">
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Methodology</h3>
            <p className="text-gray-700 leading-relaxed">{project.surveys.methodology}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Community Feedback</h3>
              <div className="space-y-6">
                {project.surveys.responses.map((response, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <Quote className="h-6 w-6 text-blue-600 mb-3" />
                    <p className="text-gray-800 italic mb-4">"{response.response}"</p>
                    <p className="text-blue-700 font-semibold">— {response.respondent}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Insights</h3>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <ul className="space-y-3">
                  {project.surveys.insights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Analysis Summary</h4>
                <p className="text-green-800">{project.surveys.analysis}</p>
              </div>
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* Outcomes & Learnings */}
      <ProjectSection id="outcomes" title="Outcomes & Learnings">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.outcomes.results.map((result, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{result.metric}</div>
                <div className="text-gray-600 text-sm">{result.improvement}</div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Impact</h3>
              <ul className="space-y-3">
                {project.outcomes.impact.map((impact, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Learnings</h3>
              <ul className="space-y-3">
                {project.outcomes.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Recommendations for Future</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.outcomes.recommendations.map((recommendation, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-700">{recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ProjectSection>

      {/* Photo Gallery */}
      <ProjectSection id="gallery" title="Photo Gallery">
        <PhotoGallery images={project.gallery} />
      </ProjectSection>
    </main>
  );
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}