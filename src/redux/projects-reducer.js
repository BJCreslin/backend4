import {ProjectsAPI, usersApi} from '../api/api';

const SET_PROJECTS = "SET_PROJECTS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


const initialState = {
    // users: [{"email":"bjcreslin@gmail.com","gitHubId":"bjcreslin","name":"Vladimir Jurievich Kreslin","hours":3,"createDate":1581665192441,"updateDate":1581665192441,"status":"BUSY"},{"email":"string@email.me","gitHubId":"string","name":"string","hours":2,"createDate":1581669345594,"updateDate":1581669345594,"status":"BUSY"},{"email":"bjcreslin@yandex.ru","gitHubId":"bjcreslin","name":"Vladimir Kreslin","hours":5,"createDate":1581669423610,"updateDate":1581669423610,"status":"BUSY"},{"email":"bjcreslin@gmail.com12","gitHubId":"bjcreslin","name":"Vladimir Jurievich Kreslin","hours":4,"createDate":1581671286758,"updateDate":1581671286758,"status":"BUSY"},{"email":"bjcreslin@gmail.com123","gitHubId":"bjcreslin","name":"Vladimir Jurievich Kreslin","hours":3,"createDate":1581698720814,"updateDate":1581698720814,"status":"BUSY"},{"email":"bjcreslin@gmail.com112","gitHubId":"bjcreslin","name":"Vladimir Jurievich Kreslin","hours":2,"createDate":1581922655462,"updateDate":1581922655462,"status":"BUSY"},{"email":"bjcreslin@gmail.com2","gitHubId":"s","name":"Vladimir Jurievich Kreslin","hours":3,"createDate":1581671613403,"updateDate":1584260138691,"status":"ACADEMIC_LEAVE"}],
    projects: [],
    numberForPage: 10,
    currentPage: 1,
    totalCount: 0,
    isFetching: false,
};

let projectsReducer = (state = initialState, action) => {

        switch (action.type) {
            case SET_PROJECTS: {

                return {
                    ...state,
                    projects: action.projects
                }
            }
            case
            SET_TOTAL_COUNT: {
                return {
                    ...state,
                    totalCount: action.totalCount
                }
            }
            case
            SET_CURRENT_PAGE: {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
            case
            TOGGLE_IS_FETCHING: {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }
            default: {
                return state;
            }
        }
    }
;

export const setProjects = (projects) => ({type: SET_PROJECTS, projects});

export const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getProjectsThunkCreator = (sessionId) => {
    return (dispatch) => {
        dispatch(setToggleFetching(true));
        ProjectsAPI.getAllProjects(sessionId).then(data => {
            dispatch(setToggleFetching(false));
            dispatch(setProjects(data));

        });
    }
};

export default projectsReducer;
