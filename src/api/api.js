import * as axios from 'axios';

const loginEndPointURL = 'http://185.255.135.104:9000/api/auth/login';

const allprojectsEndPointURL = 'http://185.255.135.104:9000/api/projects/projects-all';
const newProjectEndPointURL = 'http://185.255.135.104:9000/api/projects/createProject';
const paginatableProjectEndPointURL = 'http://185.255.135.104:9000/api/projects/watch/';
const UPDATE_PROJECT_ENDPOINT_URL = 'http://185.255.135.104:9000/api/projects/update/';
const PROJECTS_COUNT_ENDPOINT_URL = 'http://185.255.135.104:9000/api/projects/countProjects/';
const DELETE_PROJECT_ENDPOINT_URL = 'http://185.255.135.104:9000/api/projects/delete/'             //'/delete/{projectId}'


const getTasksEndPointURL = 'http://185.255.135.104:9000/api/tasks/page/';
const TASKS_COUNT_END_POINT = 'http://185.255.135.104:9000/api/tasks/count/';
const NEW_TASK_END_POINT = 'http://185.255.135.104:9000/api/tasks/create/';
const UPDATE_TASK_END_POINT = 'http://185.255.135.104:9000/api/tasks/update/';
const DELETE_TASK_END_POINT = 'http://185.255.135.104:9000/api/tasks/delete/';


const GET_ALL_USERS_END_POINT = 'http://185.255.135.104:9000/api/users/users-all';
const USERS_COUNT_END_POINT = 'http://185.255.135.104:9000/api/users/count';
const GET_PAGINATION_END_POINT = 'http://185.255.135.104:9000/api/users/page/';

export const loginAPI = {
    doLogin(formData) {
        return axios.post(loginEndPointURL, {
            "login": formData.login,
            "password": formData.password
        }).then(response => {
            localStorage.setItem('sessionId', response.data.sessionId);
            return response.data;
        })
    }
};


export const ProjectsAPI = {
    getAllProjects() {
        let sessionId = localStorage.getItem('sessionId');
        return axios.get(allprojectsEndPointURL, {headers: {sessionId: sessionId}}).then(response => {
            return response.data;
        });
    },

    getProjectsNumber() {
        let sessionId = localStorage.getItem('sessionId');
        return axios.get(PROJECTS_COUNT_ENDPOINT_URL, {headers: {sessionId: sessionId}}).then(response => {
            return response.data;
        });
    },

    createProject(newProject) {
        let sessionId = localStorage.getItem('sessionId');
        return axios({
            method: 'POST',
            url: newProjectEndPointURL,
            headers: {sessionId: sessionId},
            data: newProject
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            })
    },

    getProjectsWithPagination(currentPage, numberForPage) {
        let sessionId = localStorage.getItem('sessionId');
        return axios.get(paginatableProjectEndPointURL + currentPage + "/" + numberForPage, {headers: {sessionId: sessionId}}).then(response => {
            return response.data;
        });
    },

    updateProject(project) {
        let sessionId = localStorage.getItem('sessionId');
        return axios.patch(UPDATE_PROJECT_ENDPOINT_URL, {headers: {sessionId: sessionId}}, {data: project}).then(response => {
            console.log(response);
            return response.data;
        })
            .catch(function (error) {
                console.log(error);
            });
    },
    deleteProject(idProject) {
        let sessionId = localStorage.getItem('sessionId');
        return axios.delete(DELETE_PROJECT_ENDPOINT_URL + idProject, {headers: {sessionId: sessionId}}).then(response => {
            console.log(response);
            return response.data;
        })
            .catch(function (error) {
                console.log(error);
            });
    }
};


export const TasksAPI = {

    getTasks(page, size) {
        let sessionId = localStorage.getItem('sessionId');
        return axios.get(getTasksEndPointURL + page + "/" + size, {headers: {sessionId: sessionId}}).then(response => {
            return response.data;
        });
    },
    getNumberOfTasks() {
        let sessionId = localStorage.getItem('sessionId');
        return axios.get(TASKS_COUNT_END_POINT, {headers: {sessionId: sessionId}}).then(response => {
            return response.data;
        })
    },
    createTask(newTask) {
        let sessionId = localStorage.getItem('sessionId');
        return axios({
            method: 'POST',
            url: NEW_TASK_END_POINT,
            headers: {sessionId: sessionId},
            data: newTask
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            })
    },
    updateTask(task) {
        let sessionId = localStorage.getItem('sessionId');
        return axios.patch(UPDATE_TASK_END_POINT, {headers: {sessionId: sessionId}}, {data: task}).then(response => {
            console.log(response);
            return response.data;
        })
            .catch(function (error) {
                console.log(error);
            });
    },
    deleteTask(taskId) {
        let sessionId = localStorage.getItem('sessionId');
        return axios.delete(DELETE_TASK_END_POINT + taskId, {headers: {sessionId: sessionId}}).then(response => {
            console.log(response);
            return response.data;
        })
            .catch(function (error) {
                console.log(error);
            });
    }
};


export const Usersapi = {

    getNumberOfUsers() {
        let sessionId = localStorage.getItem('sessionId');
        return axios.get(USERS_COUNT_END_POINT, {headers: {sessionId: sessionId}}).then(response => {
            return response.data;
        })
    },
    getPaginationUsers(page, size) {

        let sessionId = localStorage.getItem('sessionId');
        return axios.get(GET_PAGINATION_END_POINT + page + "/" + size, {headers: {sessionId: sessionId}}).then(response => {

            return response.data;
        })
    }

};

