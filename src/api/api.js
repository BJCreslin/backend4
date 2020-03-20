import * as axios from 'axios';
import {setCredential, setSuccessLogin, setUserEmail, setWrongCredential} from "../redux/login-redux";


const instance=axios.create({
baseUrl: 'http://185.255.135.104:9000/api/'
});

const loginEndPointURL = 'http://185.255.135.104:9000/api/auth/login';
const endPointURL = 'http://185.255.135.104:9000/api/users/users-all';
const countEndPointURL = 'http://185.255.135.104:9000/api/users/count';

const  setSessionId=(sessionId)=>{
    instance.defaults.headers.common['SessionId'] = sessionId;
};

export const doLogin=(formData)=> {
    return function (dispatch) {
        axios.post(loginEndPointURL, {
            "login": formData.login,
            "password": formData.password
        }).then(response => {
            let sessionId = response.data.sessionId;
            dispatch.setUserEmail(formData.login);
            dispatch(setCredential(response.data));
            if (!sessionId) {
                dispatch(setWrongCredential());

            } else {
                dispatch(setUserEmail(formData.login));
                dispatch(setSessionId(sessionId));
                dispatch(setSuccessLogin());
            }

        })
    };
}

export const usersApi= {
     getUsers(){


    axios.get(endPointURL).then(response => {
    this.props.setUsers(response.data);
    this.props.setToggleFetching(false);
});
axios.get(countEndPointURL).then(response => {
    this.props.setTotalCount(response.data);
})}


};
