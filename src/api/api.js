import * as axios from 'axios';
import store from "../redux/redux-store";


const loginEndPointURL = 'http://185.255.135.104:9000/api/auth/login';

const allprojectsEndPointURL = 'http://185.255.135.104:9000/api/projects/projects-all';
const newProjectEndPointURL = 'http://185.255.135.104:9000/api/projects/createProject';
const paginatableProjectEndPointURL = 'http://185.255.135.104:9000/api/projects/watch/';

const getTasksEndPointURL = 'http://185.255.135.104:9000/api/tasks/page/';


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



export const ProjectsAPI = {

        getAllProjects(sessionId) {
            return axios.get(allprojectsEndPointURL, {headers: {sessionId: store.getState().login.sessionId}}).then(response => {
                return response.data;
            });
        },

        createProject(sessionId, newProject) {
            return axios({
                method: 'POST',
                url: newProjectEndPointURL,
                headers: {sessionId: store.getState().login.sessionId},
                data: newProject
            }).then(function (response) {
                console.log(response);
            })
                .catch(function (error) {
                    console.log(error);
                })
        },

        getProjectsWithPagination() {
            let currentPage = store.getState().projectsPage.currentPage;
            let numberForPage = store.getState().projectsPage.numberForPage;
            return axios.get(paginatableProjectEndPointURL + currentPage + "/" + numberForPage, {headers: {sessionId: store.getState().login.sessionId}}).then(response => {
                return response.data;
            });
        }
    }
;


export const TasksAPI = {
    getTasks(sessionId, page, size) {
        return axios.get(getTasksEndPointURL + page + "/" + size, {headers: {sessionId: sessionId}}).then(response => {
            console.log("data " + response.data);
            return response.data;
        });
    }
};



