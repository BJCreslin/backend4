import * as axios from 'axios';
import {setCredential, setSuccessLogin, setUserEmail, setWrongCredential} from "../redux/login-reducer";


const instance = axios.create({
    baseUrl: 'http://185.255.135.104:9000/api/'
});

const loginEndPointURL = 'http://185.255.135.104:9000/api/auth/login';
const allUsersEndPointURL = 'http://185.255.135.104:9000/api/users/users-all';
const countEndPointURL = 'http://185.255.135.104:9000/api/users/count';

const setSessionId = (sessionId) => {
    instance.defaults.headers.common['SessionId'] = sessionId;
};

// let sessionId = response.data.sessionId;
// // dispatch.setUserEmail(formData.login);
// // dispatch(setCredential(response.data));
// // if (!sessionId) {
// //     dispatch(setWrongCredential());
// //
// // } else {
// //     dispatch(setUserEmail(formData.login));
// //     dispatch(setSessionId(sessionId));
// //     dispatch(setSuccessLogin());
// // }

export const loginAPI = {
    doLogin(formData) {
            return axios.post(loginEndPointURL, {
                "login": formData.login,
                "password": formData.password
            }).then(response => {
                return response.data;
            })
        }
};

export const usersApi = {
    getAllUsers() {
        return axios.get(allUsersEndPointURL).then(response => {
            return response.data;
        });
    },
    getNumberOfUsers() {
        axios.get(countEndPointURL).then(response => {
            return response.data;
        })
    }


};
