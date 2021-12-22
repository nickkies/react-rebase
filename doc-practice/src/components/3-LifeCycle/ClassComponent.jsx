import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
    // arrow funcion으로 수정하면 제거 가능
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(() => this.tick(), 3000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    //console.log('tick');
    this.setState({ date: new Date() });
  }

  handleClick = () => {
    alert(this.state.date.toLocaleTimeString());
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>Life Cycle</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
