// import { useState } from "react"; 
// export default function TextArea(props){ 
//     const [message, setMessage] = useState(props.value); 
//     const handlerChange=(event)=>{ 
//         setMessage(event.target.value); 
//     } 
//     const handlerFocus=()=>{ 
//         setMessage(""); 
//     } 
//     return ( 
//         <textarea cols={props.cols} 
//         rows={props.rows} 
//         value={message} 
//         onFocus={handlerFocus} 
//         onChange={handlerChange} /> 
//     ); 
//    };


import React from 'react'; 
export default class TextArea extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { message : props.value }; 
    } 
    handlerChange(event) { 
         this.setState({message : event.target.value}); 
    } 
    handlerFocus(event) { 
        this.setState({message : ""}); 
    } 
    render() { 
        return ( 
            <textarea cols={this.props.cols} 
            rows={this.props.rows} 
            value={this.state.message} 
            onFocus={(e)=>this.handlerFocus(e)} 
            onChange={(e)=>this.handlerChange(e)} /> 
        ) 
    } 
}