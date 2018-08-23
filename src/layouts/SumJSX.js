import React from 'react';

function SumJSX(props){
    React.createElement(
        'h1',
        null, //props
        `${props.a} + ${props.b} = ${props.a + props.b}`,
    )
}
function Sum(){
    React.createElement(
        'div',
        null,
        React.createElement(
            SumJSX,
            {a:4, b :2},
            null
        )
    )
}

export default Sum;