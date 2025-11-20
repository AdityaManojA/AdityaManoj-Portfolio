import React from 'react';
import { Card, CardContent } from './ui/card';

const ProjectCard = ({ project }) => {
 return (
  <Card className="group overflow-hidden border-gray-200 hover:border-[#45673c] transition-all duration-300">
   <div className="aspect-[4/3] overflow-hidden bg-gray-100">
    <img
     src={project.image}
     alt={project.title}
     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
   </div>
   <CardContent className="p-6">
    <div className="flex items-center justify-between mb-2">
     <span className="text-xs tracking-wider text-gray-500">{project.category}</span>
     <span className="text-xs tracking-wider text-gray-400">{project.year}</span>
    </div>
    <h3 className="text-xl font-normal text-black mb-2 tracking-wide">
     {project.title}
    </h3>
    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
     {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
     {project.tags.map((tag, index) => (
      <span
       key={index}
       className="text-xs px-3 py-1 bg-gray-100 text-gray-700 tracking-wide"
      >
       {tag}
      </span>
     ))}
    </div>
   </CardContent>
  </Card>
 );
};

export default ProjectCard;