import React, { Component } from 'react';
import './stypes/bootstrap.min.css';
import HelloWorld from './layouts/HelloWorld';
import SumDemo from './layouts/SumDemo';
import ClickCount from './layouts/ClickCount';
import ClickHandles from './layouts/ClickHandles';


class AuthorQuiz extends Component {
  render() {
    const propsSum = {a: 10, b:4} //spread react
    return (
      <div>
        <ClickCount />
        <HelloWorld now={new Date().toISOString()}/>
        <SumDemo {...propsSum}/>
        <ClickHandles handleClick = {(event) => console.log(`${event} clicked`)}/>
      </div>
    );
  }
}

export default AuthorQuiz;
