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

  if(checkNum === 0) {
    return (
      <React.Fragment>
          <Red0
            onClick={_onClick}
          ></Red0>
      </React.Fragment>
    )
  }
  if(checkNum === 1) {
    return (
      <React.Fragment>
          <Red1
            onClick={_onClick}
          ></Red1>
      </React.Fragment>
    )
  }
  if(checkNum === 2) {
    return (
      <React.Fragment>
          <Red2
            onClick={_onClick}
          ></Red2>
      </React.Fragment>
    )
  }
  if(checkNum === 3) {
    return (
      <React.Fragment>
          <Red3
            onClick={_onClick}
          ></Red3>
      </React.Fragment>
    )
  }
  if(checkNum === 4) {
    return (
      <React.Fragment>
          <Red4
            onClick={_onClick}
          ></Red4>
      </React.Fragment>
    )
  }
  if(checkNum >= 5) {
    return (
      <React.Fragment>
          <Red5
            onClick={_onClick}
          ></Red5>
      </React.Fragment>
    )
  }


  return (
    <React.Fragment>
        <TrackersStyle
          onClick={_onClick}
        ></TrackersStyle>
    </React.Fragment>
  )
};


const TrackersStyle = styled.div`

  float: left;
  border-radius: 50%;
  width: 9.2857%;
  margin: 2% 2.5%;
  background-color: #eee;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`
const Red0 = styled.div`

  float: left;
  border-radius: 50%;
  width: 9.2857%;
  margin: 2% 2.5%;
  background-color: #eee;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const Red1 = styled.div`

  float: left;
  border-radius: 50%;
  width: 9.2857%;
  margin: 2% 2.5%;
  background-color: #ffdbd1;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`


const Red2 = styled.div`

  float: left;
  border-radius: 50%;
  width: 9.2857%;
  margin: 2% 2.5%;
  background-color: #ffbcaa;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const Red3 = styled.div`

  float: left;
  border-radius: 50%;
  width: 9.2857%;
  margin: 2% 2.5%;
  background-color: #fca189;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const Red4 = styled.div`

  float: left;
  border-radius: 50%;
  width: 9.2857%;
  margin: 2% 2.5%;
  background-color: #ff7f5e;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const Red5 = styled.div`

  float: left;
  border-radius: 50%;
  width: 9.2857%;
  margin: 2% 2.5%;
  background-color: #f44f25;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`
export default Trackers;
