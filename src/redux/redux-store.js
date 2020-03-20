import {applyMiddleware, combineReducers, createStore,compose} from "redux";
import usersReducer from "./users-reducer";
import {reducer as formReducer} from 'redux-form'
import loginReducer from "./login-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers(
    {
        usersPage: usersReducer,
        form: formReducer,
        login: loginReducer,
    });

let store = createStore(reducers,
    compose(applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
window.store = store;

export default store;
