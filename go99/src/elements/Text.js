import React from "react";
import styled from "styled-components";

const Text = (props) => {

    // props
    const {
      children,
      bold,
      color,
      size,
      margin,
      align
    } = props

    // props style
    const styles = {
      bold:bold, 
      color:color, 
      size:size,
      margin:margin,
      align:align // center,start,end
    }


    return (
        <React.Fragment>
            <TextStyle {...styles}>
                {children}
            </TextStyle>
        </React.Fragment>
    )
};

// Text DefaultProps 
Text.defaultProps = {
    children:null,
    bold:false,
    color: '#333',
    size: '18px',
    margin: '0',
    align:null,
  
}

// Text 스타일드 컴포넌트
const TextStyle = styled.p`
    margin: ${(props) => props.margin};
    font-weight: ${(props) => (props.bold) ? '600': '200'};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    margin: ${(props) => props.margin};
    align-self:  ${(props) => props.align};
    word-break:break-all;
`

export default Text;
