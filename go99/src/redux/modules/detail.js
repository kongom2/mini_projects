import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../api/axios";
import axios from "axios";

// Actions
const GET_TODOS = "GET_TODOS"; // 프로젝트 조회하기
const ADD_TODOS = "ADD_TODOS"; // 프로젝트 추가하기
const EDIT_TODOS = "EDIT_TODOS"; // 프로젝트 추가하기
const DELETE_TODOS = "DELETE_TODOS"; // 프로젝트 추가하기
const PATCH_CIRCLE = "PATCH_CIRCLE"; // 프로젝트 추가하기

// Action Creators
const getTodos = createAction(GET_TODOS, (todos_list) => ({ todos_list }));
const addTodos = createAction(
  ADD_TODOS,
  (todos_id, todo_content, circles_id) => ({
    todos_id,
    todo_content,
    circles_id,
  })
);
const editTodos = createAction(EDIT_TODOS, (list) => ({list}));
const deleteTodos = createAction(DELETE_TODOS, (list) => ({list}));
const patchCircle = createAction(PATCH_CIRCLE, (todos_id,list) => ({ todos_id,list }));


// initialState
const initialState = {
  list: [],
};

// 미들웨어
const getTodosDB = (circles_id) => {
  return function (dispatch, getState, { history }) {
    console.log(circles_id);
    apis
      .getTodo(circles_id)
      .then((res) => {
        console.log("getTodosDB 접근 확인");
        console.log(res);
        let todos_list = res.data.result;
        dispatch(getTodos(todos_list));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};

const addTodosDB = (circles_id, data) => {
  return function (dispatch, getState, { history }) {
    console.log(circles_id, data);
    apis
      .addTodo(circles_id, data)
      .then((res) => {
        console.log(res)
        dispatch(addTodos(data));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
        alert('오늘이 아닌 날짜의 TodoList는 수정할 수 없습니다.')
      });
  };
};

const editTodosDB = (todos_id,contents,circles) => {
  return function (dispatch, getState, { history }) {

    const circles_id = {
      todo_content:contents,
      circles_id: circles,
      todos_id:todos_id
    }

    apis
      .editTodo(todos_id,circles_id)
      .then((res) => {
        console.log(res)
        dispatch(editTodos(res));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};

const deleteTodosDB = (todos_id,circles_id) => {
  return function (dispatch, getState, { history }) {

    const circles = {
      data:{
        circles_id:circles_id
      }
    }

    apis
      .deleteTodo(todos_id,circles)
      .then((res) => {
        console.log(res)
        dispatch(deleteTodos(res));
      })
      .catch((err) => {
        console.log("Load 에러!", err);

      });
  };
};

const patchCircleDB = (todoCheck,todos_id,circles_id) => {
  return function (dispatch, getState, { history }) {

    const data ={
      todo_check : todoCheck,
      circles_id : circles_id,
    }

    apis
      .checkTodo(todos_id, data)
      .then((res) => {
        console.log(res.data)
        dispatch(patchCircle(todos_id,res.data))
      })
      .catch((err) => {
        console.log("Load 에러!", err);
        alert('오늘이 아닌 날짜의 TodoList는 수정할 수 없습니다.')
      });
  };
};


// Reducer
export default handleActions(
  {
    [GET_TODOS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.todos_list;
      }),
    [ADD_TODOS]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.todos_id)
        draft.list.push(action.payload.todos_id);
      }),

    [EDIT_TODOS]: (state, action) =>
      produce(state, (draft) => {

        draft.list = action.payload.list.data.result
    }),
    [DELETE_TODOS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list.data.result

    }),
    [PATCH_CIRCLE]: (state, action) =>
      produce(state, (draft) => { 
        let idx = draft.list.findIndex((p) => p.todos_id === action.payload.todos_id)
        let arr = [...state.list]
        draft.list = action.payload.list.result
      }),
  },
  initialState
);

const actionCreators = {
  // actionCreators에 담아서

  // Action Creators
  getTodos,
  addTodos,
  getTodosDB,
  addTodosDB,
  patchCircleDB,
  patchCircle,
  deleteTodosDB,
  deleteTodos,
  editTodos,
  editTodosDB

};

export { actionCreators }; // 내보내기
