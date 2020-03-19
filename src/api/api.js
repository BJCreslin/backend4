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
    axios.post('http://185.255.135.104:9000/api/auth/login', {
        "login": formData.login,
        "password": formData.password
    }).then(response => {
        console.log(response.data);
        let sessionId=response.data.sessionId;
        setCredential(response.data);
        if (!sessionId) {setWrongCredential();

        } else {
            console.log("jjj- "+sessionId);
            setUserEmail(formData.login);
            setSessionId(sessionId);
            setSuccessLogin();
        }
    })
};

export class usersApi {
     getUsers(){

    this.props.setToggleFetching(true);
    axios.get(endPointURL).then(response => {
    this.props.setUsers(response.data);
    this.props.setToggleFetching(false);
});
axios.get(countEndPointURL).then(response => {
    this.props.setTotalCount(response.data);
})};


}
