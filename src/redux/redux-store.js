import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import {reducer as formReducer} from 'redux-form'
import loginReducer from "./login-redux";

let reducers = combineReducers(
    {
        usersPage: usersReducer,
        form: formReducer,
        login:loginReducer
    });

let store = createStore(reducers);

export default store;
