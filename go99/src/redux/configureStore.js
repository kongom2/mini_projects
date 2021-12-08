import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import project from "./modules/project";
import main from "./modules/main";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    main:main,
    project:project,
    router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];
const enhancer = applyMiddleware(...middlewares);

const store = (initialStore) => createStore(rootReducer, enhancer);

export default store()
