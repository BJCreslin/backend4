import * as axios from "axios";
import loginReducer from "../redux/login-reducer";
import useReducer from "react";
// import store from "../redux/redux-store";

const GET_ALL_USERS_END_POINT = 'http://185.255.135.104:9000/api/users/users-all';
const USERS_COUNT_END_POINT = 'http://185.255.135.104:9000/api/users/count';
const GET_PAGINATION_END_POINT = 'http://185.255.135.104:9000/api/users/page/';


export const UsersAPI = {

    getNumberOfUsers() {
        const [state,dispatch] = useReducer(login,InitialState,init);
        let sessionId= state.login.credential.sessionId;

        axios.get(USERS_COUNT_END_POINT, {headers: {sessionId: store.getState().login.sessionId}}).then(response => {
            return response.data;
        })
    },

    getPaginationUsers() {
        axios.get(GET_PAGINATION_END_POINT, {headers: {sessionId: store.getState().login.sessionId}}).then(response => {
            return response.data;
        })
    }
};
