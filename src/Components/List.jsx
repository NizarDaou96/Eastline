import React from "react";


function List(props) {

    var date = new Date(props.listItem.time * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    

    return (
    <>
    <div className="list-row row">

    <div className="col-12">
    <div className="row">
    <div className="col-auto">{props.id + 1 + "-"}</div>
    <div className="col-auto">
    <a href={props.listItem.url}>{props.listItem.title} </a>
    </div>
    </div>
    </div>

    
    
    <div className="col-12">
    <div className="second-row row">
    <div className="col-auto">{props.listItem.score + " points"} </div>
    <div className="col-auto">{"by " + props.listItem.by}</div>
    <div className="col-auto">{"posted on: " + hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)}</div>
    </div>   
    </div>

    </div>
    </>

    );
}


export default List;