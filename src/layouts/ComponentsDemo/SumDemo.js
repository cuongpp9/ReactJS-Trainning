import React from 'react';
import PropTypes from 'prop-types';

const SumDemo= (props) =>{
    return <h1>{props.a} + {props.b} = {props.a + props.b}</h1>
}

SumDemo.propTypes ={
    a:PropTypes.number.isRequired,
    b:PropTypes.number.isRequired,
}

export default SumDemo;