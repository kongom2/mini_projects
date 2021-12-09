import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Text, ImageButton, Grid,Input,Button } from "../elements/elementsIndex";
import { actionCreators as projectActions } from "../redux/modules/project";
import { useSelector, useDispatch } from "react-redux";

const ProjectList = () => {
  // 디스패치, 히스토리 선언
  const dispatch = useDispatch();
  const history = useHistory();

  // 데이터 선택
  const project_list = useSelector((state) => state.project.list);

  // DB에서 불러오기
  useEffect(() => {
    dispatch(projectActions.getProjectDB());
  }, []);

  const [modal,setModal] = useState(false)

  const editModal = () => {
    if(!modal) {
      setModal(true)
    }
  } 

  const editText = () => {
    setModal(false)
  };

  return (
    <React.Fragment>
      {project_list.map((item, index) => {
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
                    history.push(`main/${item.projects_name}`);
                  }}
                >
                  {item.projects_name}
                </Text>
                </Pointer>
                <ImageButton
                size='24px'
                  margin="0px 0px 0px auto"
                  _onClick={editModal}
                />
                <ImageButton
                  size='24px'
                  margin="0px 10px 0px 15px"
                  deleteIcon
                  key={index}
                  _onClick={() => {
                    dispatch(projectActions.deleteProject(item.project_id));
                  }}
                />
            </Grid>
            <Hr />
          </Grid>
          
        );
      })}
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

export default ProjectList;

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

const Hr = styled.hr`
  margin: 20px 0px 0px 0px;
`;

const Pointer = styled.div`
  cursor: pointer;
`