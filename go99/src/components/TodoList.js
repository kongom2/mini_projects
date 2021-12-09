import React, { useEffect } from "react";
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
  const history = useHistory();

  const { is_complete } = props;
  const todo_list = useSelector((state) => state.detail.list);

  // 데이터 선택
  console.log(todo_list);
  useEffect(() => {
    dispatch(detailActions.getTodosDB());
  }, []);

  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState(false);

  const editModal = () => {
    if (!modal) {
      setModal(true);
    }
  };

  const editText = () => {
    setModal(false);
  };

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
        return (
          <Grid padding="16px" key={index}>
            <Grid is_flex>
              {is_complete === true ? (
                <CheckCircle completeColor />
              ) : (
                <CheckCircle />
              )}
              <Text size="24px" bold="bold" color="#455154" margin="0px 10px">
                {item.todo_content}
              </Text>
              <ImageButton margin="0px 0px 0px auto" />
              <ImageButton margin="0px 10px" deleteIcon />
            </Grid>
            <Hr />
          </Grid>
        );
      })}
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
