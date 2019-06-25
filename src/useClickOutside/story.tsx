import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';

import useClickOutside from './index';

storiesOf('useClickOutside', module).add('default', () => {
  const ExampleComponent = () => {
    const ref = useRef(null);
    useClickOutside(ref, () => console.log('clicked outside'));

    return (
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          width: '300px',
          height: '300px',
          backgroundColor: '#000',
        }}
        ref={ref}
        onClick={() => console.log('clicked inside')}
      />
    );
  };

  return <ExampleComponent />;
});
