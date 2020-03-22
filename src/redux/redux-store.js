import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import usersReducer from "./users-reducer";
import {reducer as formReducer} from 'redux-form'
import loginReducer from "./login-reducer";
import thunkMiddleware from "redux-thunk";
import projectsReducer from "./projects-reducer";
import tasksReducer from "./tasks-reducer";

let reducers = combineReducers(
    {
        usersPage: usersReducer,
        form: formReducer,
        login: loginReducer,
        projectsPage: projectsReducer,
        tasksPage: tasksReducer,
        taskUpdateForm: formReducer,
        createProjectForm: formReducer
    });

let store = createStore(reducers,
    applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
