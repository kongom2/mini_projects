import React from "react";
import { AiFillEdit,AiFillDelete } from "react-icons/ai";
import styled from "styled-components";

const ImageButton = (props) => {
  
  // props
  const {
      deleteIcon,
  } = props;
  
  if(props.deleteIcon) {
    return (
      <React.Fragment>
        <Icon>
          <AiFillDelete size='53px'></AiFillDelete>
        </Icon>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Icon>
        <AiFillEdit size='53px'></AiFillEdit>
      </Icon>
    </React.Fragment>
  )
};

// Grid DefaultProps 
ImageButton.defaultProps = {
  delete:false
}

const Icon = styled.div`
  display: inline-block;
  cursor: pointer;
  &:hover {
    color:#D85147
  }
`

export default ImageButton;
