const SET_SUBMIT_SUCCEEDED = "SET_SUBMIT_SUCCEEDED";
const SET_WRONG_CREDENTIAL = "SET_WRONG_CREDENTIAL";
const SET_SUCCESS_LOGIN = "SET_SUCCESS_LOGIN";

const InitialState = {
    credential: {
        sessionId: null,
        startTime: 0,
        validTime: 0
    },
    credentialStatus: false
};


let loginReducer = (state = InitialState, action) => {
    console.log("zgf" + action.type+"  "+action.credential);
    switch (action.type) {
        case SET_SUBMIT_SUCCEEDED:
            console.log("ggg " + action.credential.sessionId)
            return {
                ...state,
                credential: action.credential
            };
        case SET_WRONG_CREDENTIAL:
            return {
                ...state,
                credentialStatus: false
            };
        case SET_SUCCESS_LOGIN:
            return {
                ...state,
                credentialStatus: true
            };

        default: {
            return state;
        }
    }
};

export const setCredential = (credential) => ({type: SET_SUBMIT_SUCCEEDED, credential: credential});
export const setWrongCredential = () => ({type: SET_WRONG_CREDENTIAL});
export const setSuccessLogin = () => ({type: SET_SUCCESS_LOGIN});

export default loginReducer;
