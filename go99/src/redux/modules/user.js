import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";
import firebase from "firebase/compat/app";
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

// const user_initial = {
//     user_name:''
// }

// 미들웨어 액션
const loginDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
      auth
        .signInWithEmailAndPassword(id, pwd)
        .then((user) => {
          dispatch(setUser({ id: id }));
          alert("로그인이 완료되었습니다!");
          history.push("/project");
        })
        .catch((error) => {});
    });
  };
};

const signupDB = (id, userName, pwd, pwdCheck) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        auth.currentUser
          .updateProfile({
            displayName: userName,
          })
          .then(() => {
            dispatch(setUser({ user_name: userName, id: id }));
            alert("이제부터 GOGO 99 !!");
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            user_name: user.displayName,
            id: user.email,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  };
};

// 토큰삭제
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    auth.signOut().then(() => {
      dispatch(logOut());
      alert("로그아웃 되었습니다.");
      history.replace("/");
    });
  };
};

//리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "SUCCESS");
        draft.user = action.payload.user;
        console.log(draft.user);
        console.log("실행은 됬음");
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
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
