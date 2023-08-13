import { Button } from 'jx-dumi-ui';
import React from 'react';

const App: React.FC = () => (
  <>
    <Button
      type="primary"
      onClick={(e) => {
        console.log('e', e);
      }}
    >
      Primary Button
    </Button>
    {/* <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button> */}
  </>
);

export default App;
