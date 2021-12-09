import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Text,
  ImageButton,
  Grid,
  CheckCircle,
  Input,
  Button
} from "../elements/elementsIndex";

const TodoList = (props) => {
  const { is_complete } = props;

  const [modal,setModal] = useState(false)
  const [select,setSelect] = useState(false)

  const editModal = () => {
    if(!modal) {
      setModal(true)
    }
  } 

  const editText = () => {
    setModal(false)
  };

  const change = () => {
    if(!select) {
      setSelect(true)
    }
    if(select) {
      setSelect(false)
    }
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid is_flex>
          <CheckCircle _onClick={change} result={select} /> 
          <Text size="24px" bold="bold" color="#455154" margin="0px 10px">
            Todo99
          </Text>
          <ImageButton _onClick={editModal} size='25px' margin="0px 0px 0px auto" />
          <ImageButton size='25px' margin="0px 10px" deleteIcon />
        </Grid>
        <Hr />
      </Grid>
      <Modal style={{display:modal? 'block' : 'none'}}>
        <ModalInner>
          <Text margin="0 0 20px 0" size="1.5rem" bold>텍스트를 수정해주세요</Text>
          <Input margin="0 0 20px 0" padding="15px"></Input>
          <Button _onClick={editText}>수정</Button>
        </ModalInner>
      </Modal>
    </React.Fragment>
  );
};

export default TodoList;

const Modal = styled.div`
  position:fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height:100%;
  background-color:rgba(0,0,0,0.32);
  z-index: 10;
`
const ModalInner = styled.div`
  width: 80%;
  max-width: 500px;
  margin: auto;
  height:auto;
  padding:20px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 250px;
`

TodoList.defaultProps = {
  is_complete: false,
};

const Hr = styled.hr`
  margin: 20px 0px 0px 0px;
`;
