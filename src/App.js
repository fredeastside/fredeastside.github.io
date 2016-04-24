import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <h1>Hello world!!!</h1>
    );
  }
}
