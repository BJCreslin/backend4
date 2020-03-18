const SET_CREDENTIAL = "SET_CREDENTIAL";
const SET_WRONG_CREDENTIAL = "SET_WRONG_CREDENTIAL";

const InitialState = {
    credential: {
        sessionId: null,
        startTime: 0,
        validTime: 0
    },
    textCredentialStatus: false
};


let loginReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_CREDENTIAL:
            return {
                ...state,
                credential: action.credential
            };
        case SET_WRONG_CREDENTIAL:
            return {
                ...state,
                textCredentialStatus: false
            };
        default: {
            return state;
        }
    }
};

export const setCredential = (credential) => ({type: SET_CREDENTIAL, credential: credential});
export const setWrongCredential = () => ({type: SET_WRONG_CREDENTIAL});

export default loginReducer;
