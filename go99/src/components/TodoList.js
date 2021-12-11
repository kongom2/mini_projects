import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

  // 투두리스트 불러오기
  const todo_list = useSelector((state) => state.detail.list);
  console.log(todo_list);
  // DB에서 불러오기
  useEffect(() => {
    const circles_id = props.circles_id;
    dispatch(detailActions.getTodosDB(circles_id));
  }, []);
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState(false);
  const [todos_id, setTodoId] = useState("");
  const [todo_content, setTodoName] = useState("");
  const [todoEditText, setTodoEditText] = useState("");
  const [circles_id, setCirclesId] = useState("");

  // 삭제확인 코드
  const onRemove = () => {
    if (window.confirm("정말 삭제합니까?")) {
      alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  };

  // 텍스트 stste 변경
  const onChange = (e) => {
    setTodoEditText(e.target.value);
    console.log(e.target.value);
  };

  const editModal = () => {
    if (!modal) {
      setModal(true);
    }
  };
  const data = {
    todo_content: todoEditText,
    circles_id: circles_id,
  };

  const editTodos = () => {
    setModal(false);
    dispatch(detailActions.editTodosDB(todos_id, data));
    console.log(todos_id, data);
  };

  // 투두 완료 색상 체크
  const change = () => {
    if (!select) {
      setSelect(true);
    }
    if (select) {
      setSelect(false);
    }
  };
  return (
    <React.Fragment>
      {todo_list.map((item, index) => {
        const todos_id = item.todos_id;
        const todo_content = item.todo_content;
        const circles_id = item.circles_id;
        const deleteTodos = () => {
          dispatch(detailActions.deleteTodosDB(todos_id, data));
        };
        return (
          <Grid padding="16px" key={index}>
            <Grid is_flex>
              <CheckCircle _onClick={change} result={select} />
              <Text size="24px" bold="bold" color="#455154" margin="0px 10px">
                {item.todo_content}
              </Text>
              <ImageButton
                _onClick={() => {
                  editModal();
                  setTodoId(todos_id);
                  setTodoName(todo_content);
                  setCirclesId(circles_id);
                }}
                size="25px"
                margin="0px 0px 0px auto"
              />
              <ImageButton
                size="25px"
                margin="0px 10px"
                deleteIcon
                _onClick={() => {
                  deleteTodos();
                  onRemove();
                }}
              />
            </Grid>
            <Hr />
          </Grid>
        );
      })}

      <Modal style={{ display: modal ? "block" : "none" }}>
        <ModalInner>
          <Text margin="0 0 20px 0" size="1.5rem" bold>
            텍스트를 수정해주세요
          </Text>
          <Input
            margin="0 0 20px 0"
            padding="15px"
            defaultValue={todo_content}
            _onChange={onChange}
          ></Input>
          <Button _onClick={editTodos}>수정</Button>
        </ModalInner>
      </Modal>
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
