import React,{useState,useEffect} from "react";
import axios from "axios";

import List from "../Components/List";
import DatabaseButton from "../Components/DatabaseButton"


function Home() {

    const [list,setList] =useState([]);


    useEffect (
        () => {
          axios.get(`http://localhost:5000/api/TopStories/`)
            .then(res => {
             console.log(res.data)
              res.data.slice(0,30).forEach(element => {
                setList (prevList => {
                    return [...prevList, element];
                  });
              });
            })
        }
        ,[]);

        
        function deleteFromDatabase() {
          axios.delete(`http://localhost:5000/api/TopStories/`)
          .then( res => {

          console.log("successfully deleted from database");
          
          })
          .catch (err => {
            console.log(err);
          });
      }



    return (     
<>
        {list.length>29 && <DatabaseButton onClick={deleteFromDatabase} name="Delete List from Database"/>}
        {(list.length==0) && <div className="list-row row">There are no stories available. Add the stories to databaes in the hacker news page !</div> }
        {list.length>29 && list.map((Item, index) => {
          
            return (
              <List
                key={index}
                id={index}
                listItem={Item}
              />    
            );
          })}
          
</>
    )
}


export default Home;