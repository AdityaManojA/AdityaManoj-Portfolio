import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { mockSocialLinks } from '../data/mock';

const Header = () => {
 return (
  <header className="fixed top-0 left-0 right-0 border-b border-gray-200 z-50">
   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <div className="text-2xl font-normal tracking-wide">
     <span className="Header-port">Portfolio</span>
    </div>
   
    <nav className="flex items-center gap-6">
     <a
      href="#work"
      className="text-black text-sm tracking-wide transition-colors hover:text-[#043222]"
     >
      Work
     </a>
     <a
      href="#about"
      className="text-black text-sm tracking-wide transition-colors hover:text-[#043222]"
     >
      About
     </a>
     <div className="flex items-center gap-4 ml-4">
      <a
       href={mockSocialLinks.linkedin}
       target="_blank"
       rel="noopener noreferrer"
       className="text-black transition-colors hover:text-[#043222]"
       aria-label="LinkedIn"
      >
       <Linkedin size={20} />
      </a>
      <a
       href={mockSocialLinks.github}
       target="_blank"
       rel="noopener noreferrer"
       className="text-black transition-colors hover:text-[#043222]"
       aria-label="GitHub"
      >
       <Github size={20} />
      </a>
      <a
       href={`mailto:${mockSocialLinks.email}`}
       className="text-black transition-colors hover:text-[#043222]"
       aria-label="Email"
      >
       <Mail size={20} />
      </a>
     </div>
    </nav>
   </div>
  </header>
 );
};

export default Header;