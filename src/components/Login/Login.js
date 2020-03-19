import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './login.module.css';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setCredential, setSuccessLogin, setUserEmail, setWrongCredential} from "../../redux/login-redux";
import {doLogin} from "../../api/api";




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
        doLogin(formData)
    };
    return (
        <span>
             <Container className="themed-container" fluid={true} className={css.formDesign}>
                 <Row xs="2">
                 <Col></Col>
                 <Col>
                     {props.credentialStatus ? <h2>Invalid loginname or password</h2> : ""}
                     <h2 className={css.formHeader}>Login</h2>
                       <LoginReduxForm onSubmit={onSubmit}/>
                 </Col>
                 <Col></Col>
                 </Row>
             </Container>

        </span>
    )

};
const mapStateToProps = (state) => {
    return {
        credential: state.login.credential,
        credentialStatus: state.login.credentialStatus,
        email: state.login.email
    }
};
let mpDispatchToProps = {
    setCredential,
    setWrongCredential,
    setSuccessLogin,
    setUserEmail
};


export default connect(mapStateToProps, mpDispatchToProps)(Login);
