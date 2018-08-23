import React from 'react';

function ClickyButtons({numberOfButtons, onSelection}){
    const makeButton = v =><button key = {v} id ={v} onClick = {event =>
    onSelection(event.target.id)}>{v}</button>;
    return <div>
        {_.range(1, numberOfButtons +1).map(makeButton)}
    </div>;
}
export default ClickyButtons;