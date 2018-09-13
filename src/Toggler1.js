import React from 'react';
import { withToggle } from './toggle-hoc';

const Toggler = ({ on, toggle }) => (
  <button onClick={toggle}>{on ? 'Turn off' : 'Turn on'}</button>
);

export default withToggle(Toggler);