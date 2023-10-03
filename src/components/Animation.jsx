import React, { useEffect,useState } from 'react';
import gsap, { Circ,Expo, Power3 } from 'gsap';


const Animation = () => {
   
  useEffect(() => {

   
    

    const elements = document.querySelectorAll('.reveal');

    elements.forEach(function (elem) {
      if (!elem.classList.contains('classes-added')) {
        const parent = document.createElement('span');
        const child = document.createElement('span');

        parent.classList.add('parent');
        child.classList.add('child');

        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML = '';
        elem.appendChild(parent);

        elem.classList.add('classes-added'); // Add a marker class to prevent duplication
      }
    });

    var tl = gsap.timeline();
    tl.from(".child span",{
        x: 100,
        duration:1.6,
        stagger: .2,
        
        ease:Power3.easeInOut
        
    }).to(".parent .child",{
        y: "-100%",
        duration:1,
        
        ease:Circ.easeInOut
        
    }).to("#loader",{
        height: 0,
        duration:1,
        
        ease:Circ.easeInOut
        
    })

    
  }, []); // Run this effect once on mount

  return (
    <div className='main w-screen h-full'>
      <div id='loader' className='w-screen h-screen bg-[#111] text-white'>
        <div className='topheading text-center absolute top-[5%] left-[50%] translate-x-[-50%] translate-y-0 text-[11px]'>
          <h5 className='reveal'>Design Portfolio</h5>
          <h5 className='reveal'>&copy; 2023</h5>
        </div>

        <h1 className='reveal overflow-x-hidden w-screen flex justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:text-5xl font-medium text-3xl'>
          <span >Anish</span> <span className='font-container text-pink-600'>Kumar</span> <span>is</span> <span>a</span>
        </h1>
      </div>
      
      
    </div>
  );
};

export default Animation;
