import React from 'react';
import { storiesOf } from '@storybook/react';
import useVirtualList from './index';

storiesOf('useVirtualList', module).add('default', () => {
  const items = Array.apply(null, { length: 120000 } as any).map(
    Number.call,
    Number
  );

  const ITEM_HEIGHT = 50;

  const ListItem = ({ children }: any) => {
    return <li style={{ height: `${ITEM_HEIGHT}px` }}>{children}</li>;
  };

  const ExampleComponent = () => {
    const containerRef = React.useRef(null);
    const { listStyles, items: virtualItems } = useVirtualList(
      containerRef,
      items,
      ITEM_HEIGHT
    );

    return (
      <div
        ref={containerRef}
        style={{
          width: '300px',
          height: '90vh',
          border: '1px solid #000',
          overflow: 'scroll',
        }}>
        <ul style={listStyles as any}>
          {virtualItems.map(item => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ul>
      </div>
    );
  };

  return <ExampleComponent />;
});
