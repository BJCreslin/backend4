import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './login.module.css';

const Login = (props) => {
    return (
        <span>
             <Container className="themed-container" fluid={true} className={css.formDesign}>
                 <Row xs="2">
                 <Col></Col>
                 <Col>
                        Login
                        <form className={css.formDesign}>
                            <div>
                                <input type={"email"} placeholder={"Login"}/>
                            </div>

                            <div>
                                <input type={"password"} placeholder={"Password"}/>
                            </div>

                            <div>
                                <input type={"checkbox"}/> Remember me
                            </div>

                            <div>
                                <button> OK</button>
                            </div>
                        </form>
                 </Col>
                 <Col></Col>
                 </Row>
             </Container>

        </span>
    )

};

export default Login;
