import React,{useState} from "react";
import { useHistory } from 'react-router-dom';
import { Grid,Trackers,Button } from "../elements/elementsIndex";

const TrackersList = (props) => {
  const history = useHistory();

  const arr = Array.apply(null,new Array(99)).map(Number.prototype.valueOf,0)


  const [num,setNum] = useState(0)
  const count = () => {
    setNum(num+1)
  }

  const event = (e) =>{
    count()
    console.log(num)
    
  }

  return (
      <Grid _onClick={event} height='auto'>
          {arr.map((list,idx) => {
            return(
              <Trackers checkPoint={num} _onClick={() => {history.push(`/main/항해99/${idx+1}`)}} key={idx}></Trackers>
            )
          })}
      </Grid>
  )
};

export default TrackersList;
