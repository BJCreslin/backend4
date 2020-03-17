import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers(
    {
        usersPage: usersReducer,
        form: formReducer
    });

let store = createStore(reducers);

export default store;
