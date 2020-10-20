import React from "react";


function MoreButton(props){
    
    return (
    <div className="list-row row">
    <div className="col-auto">
     <p className="more-button" onClick={props.onClick}>MORE</p>
     </div>
     </div>
    );
}


export default MoreButton;