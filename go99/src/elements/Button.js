import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    children,
    margin,
    width,
    padding,
    fontSize,
    bg,
    fontColor,
  } = props;
  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    fontSize: fontSize,
    bg: bg,
    fontColor: fontColor,
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
  fontSize: "14px",
  padding: "12px 0px",
  bg: "#d85147",
  fontColor: "#ffffff",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.fontColor};
  font-weight: bold;
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;
export default Button;
