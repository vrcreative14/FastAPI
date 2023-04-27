// import React from "react";

import { useState } from "react"

// export default class Blog extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {}
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.heading}</h1>
//                 <img src='https://i.ibb.co/HBCJj8F/pexels-rfstudio-3886235.jpg' alt=""></img>
//                 <p>
//                     {this.props.description}
//                 </p>
//             </div>
//         )
//     }
// }


export default function Blogs(props){
    const [count, setCounter] = useState(0)
    const getDetail = (id) => {
        debugger
          console.log(`blog ${props.id} clicked`)
      }

    const handleClick = () => {
        setCounter(count + 1)
    }
    
    return(
            <div id={props.id} onClick={getDetail}>
                <h1>{props.title} {count}</h1>
                <img src={props.img} alt=""></img>
                <p>
                    {props.description}
                </p>
                <button onClick={handleClick}>Click</button>
            </div>
        )
}