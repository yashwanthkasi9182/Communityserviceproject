'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'problem', title: 'Problem Statement' },
  { id: 'awareness', title: 'Awareness Campaign' },
  { id: 'alternatives', title: 'Alternatives' },
  { id: 'surveys', title: 'Surveys & Interviews' },
  { id: 'outcomes', title: 'Outcomes & Learnings' },
  { id: 'gallery', title: 'Photo Gallery' }
];

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === section.id
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}