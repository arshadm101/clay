// components/MovingImage.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const MovingImage = () => {
  const cubeRef = useRef();

  // Rotate the cube in the animation loop
  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[5, 5, 5, 5]} />
      <meshStandardMaterial map={new THREE.TextureLoader().load('https://threejs.org/examples/textures/crate.gif')} />
    </mesh>
  );
};

export default MovingImage;
