import React,{useState} from "react";
import styled from "styled-components";

const CheckCircle = (props) => {
  const { result, _onClick } = props;
  // console.log(props.result)

<<<<<<< HEAD
  if (result) {
=======
  const {result,_onClick} = props
  const [change,setChange] = useState(result)
  

  if(change) {
>>>>>>> c96c9c537219721ec64a4a037252619524f1acdd
    return (
      <React.Fragment>
        <CompleteColor onClick={_onClick}></CompleteColor>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <DefaultColor onClick={_onClick}></DefaultColor>
    </React.Fragment>
  );
};

CheckCircle.defaultProps = {
  completeColor: false,
};

const CompleteColor = styled.div`
  width: 30px;
  height: 30px;
  background-color: #d85147;
  border-radius: 30px;
  cursor: pointer;
`;

const DefaultColor = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ccc;
  border-radius: 30px;
  cursor: pointer;
`;

export default CheckCircle;
