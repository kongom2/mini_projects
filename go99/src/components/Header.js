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
  const id = localStorage.getItem("token");
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
              margin="0 0 0 45px"
              size="1.5rem"
              cursor="pointer"
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
              _onClick={() => {
                // 삭제확인 코드
                const onRemove = () => {
                  if (window.confirm("로그아웃 하시겠습니까?") === true) {
                    logOut();
                  } else {
                    return false;
                  }
                };
                onRemove();
              }}
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
