import React, {Component} from 'react';

class PreventDefault extends Component{
    constructor(props){
        super(props);
        this.state = {content: ""};
        this.onChar = this.onChar.bind(this);
        this.onGoTime = this.onGoTime.bind(this);
    }

    onChar(event){
        this.setState({content: event.target.value});
        console.log(event);
    }

    onGoTime (event) {
        if(this.state.content !== "reload"){
            event.preventDefault();
        }
    }

    render(){
        return(
            <form onSubmit = {this.onGoTime}>
                <input type= "text" 
                value={this.state.content}
                onChange = {this.onChar}/>
                <input type = "submit" value="Go Time"/>
            </form>
        )
    }
}
export default PreventDefault;