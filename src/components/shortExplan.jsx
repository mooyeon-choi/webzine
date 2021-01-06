import React, { Component } from 'react';

class ShortExplan extends Component {
  render() {
    return (
      <section className="short-explan">
        <h1>{this.props.explanation.title}</h1>
        <h3>{this.props.explanation.text}</h3>
      </section>
    );
  }
}

export default ShortExplan;