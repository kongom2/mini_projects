import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";

<<<<<<< HEAD
import { deleteCookie, getCookie, setCookie } from "../../shared/cookie";
import { apis } from "../../api/axios";
=======
import { deleteCookie,getCookie,setCookie } from "../../shared/cookie"
import { apis } from '../../api/axios';
>>>>>>> 3d6df015294a7f2c8d54eaa1ea65969e34f46252

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
<<<<<<< HEAD
const loginDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    // 로그인 api
    const user = {
      userId: id,
      pw: pwd,
    };
    apis
      .login(user)
      .then((res) => {
        const jwtToken = res.data.token;
        localStorage.setItem("token", jwtToken);
        dispatch(setUser({ id: id, user_name: id }));
        alert("로그인이 완료되었습니다!");
        history.push("/project");
      })
      .catch((err) => {
        console.log(err);
        window.alert("회원정보가 일치하지 않습니다.(프론트)!");
        return;
      });

    // // 파이어베이스
    // auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
    //     auth.signInWithEmailAndPassword(id, pwd)
    //     .then((user) => {
    //         dispatch(setUser({id:id}));
    //         alert('로그인이 완료되었습니다!')
    //         history.push('/project')
    //     })
    //     .catch((error) => {
    //     });
    // })
  };
};

const signupDB = (id, userName, pwd, pwdCheck) => {
  return function (dispatch, getState, { history }) {
    //api
    const user = {
      userId: id,
      nickname: userName,
      pw1: pwd,
      pw2: pwdCheck,
    };
    apis
      .signUp(user)
      .then(() => {
        window.alert("회원가입을 축하드립니다!");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert();
      });

    // auth.
    // createUserWithEmailAndPassword(id, pwd)
    // .then((user) => {
    //     auth.currentUser.updateProfile({
    //         displayName: userName
    //     }).then(()=>{
    //         dispatch(setUser({user_name:userName, id:id}));
    //         alert('이제부터 GOGO 99 !!')
    //         history.push('/')
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // })
    // .catch((error) => {
    //     let errorCode = error.code;
    //     let errorMessage = error.message;
    //     console.log(errorCode,errorMessage)
    // });
  };
};
=======
const loginDB = (id,pwd) => {
    return function(dispatch,getState,{history}) {
        
        // 로그인 api
        const user = {
          userId:id,
          pw:pwd
        }
        apis
        .login(user)
        .then((res) => {
            const jwtToken = res.data.token;
            localStorage.setItem('token', jwtToken)
            dispatch(setUser({id:id,user_name:id}));
            alert('로그인이 완료되었습니다!')
            history.push('/project')
        }).catch((err) => {
            console.log(err);
            window.alert("회원정보가 일치하지 않습니다.(프론트)!");
            return;
        });

        // // 파이어베이스
        // auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
        //     auth.signInWithEmailAndPassword(id, pwd)
        //     .then((user) => {
        //         dispatch(setUser({id:id}));
        //         alert('로그인이 완료되었습니다!')
        //         history.push('/project')
        //     })
        //     .catch((error) => {
        //     });
        // })

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

        // auth.
        // createUserWithEmailAndPassword(id, pwd)
        // .then((user) => {
        //     auth.currentUser.updateProfile({
        //         displayName: userName
        //     }).then(()=>{
        //         dispatch(setUser({user_name:userName, id:id}));
        //         alert('이제부터 GOGO 99 !!')
        //         history.push('/')
        //     }).catch((error)=>{
        //         console.log(error)
        //     })
        // })
        // .catch((error) => {
        //     let errorCode = error.code;
        //     let errorMessage = error.message;
        //     console.log(errorCode,errorMessage)
        // });

    }
}
>>>>>>> 3d6df015294a7f2c8d54eaa1ea65969e34f46252

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const localToken = localStorage.getItem("token");
    const token = { userToken: localToken };
    apis
      .loginCheck(token)
      .then((res) => {
        console.log(res);
        dispatch(setUser([res]));
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 정보가 없습니다.");
        history.push("/");
      });
  };
};

// 토큰삭제
const logoutDB = () => {
<<<<<<< HEAD
  return function (dispatch, getState, { history }) {
    auth
      .signOut()
      .then(() => {
        dispatch(logOut());
        alert("로그아웃 되었습니다.");
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
        alert("삭제가 안되요");
      });
  };
};
=======
    return function (dispatch,getState,{history}) {
        dispatch(logOut());
        alert('로그아웃 되었습니다.')
    }
}
>>>>>>> 3d6df015294a7f2c8d54eaa1ea65969e34f46252

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
