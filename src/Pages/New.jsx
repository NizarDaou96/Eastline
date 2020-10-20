import React,{useState,useEffect} from "react";
import axios from "axios";

import List from "../Components/List";
import MoreButton from "../Components/MoreButton"


function New(){

    const [list,setList] =useState([]);
    const [slice,setSlice]=useState({
        value1:0,
        value2:30
    })

    useEffect (
        () => {
          axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
            .then(res => {
            
              res.data.slice(slice.value1,slice.value2).forEach(element => {
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
                .then(res => {
                    setList (prevArray => {
                        return [...prevArray, res.data];
                      });
                })
              });
            })
        }
        , [slice]);

        function changeSliceValues() {
            setSlice({
                value1:slice.value1+30,
                value2:slice.value2+30
            })
        }

    return (     
<div>
        {(list.length==0) && <div className="list-row row">Wait for data to be fetched !</div> }
        {list.length>29 && list.map((Item, index) => {
          
            return (
              <List
                key={index}
                id={index}
                listItem={Item}
              />    
            );
          })}

          {list.length>29 && <MoreButton onClick={changeSliceValues} />}
</div>
    )
}


export default New;