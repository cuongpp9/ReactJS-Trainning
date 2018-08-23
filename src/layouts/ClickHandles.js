import React from 'react';

let ClickHandles = ({handleClick}) =>{
    return <div>
        <button onClick = {(event)=>{handleClick('A');}}>A</button>
        <button onClick = {(event)=>{handleClick('B');}}>B</button>
        <button onClick = {(event)=>{handleClick('C');}}>C</button>
    </div>;
}

export default ClickHandles;