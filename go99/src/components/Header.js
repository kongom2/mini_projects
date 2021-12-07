import React from "react";
import { Text, Grid, Button } from "../elements/elementsIndex";
import { HiChevronLeft } from "react-icons/hi";

const Header = (props) => {
  const { is_login } = props;
  if (!is_login) {
    return (
      <React.Fragment>
        <Grid is_flex padding="10px 20px" margin="0 0 40px 0">
          <Grid>
            <HiChevronLeft size="40" color="#D85147" _onClick={() => {}} />
          </Grid>
          <Button
            text="로그아웃"
            bg="#ffffff"
            width="100px"
            fontColor="#000000"
            _onClick={() => {}}
          ></Button>
        </Grid>
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

export default Header;
