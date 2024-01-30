import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Col, Row } from 'react-bootstrap';
import styles from '../styles/GridSlider.module.css'


function GridSlider() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('mouseleave', handleMouseUp);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed here
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="grid-slider" ref={sliderRef}>
      <div className="slide">1</div>
      <div className="slide">2</div>
      <div className="slide">3</div>
      <div className="slide">4</div>
      <div className="slide">5</div>
      <div className="slide">6</div>
      {/* Add more slides as needed */}
    </div>
  );
}

export default GridSlider;
