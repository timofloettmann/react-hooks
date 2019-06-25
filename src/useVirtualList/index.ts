import React, { useState, useLayoutEffect } from 'react';
import useScrollPosition from 'src/useScrollPosition';
import useElementSize from 'src/useElementSize';

const useVirtualList = (
  containerRef: React.RefObject<any>,
  items: Array<any>,
  itemHeight: number
) => {
  const containerSize = useElementSize(containerRef);
  const scrollPosition = useScrollPosition(containerRef);

  const [{ firstIndex, lastIndex }, updateIndexes] = useState({
    firstIndex: 0,
    lastIndex: -1,
  });

  const itemCount = items.length;
  const offset = Math.floor(scrollPosition / itemHeight);

  useLayoutEffect(() => {
    if (!containerSize.height) {
      return;
    }

    const itemsInScreen = Math.ceil(containerSize.height / itemHeight);
    const firstIndex = Math.min(itemCount - itemsInScreen, offset);
    const lastIndex = firstIndex + itemsInScreen;

    updateIndexes({
      firstIndex: Math.max(0, firstIndex - 2),
      lastIndex: Math.min(itemCount, lastIndex + 2),
    });
  }, [containerSize.height, offset, itemCount]);

  const listStyles = {
    boxSizing: 'border-box',
    height: `${itemCount * itemHeight}px`,
    paddingTop: `${firstIndex * itemHeight}px`,
  };

  if (lastIndex === -1) {
    return { listStyles, items: [] };
  }

  return { listStyles, items: items.slice(firstIndex, lastIndex) };
};

export default useVirtualList;
