import {usersApi} from '../api/api';

const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


const initialState = {
    users: [],
    numberForPage: 10,
    currentPage: 1,
    totalCount: 0,
    isFetching: false,
};

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            action.users.map(user => {
                user.createDate = new Date(user.createDate).toLocaleDateString();
                user.updateDate = new Date(user.updateDate).toLocaleDateString();
                return {
                    user
                }
            });
            return {
                ...state,
                users: action.users
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: {
            return state;
        }
    }
};

export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(setToggleFetching(true));
        usersApi.getAllUsers().then(data => {
            dispatch(setToggleFetching(false));
            dispatch(setUsers(data));

        });
    }
};

export default usersReducer;
