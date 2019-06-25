import React from 'react';

const defaultOptions = {
  root: null, // falls back to browser viewport
  margin: '0px',
  threshold: 0,
};

export const useIntersectionObserver = (
  ref: React.RefObject<any>,
  options = {}
) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const observerOptions = Object.assign({}, defaultOptions, options);
  const observer = new IntersectionObserver(entries => {
    const entry = entries.shift();
    if (!entry) {
      return;
    }

    setIsVisible(entry.isIntersecting);
  }, observerOptions);

  React.useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return isVisible;
};
