import React from "react";
import styled from "styled-components";

const Text = (props) => {
  // props
  const {
    children,
    bold,
    color,
    bg,
    size,
    margin,
    align,
    height,
    border,
    _onClick,
    cursor,
  } = props;

  // props style
  const styles = {
    cursor:cursor,
    border: border,
    bold: bold,
    color: color,
    size: size,
    bg: bg,
    margin: margin,
    height: height,
    align: align, // center,start,end
  };

  return (
    <React.Fragment>
      <TextStyle {...styles} onClick={_onClick}>
        {children}
      </TextStyle>
    </React.Fragment>
  );
};

// Text DefaultProps
Text.defaultProps = {
  children: null,
  _onClick: () => {},
  bold: false,
  color: "#333",
  bg: "#fff",
  size: "18px",
  margin: "0",
  align: null,
  height: null,
};

// Text 스타일드 컴포넌트
const TextStyle = styled.p`
  margin: ${(props) => props.margin};
  font-weight: ${(props) => (props.bold ? "700" : "200")};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  align-self: ${(props) => props.align};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.border};
  word-break: break-all;
  cursor: ${(props) => props.cursor};
`;

export default Text;
