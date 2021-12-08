// Actions
const LOAD = "project/LOAD"; // 프로젝트 불러오기

// Action Creators
export function loadProject(project) {
  return { type: LOAD, project };
}

const initialState = {
  project_list: [

  ],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "project/LOAD": {
      console.log(action.project)
      return { ...state,...action.project };
    }
    default:
      return state;
  }
}
