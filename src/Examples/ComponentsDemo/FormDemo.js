import React, {Component} from 'react';

class FormDemo extends Component{
    render(){
        return(
           <div onSubmit = {console.log}>
                <input type = "text" /> <br/>
                <textarea /> <br/>
                <select >
                    <option value= "saturday">Saturday</option>
                    <option value= "Sunday">Sunday</option>
                </select>
                <button onSubmit = {console.log}>asdasd</button>
            </div>
        );
    }
}
export default FormDemo;