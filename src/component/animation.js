
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useEffect, React } from 'react';  
import React, { useEffect, React } from 'react';
gsap.registerPlugin(ScrollTrigger);
const animation = ({ children }) => {
  useEffect(() => {
    gsap.from(children, {
      y: 100,
      opacity: 0, 
      duration: 1, 
      scrollTrigger: {
        trigger: children,
        start: 'bottom bottom', 
        end: 'top center',
        toggleActions: 'play none none reset', 
      },
    });
  }, [children]);

  return <div>{children}</div>;
};

export default animation;
