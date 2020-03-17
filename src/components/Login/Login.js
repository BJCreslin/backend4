import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './login.module.css';
import {Field, reduxForm} from "redux-form";
import * as axios from "axios";

const loginEndPointURL = 'http://185.255.135.104:9000/api/auth/login';


const LoginForm = (props) => {
    return (
        <form className={css.formDesign} onSubmit={props.handleSubmit}>
            <div>
                <Field type={"email"} placeholder={"Login e-mail"} component={"input"} name={"login"}/>
            </div>

            <div>
                <Field type={"password"} placeholder={"Password"} component={"input"} name={"password"}/>
            </div>

            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberme"}/> Remember me
            </div>

            <div>
                <button> OK</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const Login = (props) => {
    let onSubmit = (formData) => {
        axios.post(loginEndPointURL, {
            "login": formData.login,
            "password": formData.password
        }).then(response => {
            return (console.log(response.data))
        })
    };
    return (
        <span>
             <Container className="themed-container" fluid={true} className={css.formDesign}>
                 <Row xs="2">
                 <Col></Col>
                 <Col>
                     <h2 className={css.formHeader}>Login</h2>
                       <LoginReduxForm onSubmit={onSubmit}/>
                 </Col>
                 <Col></Col>
                 </Row>
             </Container>

        </span>
    )

};

export default Login;
