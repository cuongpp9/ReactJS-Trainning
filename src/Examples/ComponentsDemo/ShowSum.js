import React from 'react';
import PropTypes from 'prop-types';

function Sum({a,b}){
    return <h1>{a} + {b} = {a+b}</h1>
}
function ConditionalDisplay (props){
    return <div>{props.isVisible ? props.children : null}</div>
}

const state = {
    showSum: true
}

ConditionalDisplay.propTypes = {
    isVisible: PropTypes.bool.isRequired
}

// setInterval (()=>{
//     state.showSum = ! state.showSum;
// }, 2000);

function ShowSum(){
    return <ConditionalDisplay isVisible = {state.showSum}>
        <h1>A <span>Sum</span></h1>
        <Sum a={4} b ={2}/>
    </ConditionalDisplay>
}
export default ShowSum;