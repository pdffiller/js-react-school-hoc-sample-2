import React, { Component } from 'react';
import { mapProps } from './map-props-hoc';
import Toggler1 from './Toggler1';
import Toggler2 from './Toggler2';


class Header extends React.Component {
  render() {
    const { children, style } = this.props;
    return (
      <h1 style={style}>{children}</h1>
    );
  }
}

const Content = ({ children, style }) => (
  <p className="content" style={style}>
    {children}
  </p>
);

const withStyle = style => Component => {
  class NewComponent extends React.Component {
    static displayName = (
      `withStyle(${Component.displayName || Component.name})`
    );
    render() {
      const { children } = this.props;
      return (
        <Component style={style}>
          {children}
        </Component>
      );
    }
  }
  return NewComponent;
}

// const withStyle = style => Component => ({ children }) => (
//   <Component style={style}>
//     {children}
//   </Component>
// );

const smartChildren = mapProps(
  ({ children }) => ({
    children: (
      typeof children === 'string'
        ? <a href={`#${children}`}>{children}</a>
        : <span className="error">Not a plain text</span>
    ),
  })
);

const withRedText = withStyle({ color: 'red' });

// const withRedText = Component => ({ children }) => (
//   <Component style={{ color: 'red' }}>{children}</Component>
// );

// const RedHeader = ({ children }) => (
//   <Header style={{ color: 'red' }}>{children}</Header>
// );

// const RedContent = ({ children }) => (
//   <Content style={{ color: 'red' }}>{children}</Content>
// );

const RedHeader = withRedText(Header);
const RedContent = withStyle({ color: 'red '})(Content);

const SmartRedContent = smartChildren(RedContent);
const suppresRedText = props => ({
  ...props,
  style: (
    props.style && props.style.color === 'red'
      ? { ...props.style, color: 'green' }
      : props.style
  ),
});

const compose2 = (f, g) => (...args) => f(g(...args));
const compose = (...fns) => fns.reduce(compose2);

const SmartHeader = compose(
  withStyle({ color: 'red' }),
  mapProps(suppresRedText)
)(Header);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggler1 />
        <hr/>
        <Toggler2 />
        <hr/>
        <Header>Hello World</Header>
        <Content>
          some content
        </Content>
        <hr/>
        <RedHeader>Hi, from RedHeader</RedHeader>
        <RedContent>Some Red content</RedContent>
        <hr/>
        <SmartHeader style={{ color: 'red' }}>Smart Header</SmartHeader>
        <SmartRedContent>
          Hello world!!!
        </SmartRedContent>
        <SmartRedContent>
          <span>Hello World!!!</span>
        </SmartRedContent>
      </div>
    );
  }
}

export default App;
