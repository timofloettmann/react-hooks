import React, { useEffect, useCallback } from 'react';

const contains = (node: any, other: any) =>
  node && (node === other || !!(node.compareDocumentPosition(other) & 16));

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void
) => {
  const handleClick = useCallback(
    (e: any) => {
      if (!contains(ref.current, e.target)) {
        onClickOutside();
      }
    },
    [onClickOutside]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  });
};

export default useClickOutside;
