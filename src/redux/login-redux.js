const SET_CREDENTIAL = "SET_CREDENTIAL";

const InitialState = {
    credential: {
        sessionId: null,
        startTime: 0,
        validTime: 0
    }
};


let loginReducer=(state=InitialState, action) => {
  switch (action.type) {
      case SET_CREDENTIAL:
          return{
              ...state,
              credential: action.credential
          };
      default:{
          return state;
      }
  }
};

export const setCredential=(credential)=>({type:SET_CREDENTIAL,credential:credential});

export default loginReducer;
