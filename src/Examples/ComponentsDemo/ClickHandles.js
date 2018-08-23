import React from 'react';

// function handleClick(event){
//     console.log('The link was clicked.');
//     console.log(event);
// }

let ClickHandles = ({handleClick}) =>{ //handleClick is Props Function
    return <div>
        <button onClick = {(event)=>{handleClick('A','B');}}>A</button>
        <button onClick = {(event)=>{handleClick('B');}}>B</button>
        <button onClick = {(event)=>{handleClick('C');}}>C</button>
    </div>;
}

export default ClickHandles;