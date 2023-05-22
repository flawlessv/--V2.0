import { useRef, useEffect, useState } from 'react';

export default function LazyImage({ src, alt }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return (
    <img
      ref={ref}
      src={isVisible ? src : ''}
      alt={alt}
    />
  );
}
