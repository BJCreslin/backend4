import React from 'react';
import {connect} from "react-redux";
import Preloader from "../../common/preloader/Preloader";
import Project from "./Project";
import {
    getPaginationProjectsThunkCreator,
    getProjectsThunkCreator,
    setCurrentPage,
    setFirstPage,
    setLastPage,
    setProjects,
    setToggleFetching
} from "../../../redux/projects-reducer";


class ProjectsContainer extends React.Component {

    componentDidMount() {
        this.props.getPaginationProjectsThunkCreator();
    };


    render = () => {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Project projects={this.props.projects}
                         currentPage={this.props.currentPage}
                         setCurrentPage={this.props.setCurrentPage}
                         isFetching={this.props.isFetching}
                         setFirstPage={this.props.setFirstPage}
                         setLastPage={this.props.setLastPage}
                         getPaginationProjects={this.props.getPaginationProjectsThunkCreator}/>
            </>
        )
    };
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
    setCurrentPage,
    setFirstPage,
    setLastPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
