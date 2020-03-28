import {ProjectsAPI} from '../api/api';
import React from "react";

const SET_PROJECTS = "SET_PROJECTS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_CREATED = "SET_CREATED";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_SHOW_MODAL = "SET_SHOW_MODAL";
const SET_FIRST_PAGE = "SET_FIRST_PAGE";
const SET_LAST_PAGE = " SET_LAST_PAGE";


const initialState = {
    projects: [],
    numberForPage: 10,
    currentPage: 0,
    totalCount: 0,
    totalPages: 0,
    isFetching: false,
    created: false,
    showModal: false
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
                if (action.currentPage > state.totalPages - 1) action.currentPage = state.totalPages - 1;
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
            case
            SET_CREATED:
                return {
                    ...state,
                    created: action.created
                };

            case
            SET_SHOW_MODAL:
                return {
                    ...state,
                    isShowModal: action.isShowModal

                };

            case
            SET_FIRST_PAGE:
                return {
                    ...state,
                    currentPage: 0
                };
            case  SET_LAST_PAGE:
                return {
                    ...state,
                    currentPage: state.totalPages-1
                };

            case SET_TOTAL_PAGES:
                return {
                    ...state,
                    totalPages: action.totalPages
                };
            default: {
                return state;
            }
        }
    }
;

export const setProjects = (projects) => ({type: SET_PROJECTS, projects});
export const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCreated = (created) => ({type: SET_CREATED, created});
export const setShowModal = (isShowModal) => ({type: SET_SHOW_MODAL, isShowModal});
export const setTotalPages = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});
export const setFirstPage = () => ({type: SET_FIRST_PAGE});
export const setLastPage = () => ({type: SET_LAST_PAGE});

export const setCurrentPage = (currentPage) => {
    if (currentPage < 0) currentPage = 0;

    return {type: SET_CURRENT_PAGE, currentPage}
};


export const getPaginationProjectsThunkCreator = (currentPage, totalPages) => {
    return (dispatch) => {
       // dispatch(setToggleFetching(true));
        ProjectsAPI.getProjectsWithPagination(currentPage, totalPages).then(data => {
            dispatch(setToggleFetching(false));
            dispatch(setProjects(data.content));
            dispatch(setTotalPages(data.totalPages));
            dispatch(setCreated(false));
        });
    }
};

export const createProjectThunkCreator = (sessionId, project) => {

    return (dispatch) => {
        dispatch(setToggleFetching(true));
        ProjectsAPI.createProject(sessionId, project).then(data => {
        });
        ProjectsAPI.getAllProjects(sessionId).then(data => {
            dispatch(setToggleFetching(false));
            dispatch(setProjects(data));
            dispatch(setCreated(true))

        });
    }
};

export default projectsReducer;
