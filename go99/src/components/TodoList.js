import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  Text,
  ImageButton,
  Grid,
  CheckCircle,
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

TodoList.defaultProps = {
  is_complete: false,
};

const Hr = styled.hr`
  margin: 20px 0px 0px 0px;
`;
