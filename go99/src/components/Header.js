import React from "react";
import styled from "styled-components";
import { Grid, Button } from "../elements/elementsIndex";
import { HiChevronLeft } from "react-icons/hi";

import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const { is_login } = props;
  if (!is_login) {
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
              fontColor="#000000"
              _onClick={() => {}}
            ></Button>
          </Grid>
        </HeaderWrap>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Grid margin="0 0 104px 0"></Grid>
    </React.Fragment>
  );
};

Header.propTypes = {};

const HeaderWrap = styled.div`
  width: 500px;
  position: fixed;
  top: 0px;
  background-color: #fff;
`;

export default Header;
