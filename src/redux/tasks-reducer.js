import {TasksAPI} from "../api/api";

const SET_TASKS = "SET_TASKS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_FIRST_PAGE = "SET_FIRST_PAGE";
const SET_LAST_PAGE = "SET_LAST_PAGE";

const firstPage = 1;

const initialState = {
    tasks: [],
    numberForPage: 10,
    currentPage: firstPage,
    totalCount: 0,
    totalPages: 0,
    isFetching: false,
};

let tasksReducer = (state = initialState, action) => {

        switch (action.type) {
            case SET_TASKS: {
                action.tasks.map(task => {
                    task.createDate = new Date(task.createDate).toLocaleDateString();
                    task.updateDate = new Date(task.updateDate).toLocaleDateString();
                    return {
                        task: task
                    }
                });
                return {
                    ...state,
                    tasks: action.tasks
                }
            }
            case SET_TOTAL_COUNT: {
                return {
                    ...state,
                    totalCount: action.totalCount
                }
            }
            case SET_TOTAL_PAGES: {
                return {
                    ...state,
                    totalPages: action.totalPages
                }
            }
            case SET_CURRENT_PAGE: {
                if (action.currentPage > state.totalPages) action.currentPage = state.totalPages;
                if (action.currentPage < firstPage) action.currentPage = firstPage;
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
            case SET_FIRST_PAGE: {
                return {

                    ...state,
                    currentPage: firstPage
                }
            }
            case SET_LAST_PAGE: {
                return {
                    ...state,
                    currentPage: state.totalPages
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
export const setFirstPage = () => ({type: SET_FIRST_PAGE});
export const setLastPage = () => ({type: SET_LAST_PAGE});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalPages = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getTasksThunkCreator = (currentPage, numberForPage) => {
    return (dispatch) => {
        dispatch(setToggleFetching(true));
        TasksAPI.getTasks(currentPage, numberForPage).then(data => {
            dispatch(setTasks(data));
        });
        TasksAPI.getNumberOfTasks().then(data => {
            dispatch(setTotalCount(data));
            dispatch(setTotalPages(Math.ceil(data / 10)));
            dispatch(setToggleFetching(false));
        })
    }
};

export default tasksReducer;
