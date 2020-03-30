import React from "react";
import {Redirect, Route} from "react-router-dom";
import Home from "./Home/Home";
import UsersContainer from "./Users/UsersContainer";
import Login from "../Login/Login";
import {connect} from "react-redux";
import ProjectsContainer from "./Projects/ProjectsContainer";
import TasksContainer from "./Tasks/TasksContainer";
import CreateProject from "./Projects/CreateProject";


class Content extends React.Component {

    render() {

        return (
            <>
                <Route path="/users" render={()=> <UsersContainer/>}/>
                <Route path="/projects" render={()=><ProjectsContainer/>}/>
                <Route path="/newproject" render={()=><CreateProject/>}/>
                <Route path="/tasks" render={<TasksContainer/>}/>
                <Route exact path="/" render={() => <Home/>}/>
                <Route exact path="/login" render={() => this.props.isAuthenticated ? <Home/> : <Login/>}/>
            </>

        )
    };
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.login.isAuthenticated,
        projectCreated:state.projectsPage.created
    }
};


export default connect(mapStateToProps, {})(Content);
