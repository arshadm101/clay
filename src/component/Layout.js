// components/Layout.js
import React, { useEffect, useRef } from 'react';
import { init } from 'locomotive-scroll';

const Layout = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new init({
        el: scrollRef.current,
        smooth: true,
      });
    }
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default Layout;
