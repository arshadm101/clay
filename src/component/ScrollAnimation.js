import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin

const ScrollAnimation = ({ children }) => {
  const animationRef = useRef(null);
  useEffect(() => {
    const animationElement = animationRef.current;
    gsap.from(animationElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: animationElement,
        start: 'top 80%', // Adjust this value as needed
        end: 'top 20%',   // Adjust this value as needed
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={animationRef}>
      {children}
    </div>
    
  );
};

export default ScrollAnimation;
