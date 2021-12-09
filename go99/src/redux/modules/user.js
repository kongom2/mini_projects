import { createAction,handleAction,handleActions } from "redux-actions"
import { produce } from "immer"

import { deleteCookie,getCookie,setCookie } from "../../shared/Cookie"

import {auth} from "../../shared/firebase"
import firebase from "firebase/compat/app"
// 액션
const LOG_IN = "LOG_IN"
const LOG_OUT = "LOG_OUT"
const GET_USER = "GET_USER"
const SET_USER = "SET_USER"

// 액션 크리에이터
const logOut = createAction(LOG_OUT,(user)=>({user}));
const getUser = createAction(GET_USER,(user)=>({user}));
const setUser = createAction(SET_USER,(user)=>({user}));

// 초기값
const initialStat = {
     user:null,
     is_login:false,

}

const user_initial = {
    user_name:'hthh'
}

// 미들웨어 액션
const loginFB = (id,pwd) => {
    return function(dispatch,getState,{history}) {
        
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
            auth.signInWithEmailAndPassword(id, pwd)
            .then((user) => {

                dispatch(setUser({user_name:user.user.displayName,id:id,user_profile:'',uid:user.user.uid}));
                history.push('/')
            })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
            });
        })
    }
}

const joinFB = (id,pwd,user_name) => {
    return function (dispatch,getState,{history}) {
        auth.
        createUserWithEmailAndPassword(id, pwd)
        .then((user) => {
            auth.currentUser.updateProfile({
                displayName: user_name
            }).then(()=>{
                dispatch(setUser({user_name:user_name,id:id,user_profile:'',uid:user.user.uid}));
                history.push('/')
            }).catch((error)=>{
                console.log(error)
            })
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode,errorMessage)
        });

    }
}

const loginCheckFB = () => {
    return function (dispatch,getState,{history}) {

        auth.onAuthStateChanged((user) => {
            if(user) {
                dispatch(setUser({
                    user_name:user.displayName,
                    id:user.email,
                    user_profile:'',
                    uid:user.uid
                }))
            } else {
                dispatch(logOut())
            }
        })
    }
}

const logoutFB = () => {
    return function (dispatch,getState,{history}) {
        auth.signOut().then(()=> {
            dispatch(logOut());
            history.replace('/')
        })
    }
}

//리듀서
export default handleActions(
    {
        [SET_USER]: (state,action) => produce(state,(draft)=>{
            setCookie("is_login","SUCCESS")
            draft.user = action.payload.user;
            draft.is_login = true
        }),
        [LOG_OUT]: (state,action) => produce(state,(draft)=>{
            deleteCookie('is_login');
            draft.user = null;
            draft.is_login = false;
        }),
        [GET_USER]: (state,action) => produce(state,(draft)=>{
            
        }),
    },
    initialStat
);

const actionCreators = {
    logOut,getUser,joinFB,loginFB,loginCheckFB,logoutFB
}

export {actionCreators }