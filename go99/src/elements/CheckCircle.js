import React from "react";
import styled from "styled-components";

const CheckCircle = (props) => {

  const {result,_onClick} = props
  console.log(props.result)

  if(result) {
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
  background-color: #707070;
  border-radius: 30px;
  cursor: pointer;
`;

export default CheckCircle;
