import React from "react";
import styled from "styled-components";
import { Grid, Button } from "../elements/elementsIndex";
import { HiChevronLeft } from "react-icons/hi";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie, getCookie, setCookie } from "../shared/cookie";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = (props) => {
    dispatch(userActions.logoutDB());
  };
  const cookie = getCookie("is_login");
  const is_login = useSelector((state) => state.user.is_login);
  console.log(cookie);
  // 토큰의 유무로 분기점 설정
  if (cookie) {
    return (
      <React.Fragment>
        <HeaderWrap>
          <Grid is_flex padding="10px 20px" margin="0 0 0px 0" bg="#F4F6F6">
            <Grid
              width="40px"
              height="40px"
              margin="0 auto 0 0"
              _onClick={() => {
                history.goBack();
              }}
              cursor="pointer"
            >
              <HiChevronLeft size="40" color="#D85147" />
            </Grid>
            <Button
              text="로그아웃"
              bg="#F4F6F6"
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
        <Grid is_flex padding="10px 20px" margin="0 0 0px 0" bg="#fff"></Grid>
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
