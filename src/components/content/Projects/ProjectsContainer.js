import React from 'react';
import {connect} from "react-redux";
import Preloader from "../../common/preloader/Preloader";
import Project from "./Project";
import {getProjectsThunkCreator, setProjects, setToggleFetching} from "../../../redux/projects-reducer";


class ProjectsContainer extends React.Component {
    componentDidMount() {
        this.props.getProjectsThunkCreator(this.props.credential.sessionId);
    }

    render = () => {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Project projects={this.props.projects}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        credentialStatus: state.login.credentialStatus,
        credential: state.login.credential,
        userEmail: state.login.userEmail,
        projects: state.projectsPage.projects,
        isFetching: state.projectsPage.isFetching

    }
};
const mapDispatchToProps = {
    getProjectsThunkCreator,
    setProjects,
    setToggleFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
