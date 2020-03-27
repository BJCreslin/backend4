import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import loginReducer from "./login-reducer";
import thunkMiddleware from "redux-thunk";
import projectsReducer from "./projects-reducer";
import tasksReducer from "./tasks-reducer";
import usersReducer from "./users2-reducer";

let reducerA = combineReducers({
        usersContent: usersReducer
    }
);

let reducers = combineReducers(
    {
        form: formReducer,
        login: loginReducer,
        projectsPage: projectsReducer,
        tasksPage: tasksReducer,
        taskUpdateForm: formReducer,
        createProjectForm: formReducer,
        usersContent: reducerA
    });

let store = createStore(reducers,
    applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
