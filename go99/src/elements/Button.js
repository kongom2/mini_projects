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
    border,
    hover
  } = props;
  
  const styles = {
    hover:hover,
    border:border,
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
  border:'none',
  hover:null
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
  border: ${(props) => props.border};
  cursor: pointer;
  transition: all 0.2s;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  &:hover {
    color: ${(props) => props.hover? '#d85147' : 'none'};
    transition: all 0.2s; 
  }
`;
export default Button;
