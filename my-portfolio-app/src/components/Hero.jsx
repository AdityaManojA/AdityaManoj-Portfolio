import React from 'react';

const Hero = () => {
 return (
  <section className="pt-32 pb-20 px-6">
   <div className="max-w-7xl mx-auto">
    <div className="max-w-3xl">
     <h1 className="text-6xl font-normal tracking-tight text-black mb-6">
      UI/UX Designer
      <br />
      <span className="text-[#304e33]">Engineer</span>
      <br/>
      <span className="text-[#609966]">Developer</span>
     </h1>
     <p className="text-xl text-gray-600 tracking-wide leading-relaxed">
      Crafting intuitive digital experiences through thoughtful design and clean code.
      Specializing in web applications, user interfaces, and scalable systems.
     </p>
    </div>
   </div>
  </section>
 );
};

export default Hero;