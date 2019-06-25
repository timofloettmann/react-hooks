import React from 'react';

const useScrollPosition = (ref: React.RefObject<any>): number => {
  const [position, setPosition] = React.useState<number>(0);

  const updatePosition = React.useCallback(() => {
    setPosition(ref.current.scrollTop);
  }, [setPosition]);

  React.useEffect(() => {
    ref.current.addEventListener('scroll', updatePosition);
    return () => ref.current.removeEventListener('scroll', updatePosition);
  }, [ref.current, updatePosition]);

  React.useEffect(() => {
    ref.current.addEventListener('resize', updatePosition);
    return () => ref.current.removeEventListener('resize', updatePosition);
  }, [ref.current, updatePosition]);

  return position;
};

export default useScrollPosition;
