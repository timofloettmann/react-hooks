import React from 'react';
import { storiesOf } from '@storybook/react';
import { useIntersectionObserver } from './index';

storiesOf('useIntersectionObserver', module).add('default', () => {
  const ExampleComponent = () => {
    const ref = React.useRef(null);
    const isInViewport = useIntersectionObserver(ref);

    console.log(isInViewport ? 'In Viewport' : 'Out of Viewport');

    return (
      <React.Fragment>
        <span>
          {`Scroll down to see an <img> being rendered once it gets into the
          viewport`}
        </span>
        <div
          ref={ref}
          style={{
            position: 'absolute',
            top: '1000px',
          }}>
          {isInViewport ? (
            <img
              style={{
                width: '100px',
                height: '100px',
              }}
              src={'http://replygif.net/i/925.gif'}
            />
          ) : (
            <div
              style={{
                width: '100px',
                height: '100px',
              }}
            />
          )}
        </div>
      </React.Fragment>
    );
  };

  return <ExampleComponent />;
});
