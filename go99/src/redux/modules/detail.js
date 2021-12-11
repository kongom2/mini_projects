import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../api/axios";

// Actions
const GET_TODOS = "GET_TODOS"; // 프로젝트 조회하기
const ADD_TODOS = "ADD_TODOS"; // 프로젝트 추가하기
const EDIT_TODOS = "EDIT_TODOS"; // 프로젝트 수정하기
const DELETE_TODOS = "DELETE_TODOS"; // 프로젝트 수정하기

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
const editTodos = createAction(
  EDIT_TODOS,
  (todos_id, circles_id, todo_content) => ({
    todos_id,
    circles_id,
    todo_content,
  })
);
const deleteTodos = createAction(DELETE_TODOS, (todos_id, circles_id) => ({
  todos_id,
  circles_id,
}));

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
        dispatch(addTodos(data));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
        alert("이전 날짜의 TodoList는 수정할 수 없습니다.");
      });
  };
};
const editTodosDB = (todos_id, circles_id, todo_content) => {
  return function (dispatch, getState, { history }) {
    console.log(todos_id, circles_id, todo_content);
    apis
      .editTodo(todos_id, circles_id, todo_content)
      .then((res) => {
        console.log(res.data);
        const list = res.data;
        console.log("editTodosDB 접근 확인");
        dispatch(editTodos(list));
        window.alert("오늘 할일 이름 수정 완료!");
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};
const deleteTodosDB = (todos_id, circles_id) => {
  return function (dispatch, getState, { history }) {
    apis
      .deleteTodo(todos_id, circles_id)
      .then((res) => {
        console.log("deleteTodosDB 접근 확인");
        console.log(res.data);
        dispatch(deleteTodos());
      })
      .catch((err) => {
        console.log("Load 에러!", err);
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
        console.log(action.payload.todos_id);
        draft.list.push(action.payload.todos_id);
      }),
    [EDIT_TODOS]: (state, action) =>
      produce(state, (draft) => {
        draft.editList = action.payload.todo_content;
      }),
    [DELETE_TODOS]: (state, action) =>
      produce(state, (draft) => {
        const del_list = draft.list.filter((todo) => {
          if (todo.Todos_id !== action.payload.Todos_id) {
            return todo;
          }
        });
        return { list: del_list };
      }),
  },
  initialState
);

const actionCreators = {
  // actionCreators에 담아서

  // Action Creators
  getTodos,
  addTodos,
  editTodos,
  deleteTodos,
  // 미들웨어
  getTodosDB,
  addTodosDB,
  editTodosDB,
  deleteTodosDB,
};

export { actionCreators }; // 내보내기
