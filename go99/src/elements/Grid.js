import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  // props
  const {
    _onClick,
    is_flex, // is_flex => display:flex; align-items:center
    width,
    padding,
    margin,
    bg, // bg => background : bg
    border,
    borderBottom,
    height,
    hide,
    borderRadius,
    children, // Grid로 감싼 자식요소
    cursor,
  } = props;

  // props style
  const styles = {
    hide: hide,
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    border: border,
    borderBottom: borderBottom,
    borderRadius: borderRadius,
    cursor: cursor,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

// Grid DefaultProps
Grid.defaultProps = {
  _onClick: () => {},
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: null,
  height: "100%",
  borderRadius: "0px",
  cursor: "Default",
};

// Gird 스타일드 컴포넌트
const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  box-sizing: border-box;
  cursor: ${(props) => props.cursor};
  ${(props) => (props.padding ? `padding : ${props.padding}` : "")};
  ${(props) => (props.margin ? `margin : ${props.margin}` : "")};
  ${(props) => (props.bg ? `background : ${props.bg}` : "")};
  ${(props) =>
    props.is_flex
      ? "display:flex; align-items:center;  justify-content: space-between;"
      : ""};
  ${(props) => (props.border ? `border : ${props.border}` : "none")};
  ${(props) =>
    props.borderBottom ? `border-bottom : ${props.borderBottom}` : "none"};
  ${(props) => (props.hide ? `display:none` : "none")};
`;
export default Grid;
