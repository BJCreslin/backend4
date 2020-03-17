import React from "react";
import {Container, Row} from "react-bootstrap";
import {Route} from "react-router-dom";
import Home from "./Home/Home";
import UsersContainer from "./Users/UsersContainer";
import Login from "../Login/Login";

const Content = () => {
    return (
        <div>
            <Row>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route exact path="/" render={() => <Home/>}/>
                <Route exact path="/login" render={() => <Login/>}/>
            </Row>
        </div>
    )
};
export default Content;
