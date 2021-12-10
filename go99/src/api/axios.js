import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://13.125.149.78",
  // 헤더에 넣을 정보
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// instance.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

export const apis = {
  // 로그인
  // user  = {userID:id , pw:pw}
  login: (user) => instance.post("/api/login", user),
  signUp: (user) => instance.post("/api/register", user),

  // 로그인
  // user  = {userID:id , pw:pw}
  login: (user) => instance.post("/api/login", user),
  signUp: (user) => instance.post("/api/register", user),

  // 프로젝트 리스트
  // id = {userID : id}
  getProjects: (id) => instance.get(`/api/projects/?userId=${id}`),
  // title = {userID:id, projects_title = title}
  addProjects: (title) => instance.post("/api/projects", title),
  editProjects: (projects_id, data) =>
    instance.put(`api/projects/${projects_id}`, data),
  deleteProjects: (projects_id, userId) =>
    instance.delete(`api/projects/${projects_id}`, userId),

  // 메인페이지(서클즈 조회)
  // 쿼리로 id보내기
  getCircles: (project_id, user_id) =>
    instance.get(
      `/api/projects/${project_id}/circles/?projects_id=${project_id}&user_id=${user_id}`
    ),

  // 메인페이지(서클즈 조회)
  // 쿼리로 id보내기
  getCircles: (project_id, user_id) =>
    instance.get(
      `/api/projects/${project_id}/circles/?projects_id=${project_id}&user_id=${user_id}`
    ),

  // 투두리스트
  // get으로 circles_id: id 를 보낼수 있을까요?
  getTodo: (circles_id) => instance.get(`api/todos?circles_id=${circles_id}`),
  // list = {todos_id :circleID+date(고유아이디) todo_content: content, circles_id: circleID}
  addTodo: (circles_id, list) =>
    instance.post(`/api/todos?circles_id=${circles_id}`, list),
  // data = { todos_id:id , todo_content: content, circles_id: circleID }
  editTodo: (todos_id, data) => instance.put(`/api/todos/${todos_id}`, data),
  // data = { todos_id:id , circles_id: circleID }
  deleteTodo: (todos_id, data) =>
    instance.delete(`/api/todos/${todos_id}`, data),
  // check = { todo_check : false or true , circles_id: circleID }
  // check시에 체크사항이 바로 반영이 되나요??
  checkTodo: (todos_id, check) =>
    instance.patch(`/api/todos/${todos_id}`, check),

  // 피드백 투두리스트
  getFeedBack: (circles_id) =>
    instance.get(`/api/circles/${circles_id}/feedback`),
  // contents = {projects_title = title, circles_id: circleID, contents:contents}
  addFeedBack: (circles_id, data) =>
    instance.post(`/api/circles/${circles_id}/feedback`, data),
  editFeedBack: (circles_id, data) =>
    instance.put(`/api/circles/${circles_id}/feedback`, data),
  // id = { projects_title = title , circles_id: circleID }
  deleteFeedBack: (circles_id, id) =>
    instance.delete(`/api/circles/${circles_id}/feedback`, id),

  // 본인확인
  loginCheck: (token) => instance.post("/api/users/me", token),
};
