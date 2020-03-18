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
        auth: authReducer
    });

let store = createStore(reducers);

export default store;
