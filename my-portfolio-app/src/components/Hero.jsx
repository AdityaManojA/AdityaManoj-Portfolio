import React from 'react';

import myPhoto from '../assets/pfp.png'; 

const Hero = () => {
 return (
  <section className="pt-32 pb-20 px-6">
   <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            

      <div className="max-w-3xl">
       <h1 className="text-6xl font-normal tracking-tight text-black mb-6">
        UI/UX Designer,
        <br />
        <span className="text-[#45673c]">Engineer &</span>
        <br />
        <span className="text-[#043222]">Developer</span>
        
       </h1>
       <p className="text-xl text-gray-600 tracking-wide leading-relaxed">
        Crafting intuitive digital experiences through thoughtful design and clean code.
        Specializing in web applications, user interfaces, and scalable systems.
       </p>
      </div>

           {/* <div className="flex justify-center lg:justify-end">
 
                <div className="w-full max-w-sm md:max-w-md"> 
                    <img 
                        src={myPhoto} 
                        alt="Aditya Manoj A" 
                      
                        className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105" 
                    />
                </div>
            </div> */}

    </div>
   </div>
  </section>
 );
};

export default Hero;