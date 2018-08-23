import React from 'react';

function UnescapingContent(props){
    return <p dangerouslySetInnerHTML={{__html:props.dangerous}}/>
}
export default UnescapingContent;