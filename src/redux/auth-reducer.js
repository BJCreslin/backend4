const SET_USER_DATA = "SET_USER_DATA";


const InitialState = {
    credential: {
        sessionId: null,
        startTime: 0,
        validTime: 0
    },
    isAuthenticated: false,
    userEmail:null

};

const authReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                credential: action.credential
            };
        default:
            return {
                ...state
            }

    }
};

export const setAuthUserData = (credential) => ({type: SET_USER_DATA, credential: credential});
export default authReducer;
