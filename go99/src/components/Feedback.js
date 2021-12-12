import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as feedbackActions } from "../redux/modules/feedBack";
import {
  Grid,
  Text,
  Input,
  Button,
  ImageButton,
} from "../elements/elementsIndex";
import styled from "styled-components";

const Feedback = (props) => {
  const dispatch = useDispatch();
  const circles_id = props.circles_id;
  // const projects_title = props.project_title;

  useEffect(() => {
    dispatch(feedbackActions.setFeedBackDB(circles_id));
    setFeedback("");
  }, []);

  const comment = useSelector((state) => state.feedBack.contents);
  const empty = useSelector((state) => state.feedBack.empty);
  const [modal, setModal] = useState(false);
  const [feedback, setFeedback] = useState();
  const [newFeedback, setNewFeedback] = useState();

  const arr = circles_id.split("_");

  const data = {
    projects_id: arr[1],
    circles_id: circles_id,
    feedback: feedback,
  };

  const editData = {
    projects_id: arr[1],
    circles_id: circles_id,
    feedback: newFeedback,
  };

  const addComments = () => {
    // console.log(data);
    dispatch(feedbackActions.addFeedBackDB(data));
  };

  const onChange = (e) => {
    setFeedback(e.target.value);
  };

  const editChange = (e) => {
    setNewFeedback(e.target.value);
  };

  const editModal = () => {
    if (!modal) {
      setModal(true);
    }
  };

  const editFeedback = () => {
    // console.log(editData);
    dispatch(feedbackActions.editFeedBackDB(editData));
    setModal(false);
  };

  const deleteFeedback = () => {
    if (!comment) {
      alert("삭제될 데이터가 없습니다.");
      return;
    }
    dispatch(feedbackActions.deleteFeedBackDB(data));
  };

  return (
    <Grid height="200px" padding="20px" bg="#F4F6F6">
      <Grid is_flex height="auto" margin="0 0 10px 0">
        <Text bg='#F4F6F6' align="center" margin="0 0 0 0" size="1.5rem" bold>
          피드백
        </Text>
        <ImageButton
          margin="0 5px 0 auto"
          size="24px"
          height="24px"
          _onClick={editModal}
        ></ImageButton>
        <ImageButton
          size="24px"
          height="24px"
          deleteIcon
          _onClick={() => {
            // 삭제확인 코드
            const onRemove = () => {
              if (window.confirm("정말 삭제합니까?") === true) {
                deleteFeedback();
              } else {
                return false;
              }
            };
            onRemove();
          }}
        ></ImageButton>
      </Grid>
      <Grid
        borderRadius="10px"
        bg="#fff"
        height="auto"
        padding="20px"
        hide={empty === "" ? "none" : null}
      >
        <Text bold size="1rem">
          "{comment}"
        </Text>
      </Grid>
      <Grid height="auto" hide={empty === "" ? null : "none"}>
        <Input
          value={empty === "" ? null : ""}
          _onChange={onChange}
          placeholder="이번주 미흡했던 부분을 적어주세요!!"
          margin="0 0 20px 0"
          padding="15px"
          onSubmit={addComments}
        ></Input>
        <Button _onClick={addComments}>입력</Button>
      </Grid>

      <Modal style={{ display: modal ? "block" : "none" }}>
        <ModalInner>
          <Text margin="0 0 20px 0" size="1.5rem" bold>
            텍스트를 수정해주세요
          </Text>
          <Input
            _onChange={editChange}
            value={empty}
            margin="0 0 20px 0"
            padding="15px"
          ></Input>
          <Button _onClick={editFeedback}>수정</Button>
        </ModalInner>
      </Modal>
    </Grid>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
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

export default Feedback;
