import React from "react"; 
class CheckBox extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { checked : props.checked || false }; 
    } 
    handlerChange(event) { 
        this.setState({checked : event.target.checked}); 
    } 
    render() { 
        return ( 
            <label> 
                <span>{this.props.text}</span> 
                    <input type="checkbox" value={this.props.value} 
                    checked={this.state.checked} 
                    onChange={this.handlerChange.bind(this)} /> 
                <br/> 
            </label> 
        ) 
    } 
}
export default class CheckBoxGroup extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    render() { 
        return ( 
            <div>{ 
                this.props.checkboxes.map((checkbox, index) => { 
                    return ( 
                        <CheckBox key={index} text={checkbox.text} value={checkbox.value} checked={checkbox.checked}/> 
                           ) 
                    }) 
                } 
            </div> 
        ) 
    } 
} 
