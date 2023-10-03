import Link from 'next/link';
import Image from 'next/image';
import { Container, Col, Row } from 'react-bootstrap';
import React, { useRef, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const CalltoActionthree = () => {
    
    const canvasRef = useRef();

    useEffect(() => {
      const canvas = canvasRef.current;
      // Initialize Three.js scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
  
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      canvas.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      // Create a custom curve
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2, 0, 0),
        new THREE.Vector3(0, 2, 0),
        new THREE.Vector3(2, 0, 0),
      ]);

      const points = curve.getPoints(50);
      const curveGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const curveMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      const curveObject = new THREE.Line(curveGeometry, curveMaterial);
      scene.add(curveObject);

      // Create two balls
      const ballGeometry = new THREE.SphereGeometry(0.1, 32, 32);
      const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const ball1Object = new THREE.Mesh(ballGeometry, ballMaterial);
      const ball2Object = new THREE.Mesh(ballGeometry, ballMaterial);
  
      scene.add(ball1Object);
      scene.add(ball2Object);
  
      // Animate the balls along the curve using GSAP
      gsap.to(ball1Object.position, {
        duration: 4,
        repeat: -1,
        yoyo: true,
        motionPath: {
          path: curve,
          pathLength: 4,
        },
      });
  
      gsap.to(ball2Object.position, {
        duration: 4,
        repeat: -1,
        yoyo: true,
        motionPath: {
          path: curve,
          pathLength: 4,
          align: curveObject,
        },
      });
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
  
      animate();
  
      // Cleanup
      return () => {
        canvas.removeChild(renderer.domElement);
      };
    }, []);
   
    return (
      <>
       <div ref={canvasRef} />
      </>
    );
  };
  
  export default CalltoActionthree;