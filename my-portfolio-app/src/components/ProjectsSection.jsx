import React, { useState, useMemo } from 'react';
import { mockProjects } from '../data/mock';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
 const [activeFilter, setActiveFilter] = useState('All');

 const categories = ['All', 'Website Designs', 'Design Images', 'Projects', 'CS Projects'];

 const filteredProjects = useMemo(() => {
  if (activeFilter === 'All') {
   return mockProjects;
  }
  return mockProjects.filter(project => project.category === activeFilter);
 }, [activeFilter]);

 return (
  <section id="work" className="py-20 px-6">
   <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-normal text-black mb-12 tracking-wide">Selected Work</h2>
   
    {/* Filters */}
    <div className="flex flex-wrap gap-3 mb-12">
     {categories.map((category) => (
      <button
       key={category}
       onClick={() => setActiveFilter(category)}
       className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 ${
        activeFilter === category
         ? 'bg-[#45673c] text-white border border-[#45673c]'
         : 'bg-white text-black border border-gray-300 hover:border-[#45673c]'
       }`}
      >
       {category}
      </button>
     ))}
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {filteredProjects.map((project) => (
      <ProjectCard key={project.id} project={project} />
     ))}
    </div>
   
    {filteredProjects.length === 0 && (
     <div className="text-center py-20">
      <p className="text-gray-500 text-lg">No projects found in this category.</p>
     </div>
    )}
   </div>
  </section>
 );
};

export default ProjectsSection;