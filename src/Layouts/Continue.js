import React from 'react';

function Continue ({show, onContinue}){
    return (
      <div className = "row continue">
        {
          show ?
          <button className = "btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
          : null
        }
      </div>
    )
}

export default Continue;