import { useEffect, useState } from 'react';

function useResize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function currentSize() {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', currentSize);

    return () => window.removeEventListener('resize', currentSize);
  }, []);

  return size;
}

export default useResize;
