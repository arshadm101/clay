// // components/ImageWithShader.js
// import React, { useState } from 'react';
// import ThreeScene from './ThreeScene';

// const ImageWithShader = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <Image
//         src=""
//         alt="Your Image"
//         className={isHovered ? 'shader-hovered' : ''}
//       />
//       {isHovered && <ThreeScene />}
//     </div>
//   );
// };

// export default ImageWithShader;
