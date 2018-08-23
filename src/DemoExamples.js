import React, { Component } from 'react';
import './stypes/bootstrap.min.css';
import HelloWorld from './Examples/ComponentsDemo/HelloWorld';
import SumDemo from './Examples/ComponentsDemo/SumDemo';
import ClickCount from './Examples/ComponentsDemo/ClickCount';
import ClickHandles from './Examples/ComponentsDemo/ClickHandles';
import UnescapingContent from './Examples/ComponentsDemo/UnescapingContent';
import ShowSum from './Examples/ComponentsDemo/ShowSum';

class DemoExamples extends Component {
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

export default DemoExamples;
