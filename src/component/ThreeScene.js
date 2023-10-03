// import React, { useRef, useEffect } from 'react';
// import { Canvas } from 'react-three-fiber';
// import * as THREE from 'three';
// import { gsap } from 'gsap';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// const ThreeScene = () => {
//   const sceneRef = useRef();
//   const curveRef = useRef();
//   const ball1Ref = useRef();
//   const ball2Ref = useRef();

//   useEffect(() => {
//     const scene = sceneRef.current;
//     const curve = curveRef.current;
//     const ball1 = ball1Ref.current;
//     const ball2 = ball2Ref.current;

//     // Initialize Three.js scene
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     scene.appendChild(renderer.domElement);

//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     const controls = new OrbitControls(camera, renderer.domElement);

//     // Create a moving curve
//     const curvePath = new THREE.CatmullRomCurve3([
//       new THREE.Vector3(-2, 0, 0),
//       new THREE.Vector3(0, 2, 0),
//       new THREE.Vector3(2, 0, 0),
//     ]);
//     const points = curvePath.getPoints(50);
//     curve.setFromPoints(points);

//     const curveGeometry = new THREE.BufferGeometry().setFromPoints(points);
//     const curveMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
//     const curveObject = new THREE.Line(curveGeometry, curveMaterial);
//     scene.add(curveObject);

//     // Create two balls
//     const ballGeometry = new THREE.SphereGeometry(0.1, 32, 32);
//     const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//     const ball1Object = new THREE.Mesh(ballGeometry, ballMaterial);
//     const ball2Object = new THREE.Mesh(ballGeometry, ballMaterial);

//     scene.add(ball1Object);
//     scene.add(ball2Object);

//     // Animate the balls along the curve using GSAP
//     gsap.to(ball1Object.position, {
//       duration: 4,
//       repeat: -1,
//       yoyo: true,
//       motionPath: {
//         path: curvePath,
//         pathLength: 4,
//       },
//     });

//     gsap.to(ball2Object.position, {
//       duration: 4,
//       repeat: -1,
//       yoyo: true,
//       motionPath: {
//         path: curvePath,
//         pathLength: 4,
//         align: curveObject,
//       },
//     });

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Cleanup
//     return () => {
//       scene.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={sceneRef} />;
// };

// export default ThreeScene;
