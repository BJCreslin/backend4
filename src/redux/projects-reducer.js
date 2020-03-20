import {ProjectsAPI, usersApi} from '../api/api';

const SET_PROJECTS = "SET_PROJECTS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


const initialState = {
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
