import React,{useState,useEffect} from "react";
import axios from "axios";

import List from "../Components/List";
import MoreButton from "../Components/MoreButton";
import DatabaseButton from "../Components/DatabaseButton"


function Home() {

    const [list,setList] =useState([]);
    const [slice,setSlice]=useState({
        value1:0,
        value2:30
    })

    useEffect (
        () => {
          axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
            .then(res => {
            
              res.data.slice(slice.value1,slice.value2).forEach(element => {
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
                .then(res => {
                    setList (prevList => {
                        return [...prevList, res.data];
                      });
                })
              });
            })
        }
        , [slice]);

        function changeSliceValues(){
            setSlice({
                value1:slice.value1+30,
                value2:slice.value2+30
            })
        }
        
        function addToDatabase() {
          axios.post(`http://localhost:5000/api/TopStories/`,list)
          .then( res => {
            console.log("successfully added this list to mongoDB");
          })
          .catch(err => {
            console.log(err);
          });
      }



    return (     
<>
        {list.length>29 && <DatabaseButton onClick={addToDatabase} name="Add List to Database" />}
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
          
</>
    )
}


export default Home;