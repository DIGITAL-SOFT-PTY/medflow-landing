import { useEffect, useState } from 'react';

export function useCountUp(target, duration = 1400, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started || target === 0) return;
    let startTime = null;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(progress * target);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, started]);

  return count;
}
