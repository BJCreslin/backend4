import {applyMiddleware, combineReducers, createStore,compose} from "redux";
import usersReducer from "./users-reducer";
import {reducer as formReducer} from 'redux-form'
import loginReducer from "./login-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import projectsReducer from "./projects-reducer";
import tasksReducer from "./tasks-reducer";

let reducers = combineReducers(
    {
        usersPage: usersReducer,
        form: formReducer,
        login: loginReducer,
        projectsPage: projectsReducer,
        tasksPage: tasksReducer
    });

let store = createStore(reducers,
    compose(applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
window.store = store;

export default store;
