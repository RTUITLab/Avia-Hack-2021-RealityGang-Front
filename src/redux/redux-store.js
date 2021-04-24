import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth-reducer";
import messageReducer from "./message-reducer";


let reducers = combineReducers({
    auth: authReducer,
    messages: messageReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
