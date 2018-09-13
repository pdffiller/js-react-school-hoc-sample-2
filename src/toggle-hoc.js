import React from 'react';

export function withToggle(Component) {
  class Toggle extends React.Component {
    static displayName = (
      `withToggle(${Component.displayName || Component.name})`
    )

    state = {
      on: false,
    }

    toggle = () => this.setState(
      ({ on }) => ({ on: !on })
    )

    render() {
      const { on } = this.state;
      return (
        <Component {...this.props} on={on} toggle={this.toggle} />
      );
    }
  }

  return Toggle;
}
