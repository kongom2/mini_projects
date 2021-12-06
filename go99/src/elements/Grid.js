import React from "react";
import styled from "styled-components";

const Grid = (props) => {

    // props
    const {
        is_flex, // is_flex => display:flex; align-items:center
        width, 
        padding,
        margin,
        bg, // bg => background : bg
        children, // Grid로 감싼 자식요소
        border,
        height
    } = props;
   
    // style
    const styles = {
        is_flex: is_flex,
        width: width,
        height: height,
        margin: margin,
        padding:padding,
        bg:bg,
        border:border
    }

    return(
        <React.Fragment>
            <GridBox {...styles}>
                {children}
            </GridBox>
        </React.Fragment>
    )
}

const GridBox = styled.input`
    width: ${(props)=>props.width};
    height: ${(props)=>props.height};
    box-sizing: border-box;
    ${(props)=> props.padding ? `padding : ${props.padding}` : ''};
    ${(props)=> props.margin ? `margin : ${props.margin}` : ''};
    ${(props)=> props.bg ? `background : ${props.bg}` : ''};
    ${(props)=> props.is_flex ? 'display:flex; align-items:center;  justify-content: space-between;' : ''}
    ${(props)=> props.border ? `border : ${props.border}` : 'none'};
`

Grid.defaultProps = {
    children:null,
    is_flex:false,
    width: '100%',
    padding:false,
    margin:false,
    bg:'#fff',
    height: '100%'
}

export default Grid