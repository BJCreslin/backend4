import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './login.module.css';

const Login = (props) => {
    return (
        <div className="center-block">


                    <Col> 1ffffff
                    </Col>
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
                                <button > OK</button>
                            </div>
                        </form>

                    </Col>



        </div>
    )

};

export default Login;
