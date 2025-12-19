import { useState } from "react";

// export default function RadioGroup(props){ 
//     const [control , setcontrol] = useState("")
     
//     function onchange(event){
//         setcontrol(event.target.value)
//         console.log(control)
//     }

//     return ( 
//         <div> { 
//             props.radios.map((radio, index) => { 
//                 return ( 
//                     <label key={index+1}><span>{radio.text}</span> 
//                     <input type="radio" value={radio.value} name="radioname" onChange={onchange} /> 
//                     </label> 
//                 ) 
//             }) } 
//         </div> 
//     ); 
// }; 


import React from 'react'; 
export default class RadioGroup extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    render() { 
        return ( 
            <div> { 
                    this.props.radios.map((radio, index) => { 
                        return ( 
                            <label key={index}><span>{radio.text}</span> 
                            <input type="radio" value={radio.value} name={radio.name} checked={radio.checked} /> 
                            </label> 
                        ) 
                    }) } 
            </div> 
        ) 
    } 
}