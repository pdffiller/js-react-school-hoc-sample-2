import React from 'react';
import { withToggle } from './toggle-hoc';

const Toggler = ({ on, toggle }) => (
  <React.Fragment>
    <button
      onClick={on ? toggle : null}
      style={{ fontWeight: on ? 'normal' : 'bold' }}
    >
      Off
    </button>
    <button
      onClick={!on ? toggle : null}
      style={{ fontWeight: on ? 'bold' : 'normal' }}
    >
      On
    </button>
  </React.Fragment>
);

export default withToggle(Toggler);