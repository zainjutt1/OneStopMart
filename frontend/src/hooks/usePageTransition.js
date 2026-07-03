import { useEffect, useState } from 'react';

function usePageTransition() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(timer);
  }, []);

  return visible;
}

export default usePageTransition;
