import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { mockSocialLinks } from '../data/mock';

const Footer = () => {
 return (
  <footer className="bg-black text-white py-16 px-6">
   <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
     <div>
      <h3 className="text-2xl font-normal mb-4 tracking-wide">Let's Connect</h3>
      <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
       Open to freelance opportunities and collaborations.
      </p>
     </div>
    
     <div>
      <h4 className="text-sm font-normal mb-4 tracking-wider text-gray-400">QUICK LINKS</h4>
      <ul className="space-y-2">
       <li>
        <a href="#work" className="text-sm tracking-wide hover:text-[#609966] transition-colors">
         Work
        </a>
       </li>
       <li>
        <a href="#about" className="text-sm tracking-wide hover:text-[#609966] transition-colors">
         About
        </a>
       </li>
      </ul>
     </div>
    
     <div>
      <h4 className="text-sm font-normal mb-4 tracking-wider text-gray-400">CONNECT</h4>
      <div className="flex gap-4">
       <a
        href={mockSocialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#609966] transition-colors"
        aria-label="LinkedIn"
       >
        <Linkedin size={20} />
       </a>
       <a
        href={mockSocialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#609966] transition-colors"
        aria-label="GitHub"
       >
        <Github size={20} />
       </a>
       <a
        href={`mailto:${mockSocialLinks.email}`}
        className="hover:text-[#609966] transition-colors"
        aria-label="Email"
       >
        <Mail size={20} />
       </a>
      </div>
      <a
       href={`mailto:${mockSocialLinks.email}`}
       className="text-sm text-gray-400 hover:text-[#609966] transition-colors mt-4 block tracking-wide"
      >
       {mockSocialLinks.email}
      </a>
     </div>
    </div>
   
    <div className="border-t border-gray-800 pt-8 text-center">
     <p className="text-sm text-gray-500 tracking-wide">
      © {new Date().getFullYear()} Portfolio. All rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;