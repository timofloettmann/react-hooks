import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';

import useElementSize from './index';

storiesOf('useElementSize', module).add('default', () => {
  const ExampleComponent = () => {
    const ref = useRef(null);
    const size = useElementSize(ref);

    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <div
          style={{
            width: '50%',
            height: '50%',
            backgroundColor: '#000',
          }}
          ref={ref}>
          <span style={{ top: '10px', color: '#FFF' }}>
            Resize your browser window or any of the panels in storybook to see
            the size update
            <br />
            <br />
            Current width: {size.width}
            <br />
            Current height: {size.height}
          </span>
        </div>
      </div>
    );
  };

  return <ExampleComponent />;
});
