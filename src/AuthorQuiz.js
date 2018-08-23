import React, { Component } from 'react';
import './stypes/bootstrap.min.css';
import HelloWorld from './layouts/ComponentsDemo/HelloWorld';
import SumDemo from './layouts/ComponentsDemo/SumDemo';
import ClickCount from './layouts/ComponentsDemo/ClickCount';
import ClickHandles from './layouts/ComponentsDemo/ClickHandles';
import UnescapingContent from './layouts/ComponentsDemo/UnescapingContent';
import ShowSum from './layouts/ComponentsDemo/ShowSum';

class AuthorQuiz extends Component {
  render() {
    const propsSum = {a: 10, b:4} //spread react
    return (
      <div>
        <ClickCount />
        <HelloWorld now={new Date().toISOString()}/>
        <SumDemo {...propsSum}/>
        <ClickHandles handleClick = {(...rest) => console.log(`${rest} clicked`) }/>
        <UnescapingContent dangerous="<strong>HELLO</strong>" />
        <ShowSum/>
      </div>
    );
  }
}

export default AuthorQuiz;
