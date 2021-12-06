import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, children, margin, width, padding } = props;
  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #d85147;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border-radius: 6px;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;
export default Button;
