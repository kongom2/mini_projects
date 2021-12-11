import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { deleteCookie, setCookie } from "../../shared/cookie";
import { apis } from "../../api/axios";

<<<<<<< HEAD
=======

>>>>>>> c96c9c537219721ec64a4a037252619524f1acdd
// 액션
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 액션 크리에이터
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// 초기값
const initialStat = {
  user: null,
  is_login: false,
};

const loginDB = (id,pwd) => {
    return function(dispatch,getState,{history}) {
        
        // 로그인 api
        const user = {
          userId:id,
          pw:pwd
        }
        console.log(user)
        apis
        .login(user)
        .then((res) => {
            const niceName = res.data.nickname

            const jwtToken = res.data.token;

            localStorage.setItem('token', jwtToken)
            window.sessionStorage.setItem('id', id);
            window.sessionStorage.setItem('nickname', niceName);

            dispatch(setUser({id:id,user_name:id}));
            alert('로그인이 완료되었습니다!')
            history.push('/project')
        }).catch((err) => {
            console.log(err);
            window.alert("회원정보가 일치하지 않습니다.(프론트)!");
            return;
        });

    }
}

const signupDB = (id,userName,pwd,pwdCheck) => {
    return function (dispatch,getState,{history}) {

        //api
        const user = {
            userId : id,
            nickname: userName,
            pw1: pwd,
            pw2: pwdCheck,
        }
        apis
        .signUp(user)
        .then(() => {
            window.alert("회원가입을 축하드립니다!");
            history.push("/");
        })
        .catch((err) => {
            console.log(err)
            window.alert(err);
        })


    }
}

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const localToken = localStorage.getItem("token");
    const token = { token: localToken };
    apis
      .loginCheck(token)
      .then((res) => {
        console.log(res);
        // dispatch(setUser([res]));
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 정보가 없습니다.");

      });
  };
};

// 토큰삭제
const logoutDB = () => {
    return function (dispatch,getState,{history}) {
        dispatch(logOut());
        alert('로그아웃 되었습니다.')
        history.push("/");
        window.location.reload()
    }
}

//리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "SUCCESS");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        localStorage.removeItem("token");
        window.sessionStorage.clear();
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialStat
);

const actionCreators = {
  logOut,
  getUser,
  signupDB,
  loginDB,
  loginCheckDB,
  logoutDB,
};

export { actionCreators };
