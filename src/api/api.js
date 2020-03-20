import * as axios from 'axios';
import {setCredential, setSuccessLogin, setUserEmail, setWrongCredential} from "../redux/login-reducer";


const instance = axios.create({
    baseUrl: 'http://185.255.135.104:9000/api/'
});

const loginEndPointURL = 'http://185.255.135.104:9000/api/auth/login';
const allUsersEndPointURL = 'http://185.255.135.104:9000/api/users/users-all';
const countEndPointURL = 'http://185.255.135.104:9000/api/users/count';
const allprojectsEndPointURL = 'http://185.255.135.104:9000/api/projects/projects-all';
const getTasksEndPointURL = 'http://185.255.135.104:9000/api/tasks/page/';


const setSessionId = (sessionId) => {
    instance.defaults.headers.common['SessionId'] = sessionId;
};


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

export const ProjectsAPI = {

    getAllProjects(sessionId) {
        return axios.get(allprojectsEndPointURL, {headers: {sessionId: sessionId}}).then(response => {
            return response.data;
        });
    }
};

// /{page}/{size}

export const TasksAPI = {
    getTasks(sessionId, page, size) {
        return axios.get(getTasksEndPointURL + page + "/" + size, {headers: {sessionId: sessionId}}).then(response => {
            console.log("data " + response.data);
            return response.data;
        });
    }
};



