import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const windowInnerWidth = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(windowInnerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return windowWidth;
}

export default useWindowWidth;
