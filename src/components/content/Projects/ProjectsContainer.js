import React from 'react';
import {connect} from "react-redux";
import Preloader from "../../common/preloader/Preloader";
import Project from "./Project";
import {
    getPaginationProjectsThunkCreator,
    getProjectsThunkCreator, setCurrentPage,
    setProjects,
    setToggleFetching
} from "../../../redux/projects-reducer";


class ProjectsContainer extends React.Component {
    componentDidUpdate() {
        alert("ProjectsContainer");
        let projectsss = this.props.getPaginationProjectsThunkCreator(
            this.props.credential.sessionId, this.props.currentPage, this.props.numberForPage);
        this.props.setProjects(projectsss);

    };

    render = () => {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Project props={this.props}/>
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
        isFetching: state.projectsPage.isFetching,
        currentPage: state.projectsPage.currentPage,
        numberForPage: state.projectsPage.numberForPage
    }
};
const mapDispatchToProps = {
    getProjectsThunkCreator,
    setProjects,
    setToggleFetching,
    getPaginationProjectsThunkCreator,
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
