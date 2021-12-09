import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// component, element 불러오기
import { ProjectList, AddList } from "../components/componentIndex";
import { Text, Grid } from "../elements/elementsIndex";
import {apis} from '../api/axios'
import { history } from "../redux/configureStore";

<<<<<<< HEAD
const Project = (props) => {
  const dispatch = useDispatch();

  const user_name = useSelector((state) =>
    state.user.user !== null ? state.user.user.id : null
  );
  const [projects_name, setProjectText] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setProjectText(e.target.value);
  };
  const write = () => {
    console.log(projects_name);
    dispatch(projectActions.addProjectDB(projects_name));
    setProjectText("");
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   apis
  //     .loginCheck(token)
  //     .then((res) => {
  //       console.log("야호");
  //       return res;
  //     })
  //     .catch((err) => {
  //       alert("로그인 정보가 없습니다!");
  //       history.push("/");
  //     });
  // }, []);
=======
const Project = () => {

  useEffect(() => {
    const token = localStorage.getItem("token")
    apis
    .loginCheck(token)
    .then((res) => {
        console.log('야호')
        return res
    })
    .catch((err) => {
        alert('로그인 정보가 없습니다!')
        history.push('/')
    })
  },[])

>>>>>>> 3d6df015294a7f2c8d54eaa1ea65969e34f46252

  const loginUser = "로그인한 유저"; // useSelector((state) => state.user.loginUser);
  return (
    <React.Fragment>
      <Grid padding="104px 20px">
        <Grid padding="0px 0px 32px 16px">
          <Text size="36px" color="#455154" bold>
            {user_name} 님의
          </Text>
          <Text size="36px" color="#455154" bold>
            프로젝트 리스트
          </Text>
        </Grid>
        <ProjectList />
      </Grid>
      <AddListWrap>
        <AddList></AddList>
      </AddListWrap>
    </React.Fragment>
  );
};

const AddListWrap = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100px;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
`;

export default Project;
