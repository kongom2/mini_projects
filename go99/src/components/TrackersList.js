import React from "react";
import { Grid,Trackers } from "../elements/elementsIndex";

const TrackersList = (props) => {
  
  const arr = Array.apply(null,new Array(99)).map(Number.prototype.valueOf,0)
  console.log(arr)
  return (
    <React.Fragment>
        <Grid width='100%'>
            {arr.map((list,idx) => {
              return(
                <Trackers key={idx}></Trackers>
              )
            })}
        </Grid>
    </React.Fragment>
  )
};

export default TrackersList;
