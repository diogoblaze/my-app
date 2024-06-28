import React, { useState, useEffect } from 'react';
import Xarrow from 'react-xarrows';

const ResponsiveXarrows = () => {
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0 or a default width

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768; // Assuming 768px as the breakpoint for mobile devices

  return (
    <>
      {isMobile ? (
        // Mobile settings
        <>
          <Xarrow start="block1" end="block2" startAnchor="bottom" endAnchor="top" color="white"/>
          <Xarrow start="block2" end="block3" startAnchor="bottom" endAnchor="top" color="white"/>
          <Xarrow start="block3" end="block4" startAnchor="bottom" endAnchor="top" color="white"/>
        </>
      ) : (
        // Default settings
        <>
          <Xarrow start="block1" end="block2" startAnchor="right" endAnchor="top" color="white"/>
          <Xarrow start="block2" end="block3" startAnchor="left" endAnchor="top" color="white"/>
          <Xarrow start="block3" end="block4" startAnchor="right" endAnchor="top" color="white"/>
        </>
      )}
    </>
  );
};

export default ResponsiveXarrows;