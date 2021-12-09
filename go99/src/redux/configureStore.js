import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import project from "./modules/project";
import detail from "./modules/detail";
import main from "./modules/main";
import feedBack from "./modules/feedBack";
import user from "./modules/user";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: user,
  feedBack: feedBack,
  main: main,
  project: project,
  detail: detail,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];
const enhancer = applyMiddleware(...middlewares);

const store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
