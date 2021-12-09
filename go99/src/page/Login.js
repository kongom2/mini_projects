import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// component, element 불러오기
import {useDispatch} from 'react-redux'
import { Text, Input, Button, Grid } from "../elements/elementsIndex";
import { emailCheck,checkPassword } from "../shared/signupCheck";
import { actionCreators as userActions } from '../redux/modules/user'

const Login = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const [id,setId] = useState('')
  const [pwd,setPwd] = useState('')

  const login = () => {   
      if(id==='') {
          alert('아이디를 입력해주세요.')
          return;
      }
      if(pwd==='') {
          alert('비밀번호를 입력해주세요.')
          return;
      }
      if(!emailCheck(id)) {
          alert('유효하지 않은 이메일 형식입니다.')
          return;
      }
      dispatch(userActions.loginDB(id,pwd))
  }



  return (
    <React.Fragment>
      <Grid padding="104px 20px">
        <Grid padding="0px 0px 32px 16px">
          <Text size="36px" color="#455154" bold>
            Welcome
          </Text>
          <Text size="36px" color="#455154" bold>
            to Todo99
          </Text>
        </Grid>

        <Input
          // 입력 변경 값 이벤트
          _onChange={(e)=>{setId(e.target.value)}}
          padding="16px"
          margin="5px 0px"
          fontSize="16px"
          placeholder="아이디를 입력해주세요"
          bg="#F4F6F6"
          border="0px"
        />
        <Input
          // 입력 변경 값 이벤트
          _onChange={(e)=>{setPwd(e.target.value)}}
          type='password' 
          padding="16px"
          margin="5px 0 10px 0"
          fontSize="16px"
          placeholder="비밀번호를 입력해주세요"
          bg="#F4F6F6"
          border="0px"
        />
        <Button
          // 클릭 이벤트
          _onClick={login}
          padding="16px"
          margin="10px 0 5px 0"
          fontSize="16px"
        >
          Todo99 로그인
        </Button>
        <Button
          // 클릭 이벤트
          _onClick={() => {
            history.push("/signup");
          }}
          padding="16px"
          margin="5px 0px"
          fontSize="16px"
          bg="#4788F8"
        >
          회원가입
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
