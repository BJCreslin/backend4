import React from "react";
import {Container} from "react-bootstrap";
import {Route} from "react-router-dom";
import Home from "./Home/Home";
import UsersContainer from "./Users/UsersContainer";

const Content = () => {
    return (
        <div>
            <Container>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route exact path="/" render={() => <Home/>}/>
            </Container>

        </div>
    )
};
export default Content;
