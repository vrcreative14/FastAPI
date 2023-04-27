// import React from "react";

// class Card extends React.Component {
//     // constructor(){
//     //     super(props);
//     // }
//     render(){
//         return(
//             // <div className="card">
//             //     <img src={this.props.img} alt="" className="card-image"/>
//             //     <label>{this.props.name}</label>
//             // </div>
//             <div className="card mx-5 mt-3 p-5 " style={{width:'18rem'}}>
//                 <h6>{this.props.title}</h6>
//                 <img src={this.props.image} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                     <p className="card-text">{this.props.text}</p>
//                 </div>
//             </div>
//         )
//     }
// }

function Card(props){
    return(
                    // <div className="card">
            //     <img src={this.props.img} alt="" className="card-image"/>
            //     <label>{this.props.name}</label>
            // </div>
            <div id={props.id} className="card mx-5 mt-3 p-5 " style={{width:'18rem'}} onClick={props.handleCardClick}>
                <h6>{props.title}</h6>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
    )
}

export default Card