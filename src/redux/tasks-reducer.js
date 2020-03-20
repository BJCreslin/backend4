import {TasksAPI} from "../api/api";

const SET_TASKS = "SET_TASKS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


const initialState = {
    tasks: [],
    numberForPage: 10,
    currentPage: 1,
    totalCount: 0,
    isFetching: false,
};

let tasksReducer = (state = initialState, action) => {

        switch (action.type) {
            case SET_TASKS: {

                return {
                    ...state,
                    tasks: action.tasks
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

export const setTasks = (tasks) => ({type: SET_TASKS, tasks});

export const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getTasksThunkCreator = (sessionId, currentPage, numberForPage) => {
    return (dispatch) => {
        dispatch(setToggleFetching(true));
        TasksAPI.getTasks(sessionId, currentPage, numberForPage).then(data => {
            dispatch(setToggleFetching(false));
            dispatch(setTasks(data));

        });
    }
};

export default tasksReducer;
