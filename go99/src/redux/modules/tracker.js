import { createAction,handleAction,handleActions } from "redux-actions"

// Actions
const LOAD = "tracker/LOAD"; // 프로젝트 불러오기

// Action Creators
const logOut = createAction(LOAD,(user)=>({user}));

// 초기값
const initialStat = {
    user:null,
    is_login:false,

}

const loginFB = () => {
    return function(dispatch,getState,{history}) {
        
    }
}


// Reducer
export default function reducer(state = initialStat, action = {}) {
  switch (action.type) {
    case "project/LOAD": {
      return { ...state, project: action.project };
    }
    default:
      return state;
  }
}
