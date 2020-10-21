import React from "react";


function DatabaseButton(props){
    
    return (
    <div className="list-row row">
    <div className="col-auto">
     <p className="more-button" onClick={props.onClick}>{props.name}</p>
     </div>
     </div>
    );
}


export default DatabaseButton;