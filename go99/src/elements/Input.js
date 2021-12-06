import React from "react";
import styled from "styled-components";

const Input = (props) => {

    const {
        width, // width : ''
        padding, // padding : '0 0 0 0'
        margin,
        bg, 
        border
        ,height,
        type,
        placeholder,
        _onChange
    } = props;

    const styles = {
        width: width,
        height: height,
        margin: margin,
        padding:padding,
        bg:bg,
        border:border
    }

    return(
        <React.Fragment>
            <CommonInput type={type} onChange={_onChange} placeholder={placeholder} {...styles}/>
        </React.Fragment>
    )
}

const CommonInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 15px;
`

CommonInput.defaultProps = {
    
}

export default Input