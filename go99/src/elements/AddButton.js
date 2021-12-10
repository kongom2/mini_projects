import React from "react";
import styled from "styled-components";

const AddButton = (props) => {
  // props
  const {
    _onClick, // 이벤트 함수 할당
    width,
    height,
    margin,
    position, // fixed, absolute
    padding,
  } = props;

  // props style
  const styles = {
    margin: margin,
    position: position,
    width: width,
    height: height,
    padding: padding,
  };

  return (
    <React.Fragment>
      <AddButtonStyle {...styles} onClick={_onClick}>
        +
      </AddButtonStyle>
    </React.Fragment>
  );
};

// AddButton DefaultProps
AddButton.defaultProps = {
  width: "50px",
  height: "50px",
  margin: null,
  position: null,
  padding: "0px",
  _onClick: () => {},
};

// AddButton 스타일드 컴포넌트
const AddButtonStyle = styled.button`
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  margin: ${(props) => props.position};
  line-height: ${(props) => props.height};
  right: ${(props) => (props.position ? "15px" : null)};
  bottom: ${(props) => (props.position ? "20px" : null)};
  //fix
  background-color: #d85147;
  border-radius: 50%;
  border: none;
  font-size: 50px;
  cursor: pointer;
  color: #fff;
`;

export default AddButton;
