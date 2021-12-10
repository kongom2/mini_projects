import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../api/axios";

// Actions
const GET_TODOS = "GET_TODOS"; // 프로젝트 조회하기
const ADD_TODOS = "ADD_TODOS"; // 프로젝트 추가하기
// const EDIT_TODOS = "EDIT_TODOS"; // 프로젝트 수정하기
// const DELETE_TODOS = "DELETE_TODOS"; // 프로젝트 수정하기

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
// const editTodos = createAction(EDIT_TODOS, () => ({}));
// const deleteTodos = createAction(DELETE_TODOS, () => ({}));

// initialState
const initialState = {
  list: [],
};

// 미들웨어
const getTodosDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getTodo()
      .then((res) => {
        console.log("getTodosDB 접근 확인");
        let todos_list = res.data.result;
        dispatch(getTodos(todos_list));
        console.log(todos_list);
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};
const addTodosDB = (todos_id, todo_content, circles_id) => {
  return function (dispatch, getState, { history }) {
    apis
      .addTodo()
      .then((res) => {
        console.log("addTodosDB 접근 확인");
        console.log(res.data);
        let list = {
          todos_id: todos_id,
          todo_content: todo_content,
          circles_id: circles_id,
        };
        dispatch(addTodos(list));
      })
      .catch((err) => {
        console.log("Load 에러!", err);
      });
  };
};
// const editTodosDB = () => {
//   return function (dispatch, getState, { history }) {
//     // apis.
//     axios
//       .get("https://run.mocky.io/v3/854a3fee-04db-4a80-a5f6-88ce1800662a")
//       .then((res) => {
//         console.log("editTodosDB 접근 확인");
//         dispatch(editTodos());
//       })
//       .catch((err) => {
//         console.log("Load 에러!", err);
//       });
//   };
// };
// const deleteTodosDB = () => {
//   return function (dispatch, getState, { history }) {
//     // apis.
//     axios
//       .delete("https://run.mocky.io/v3/854a3fee-04db-4a80-a5f6-88ce1800662a")
//       .then((res) => {
//         console.log("deleteTodosDB 접근 확인");
//         console.log(res.data);
//         dispatch(deleteTodos());
//       })
//       .catch((err) => {
//         console.log("Load 에러!", err);
//       });
//   };
// };

// Reducer
export default handleActions(
  {
    [GET_TODOS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.todos_list;
      }),
    [ADD_TODOS]: (state, action) =>
      produce(state, (draft) => {
        // draft.list[action.payload.todos_id].unshift(
        //   action.payload.todo_content
        // );
        draft.list.push(action.payload.todo_content);
      }),
    // [EDIT_TODOS]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.editList = action.payload.Todos_name;
    //   }),
    // [DELETE_TODOS]: (state, action) =>
    //   produce(state, (draft) => {
    //     const del_list = draft.list.filter((p) => {
    //       if (p.Todos_id !== action.payload.todoss_id) {
    //         return p;
    //       }
    //     });
    //     return { list: del_list };
    //   }),
  },
  initialState
);

const actionCreators = {
  // actionCreators에 담아서

  // Action Creators
  getTodos,
  addTodos,
  // editTodos,
  // deleteTodos,
  // 미들웨어
  getTodosDB,
  addTodosDB,
  // editTodosDB,
  // deleteTodosDB,
};

export { actionCreators }; // 내보내기
