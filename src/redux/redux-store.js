import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import {reducer as formReducer} from 'redux-form'
import loginReducer from "./login-redux";
import authReducer from "./auth-reducer";

let reducers = combineReducers(
    {
        usersPage: usersReducer,
        form: formReducer,
        login: loginReducer,
    });

let store = createStore(reducers);
window.store = store;

export default store;
