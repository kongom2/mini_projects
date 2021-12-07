import React from "react";
import styled from "styled-components";

const CheckCircle = (props) => {
  const { completeColor } = props;
  if (completeColor === true)
    return (
      <React.Fragment>
        <CompleteColor></CompleteColor>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <DefaultColor></DefaultColor>
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
`;

const DefaultColor = styled.div`
  width: 30px;
  height: 30px;
  background-color: #707070;
  border-radius: 30px;
`;

export default CheckCircle;
