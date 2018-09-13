import React from 'react';

const getDisplayName = ({ displayName, name }) => (
  displayName || name
);

export const mapProps = mapper => Component => Object.assign(
  props => <Component {...mapper(props)} />,
  {
    displayName: `mapProps(${getDisplayName(Component)})`,
  }
);

export const mapProps2 = mapper => Component => {
  const NewComponent = props => <Component {...mapper(props)} />;
  NewComponent.displayName = `mapProps(${getDisplayName(Component)})`;
  return NewComponent;
};
