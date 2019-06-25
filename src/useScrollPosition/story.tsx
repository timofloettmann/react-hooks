import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';

import useScrollPosition from './index';

storiesOf('useScrollPosition', module).add('default', () => {
  const ExampleComponent = () => {
    const ref = useRef(null);
    const scrollPosition = useScrollPosition(ref);

    return (
      <div style={{ height: '400px', overflowY: 'scroll' }} ref={ref}>
        <div
          style={{
            display: 'flex',
            width: '200px',
            height: '3000px',
            backgroundColor: '#000',
          }}>
          <span style={{ position: 'fixed', top: '10px', color: '#FFF' }}>
            Scroll this!
            <br />
            Position: {scrollPosition}
          </span>
        </div>
      </div>
    );
  };

  return <ExampleComponent />;
});
