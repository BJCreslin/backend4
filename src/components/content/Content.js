import React from "react";
import {Route} from "react-router-dom";
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
                <Route path="/users" render={() => this.props.credentialStatus ? <UsersContainer/> : <Login/>}/>
                <Route path="/projects" render={() => this.props.credentialStatus ? <ProjectsContainer/> : <Login/>}/>
                <Route path="/newproject" render={() => this.props.credentialStatus ? <CreateProject/> : <Login/>}/>
                <Route path="/tasks" render={() => this.props.credentialStatus ? <TasksContainer/> : <Login/>}/>
                <Route exact path="/" render={() => <Home/>}/>
                <Route exact path="/login" render={() => this.props.credentialStatus ? <Home/> : <Login/>}/>
            </>

        )
    };
}

const mapStateToProps = (state) => {
    return {
        credentialStatus: state.login.credentialStatus
    }
};


export default connect(mapStateToProps, {})(Content);
