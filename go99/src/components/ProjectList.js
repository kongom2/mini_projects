import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import {
  Text,
  ImageButton,
  Grid,
  Input,
  Button,
} from "../elements/elementsIndex";
import { actionCreators as projectActions } from "../redux/modules/project";
import { useSelector, useDispatch } from "react-redux";

const ProjectList = (props) => {
  // 디스패치, 히스토리 선언
  const dispatch = useDispatch();

  // 데이터 선택
  const project_list = useSelector((state) => state.project.list);
  const id = window.sessionStorage.getItem("id");
  // DB에서 불러오기
  useEffect(() => {
    // const token = localStorage.getItem("token")
    const id = window.sessionStorage.getItem("id");
    // console.log(token)
    // console.log(id)
    dispatch(projectActions.getProjectDB(id));
  }, []);

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [newProjectName, setNewProjectName] = useState("");

  const editModal = () => {
    if (!modal) {
      setModal(true);
    }
  };

  const editText = () => {
    // 필요한거? 프로젝트 아이디/새 포르젝트 네임
    dispatch(projectActions.editProjectDB(name, id, newProjectName));
    setModal(false);
  };

  const onChange = (e) => {
    setNewProjectName(e.target.value);
  };

  return (
    <React.Fragment>
      {project_list.map((item, index) => {
        const projects_id = item.projects_id;
        const projects_title = item.project_title;
        const deleteDB = () => {
          dispatch(projectActions.deleteProjectDB(projects_id, id));
        };
        // 삭제확인 코드
        const onRemove = () => {
          if (window.confirm("정말 삭제합니까?") === true) {
            deleteDB();
            alert("삭제되었습니다.");
          } else {
            return false;
          }
        };
        const test = () => {
          console.log("1");
        };
        return (
          <Grid padding="16px" key={index}>
            <Grid is_flex>
              <Pointer>
                <Text
                  size="36px"
                  bold="bold"
                  color="#455154"
                  margin="0px 10px"
                  _onClick={() => {
                    history.push(
                      `main/${item.project_title}_${item.projects_id}`
                    );
                  }}
                >
                  {item.project_title} 99
                </Text>
              </Pointer>
              <ImageButton
                size="24px"
                margin="0px 0px 0px auto"
                _onClick={() => {
                  editModal();
                  setName(projects_id);
                  setProjectName(projects_title);
                }}
              />
              <ImageButton
                size="24px"
                margin="0px 10px 0px 15px"
                deleteIcon
                key={index}
                _onClick={() => {
                  onRemove();
                }}
              />
            </Grid>
            <Hr />
          </Grid>
        );
      })}
      {modal ? (
        <Modal style={{ display: modal ? "block" : "none" }}>
          <ModalInner>
            <Text margin="0 0 20px 0" size="1.5rem" bold>
              텍스트를 수정해주세요
            </Text>
            <Input
              _onChange={onChange}
              value={projectName}
              margin="0 0 20px 0"
              padding="15px"
            ></Input>
            <Button _onClick={editText}>수정</Button>
          </ModalInner>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default ProjectList;

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

const Hr = styled.hr`
  margin: 20px 0px 0px 0px;
`;

const Pointer = styled.div`
  cursor: pointer;
`;
