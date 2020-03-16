const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


const initialState = {
    // users: [{"email":"bjcreslin@gmail.com","gitHubId":"bjcreslin","name":"Vladimir Jurievich Kreslin","hours":3,"createDate":1581665192441,"updateDate":1581665192441,"status":"BUSY"},{"email":"string@email.me","gitHubId":"string","name":"string","hours":2,"createDate":1581669345594,"updateDate":1581669345594,"status":"BUSY"},{"email":"bjcreslin@yandex.ru","gitHubId":"bjcreslin","name":"Vladimir Kreslin","hours":5,"createDate":1581669423610,"updateDate":1581669423610,"status":"BUSY"},{"email":"bjcreslin@gmail.com12","gitHubId":"bjcreslin","name":"Vladimir Jurievich Kreslin","hours":4,"createDate":1581671286758,"updateDate":1581671286758,"status":"BUSY"},{"email":"bjcreslin@gmail.com123","gitHubId":"bjcreslin","name":"Vladimir Jurievich Kreslin","hours":3,"createDate":1581698720814,"updateDate":1581698720814,"status":"BUSY"},{"email":"bjcreslin@gmail.com112","gitHubId":"bjcreslin","name":"Vladimir Jurievich Kreslin","hours":2,"createDate":1581922655462,"updateDate":1581922655462,"status":"BUSY"},{"email":"bjcreslin@gmail.com2","gitHubId":"s","name":"Vladimir Jurievich Kreslin","hours":3,"createDate":1581671613403,"updateDate":1584260138691,"status":"ACADEMIC_LEAVE"}],
    users:[],
    numberForPage: 10,
    currentPage: 1,
    totalCount: 0,
    isFetching: false,
};

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {

            let usersWithNormalDate=action.users.map(user=>{
                user.createDate=new Date(user.createDate).toLocaleDateString();
                user.updateDate=new Date(user.updateDate).toLocaleDateString();
                return{
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
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;
