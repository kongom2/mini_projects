import React from "react";
import { AiFillEdit,AiFillDelete } from "react-icons/ai";
import styled from "styled-components";

const ImageButton = (props) => {
  
  // props
  const {
      deleteIcon, // 딜리트 아이콘
      _onClick,
      size,
      height
  } = props;
  
  // props style
  const styles = {
      height: height,
  }
  
  if(props.deleteIcon) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <AiFillDelete
            size={size} 
            onClick={_onClick}
          ></AiFillDelete>
        </Icon>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Icon {...styles}>
        <AiFillEdit
          size={size}
          onClick={_onClick}
        ></AiFillEdit>
      </Icon>
    </React.Fragment>
  )
};

// ImageButton DefaultProps 
ImageButton.defaultProps = {
  delete:false,
  size:'16px',
  height: '16px'
}

// ImageButton 스타일드 컴포넌트
const Icon = styled.div`
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s;
  height: ${(props)=>props.height};
  // hover 이벤트
  &:hover {
    color:#D85147;
    transition: all 0.2s;
  }
`

export default ImageButton;
