import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  Text,
  ImageButton,
  Grid,
  CheckCircle,
  Input,
  Button,
} from "../elements/elementsIndex";
import { actionCreators as detailActions } from "../redux/modules/detail";
import { useSelector, useDispatch } from "react-redux";

const TodoList = (props) => {
  // 디스패치, 히스토리 선언
  const dispatch = useDispatch();
  const { is_complete } = props;

  const todo_list = useSelector((state) => state.detail.list);

  //서클아이디
  const circles_id = props.circles_id
  // DB에서 불러오기
  useEffect(() => {
    const circles_id = props.circles_id
    dispatch(detailActions.getTodosDB(circles_id));
  }, []);

  const [modal, setModal] = useState(false);
  const [text, setText] = useState();
  const [todo, setTodo] = useState();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const editText = () => {
    console.log(text)
    console.log(todo)
    console.log(circles_id)
    dispatch(detailActions.editTodosDB(todo,text,circles_id))
    setModal(false);
  };

  return (
    <React.Fragment>
      {todo_list.map((item, index) => {
        const todos_id = item.todos_id
        const todo_check = item.todo_check

        let todo = todo_check
        const change = () => {
            if(!todo) {
              todo = true
            } else {
              todo = false
            }
            dispatch(detailActions.patchCircleDB(todo,todos_id,circles_id))
            
        };
        const deleteDB = () => {
          dispatch(detailActions.deleteTodosDB(todos_id,circles_id))
        }

        const editModal = () => {
          if (!modal) {
            setText(item.todo_content)
            setTodo(todos_id)
            setModal(true);
          }
        };

        return (
          <Grid padding="16px" key={index}>
            <Grid is_flex>
              {todo_check === true? <CheckCircle _onClick={change} result={true} />: null}
              {todo_check === false? <CheckCircle _onClick={change} result={false} />: null}
              <Text size="24px" bold="bold" color="#455154" margin="0px 10px">
                {item.todo_content}
              </Text>
              <ImageButton
                _onClick={editModal}
                size="25px"
                margin="0px 0px 0px auto"
              />
              <ImageButton _onClick={deleteDB} size="25px" margin="0px 10px" deleteIcon />
            </Grid>
            <Hr />
          </Grid>
        );
      })}
      {modal?
      <Modal style={{ display: modal ? "block" : "none" }}>
        <ModalInner>
          <Text margin="0 0 20px 0" size="1.5rem" bold>
            텍스트를 수정해주세요
          </Text>
          <Input _onChange={onChange} value={text} margin="0 0 20px 0" padding="15px"></Input>
          <Button _onClick={editText}>수정</Button>
        </ModalInner>
      </Modal>
      :null}
    </React.Fragment>
  );
};

export default TodoList;

const Modal = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 10;
`;
const ModalInner = styled.div`
  width: 80%;
  max-width: 500px;
  margin: auto;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 250px;
`;

TodoList.defaultProps = {
  is_complete: false,
};

const Hr = styled.hr`
  margin: 20px 0px 0px 0px;
`;
