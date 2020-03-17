import React from "react";
import {Route} from "react-router-dom";
import Home from "./Home/Home";
import UsersContainer from "./Users/UsersContainer";
import Login from "../Login/Login";

const Content = () => {
    return (
        <>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/login" render={() => <Login/>}/>
        </>
    )
};
export default Content;
