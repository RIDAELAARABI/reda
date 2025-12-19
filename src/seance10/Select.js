// export default function Select (props) { 
//     const handlerChange=(event)=>{ 
//         console.log('key='+event.target.value); 
//     } 
//     return ( 
//         <select onChange={handlerChange}> 
//             {props.options.map((option , index) => <option key={index+1} value={index+1}>{option}</option>)}
//         </select> 
//     ); 
// }; 

import React from 'react'; 
export default class Select extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    handlerChange(event) { 
        console.log('key='+event.target.value); 
    }
    render() { 
        return ( 
            <select onChange={(e)=>this.handlerChange(e)}> 
                {this.props.options.map((option , index) => <option key={index+1} value={index+1} selected={this.props.defaultValue==index+1}>{option}</option>)} 
            </select> 
        ) 
    } 
} 
