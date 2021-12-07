import React from "react";
import { Grid,Trackers } from "../elements/elementsIndex";

const TrackersList = (props) => {
  
  const arr = Array.apply(null,new Array(99)).map(Number.prototype.valueOf,0)

  const event = (e) =>{
    console.log('33')
    console.log(e.target)
  }

  return (
      <Grid height='auto'>
          {arr.map((list,idx) => {
            return(
              <Trackers _onClick={event} key={idx}></Trackers>
            )
          })}
      </Grid>
  )
};

export default TrackersList;
