import React,{useState} from "react";
import styled from "styled-components";

const Trackers = (props) => {
  
  // props
  const {
    _onClick,
    checkPoint // 0개 ~ 5개이상
  } = props;

  let pointColor = '#eee'

  if(checkPoint === 0) {
    pointColor = '#eee'
  } else if(checkPoint === 1) {
    pointColor = '#ddd'
  } else if(checkPoint === 2) {
    pointColor = '#ccc'
  } else if(checkPoint === 3) {
    pointColor = '#bbb'
  } else if(checkPoint === 4) {
    pointColor = '#aaa'
  } else if(checkPoint > 4) {
    pointColor = '#888'
  }
  
  console.log(checkPoint)

  const styles = {
    pointColor:pointColor
  }

  return (
    <React.Fragment>
        <TrackersStyle
          checkPoint={checkPoint}
          {...styles}
          onClick={_onClick}
        ></TrackersStyle>
    </React.Fragment>
  )
};

// Grid DefaultProps 
Trackers.defaultProps = {
  checkPoint:0,
}

const TrackersStyle = styled.div`
  float: left;
  border-radius: 50%;
  width: 12.2857%;
  margin: 1% 1%;
  background-color: ${(props)=>props.pointColor};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

export default Trackers;
