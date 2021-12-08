import React,{useState} from "react";
import styled from "styled-components";

const Trackers = (props) => {
  
  // props
  const {
    _onClick,
    list
  } = props;
  
  const checkNum = list.check_count

  const [num,setNum] = useState(checkNum? checkNum : 0)

  let pointColor = '#eee'

  if(num === 0) {
    pointColor = '#eee'
  } else if(num === 1) {
    pointColor = '#ddd'
  } else if(num === 2) {
    pointColor = '#ccc'
  } else if(num === 3) {
    pointColor = '#bbb'
  } else if(num === 4) {
    pointColor = '#aaa'
  } else if(num > 4) {
    pointColor = '#888'
  }

  const styles = {
    pointColor:pointColor
  }

  return (
    <React.Fragment>
        <TrackersStyle
          {...styles}
          onClick={_onClick}
        ></TrackersStyle>
    </React.Fragment>
  )
};

// Grid DefaultProps 
Trackers.defaultProps = {
  
}

const TrackersStyle = styled.div`

  float: left;
  border-radius: 50%;
  width: 9.2857%;
  margin: 2% 2.5%;
  background-color: ${(props)=>props.pointColor};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

export default Trackers;
