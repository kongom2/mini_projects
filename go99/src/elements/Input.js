import React, { useRef } from "react";
import styled from "styled-components";

const Input = (props) => {
  // props
  const {
    width,
    padding,
    margin,
    bg, // bg => background : bg
    border,
    height,
    fontSize,
<<<<<<< HEAD
    onSubmit,

=======
    
>>>>>>> c265ae8e2247f4f8b0db0092a06950be010248f7
    // input props
    type,
    _onChange, // input 값 변경 감지
    placeholder, //placeholder 기입
    value, // 텍스트 추출
    ref,
  } = props;

  // props style
  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    border: border,
    height: height,
    fontSize: fontSize,
  };

  return (
    <React.Fragment>
      <InputStyle
        ref={ref}
        {...styles}
        type={type}
        onChange={_onChange}
        placeholder={placeholder}
<<<<<<< HEAD
        value={value}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSubmit(e);
          }
        }}
=======
        defaultValue={value}
>>>>>>> c265ae8e2247f4f8b0db0092a06950be010248f7
      ></InputStyle>
    </React.Fragment>
  );
};

// Input DefaultProps
Input.defaultProps = {
  width: "100%",
  height: null,
  padding: null,
  margin: null,
  placeholder: "텍스트를 입력해주세요",
  bg: "#fff",
  border: "1px solid #ccc",
  type: "text",
  fontSize: "16px",
  onSubmit: () => {},
};

// Input 스타일드 컴포넌트
const InputStyle = styled.input`
  box-sizing: border-box;
  border-radius: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  font-size: ${(props) => props.fontSize};
`;
export default Input;
