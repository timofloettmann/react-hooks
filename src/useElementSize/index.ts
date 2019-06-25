import React, { useLayoutEffect } from 'react';

type Dimensions = {
  width: number;
  height: number;
};

const getSize = (el: any) => {
  if (!el) {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
};

const useElementSize = <T = any>(ref: React.RefObject<T>): Dimensions => {
  let [componentSize, setComponentSize] = React.useState(() =>
    getSize(ref ? ref.current : {})
  );

  const handleResize = () => {
    const size = getSize(ref.current);
    if (
      size.width !== componentSize.width ||
      size.height !== componentSize.height
    ) {
      setComponentSize(size);
    }
  };

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    handleResize();
    const w = window as { ResizeObserver?: any };

    if (typeof w.ResizeObserver === 'function') {
      let resizeObserver = new w.ResizeObserver(handleResize);
      resizeObserver.observe(ref.current);

      return () => {
        resizeObserver.disconnect(ref.current);
        resizeObserver = null;
      };
    }
    document.addEventListener('resize', handleResize);

    return () => document.removeEventListener('resize', handleResize);
  }, [ref.current]);

  return componentSize;
};

export default useElementSize;
