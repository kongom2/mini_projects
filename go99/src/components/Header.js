import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../elements/elementsIndex";
import { HiChevronLeft } from "react-icons/hi";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
// import { getCookie } from "../shared/cookie";

const Header = (props) => {
  const dispatch = useDispatch();

  const logOut = (props) => {
    dispatch(userActions.logoutDB());
  };
  const id = window.sessionStorage.getItem('id')
  const cookie = getCookie("is_login");
  const is_login = useSelector((state) => state.user.is_login);

  // 토큰의 유무로 분기점 설정
  if (id) {
    return (
      <React.Fragment>
        <HeaderWrap>
          <Grid is_flex padding="10px 20px" margin="0 0 0px 0" bg="#fff">
            <Grid
              width="40px"
              height="40px"
              margin="0 0 0 0"
              _onClick={() => {
                history.goBack();
              }}
              cursor="pointer"
            >
              <HiChevronLeft size="40" color="#D85147" />
            </Grid>
            <Text
              margin="0 auto 0 0"
              size="24px"
              bold
              _onClick={() => {
                history.push("/");
              }}
            >
              Todo 99
            </Text>
            <Button
              hover
              text="로그아웃"
              bg="#fff"
              width="100px"
              fontColor="#555"
              _onClick={logOut}
            ></Button>
          </Grid>
        </HeaderWrap>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <HeaderWrap>
        <Grid is_flex padding="10px 20px" margin="0 0 0px 0" bg="#fff">
          <Grid
            is_flex
            width="40px"
            height="40px"
            margin="0 0 0 0"
            _onClick={() => {
              history.goBack();
            }}
            cursor="pointer"
          >
            <HiChevronLeft size="40" color="#D85147" />
          </Grid>
        </Grid>
      </HeaderWrap>
    </React.Fragment>
  );
};

Header.propTypes = {};

const HeaderWrap = styled.div`
  width: 100%;
  max-width: 500px;
  position: fixed;
  top: 0px;
  background-color: #fff;
`;

export default Header;
