import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authreducer as auth } from "../reducers/authreducer";

const reducers = combineReducers({
    auth
})

let middleware = [thunk];

export default createStore(reducers, {}, applyMiddleware(...middleware));