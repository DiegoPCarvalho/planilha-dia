import React from 'react';


export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: '1s appear forwards',
        animationDelay: this.props.delay,
      },
      menuItem: {
        width: '100%',
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: '1.2rem',
        // padding: '1rem 0',
        // margin: '0 5%',
        cursor: 'pointer',
        color: this.state.hover ? 'gray' : '#fafafa',
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        animationDelay: this.props.delay,
      },
      line: {
        width: '90%',
        height: '1px',
        background: 'gray',
        animation: '0.5s shrink forwards',
        animationDelay: this.props.delay,

      }
    }
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onMouseEnter={() => { this.handleHover(); }}
          onMouseLeave={() => { this.handleHover(); }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        {/* <div style={styles.line}/> */}
      </div>
    )
  }
}

