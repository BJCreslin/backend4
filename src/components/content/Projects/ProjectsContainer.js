import React from 'react';
import {connect} from "react-redux";
import Preloader from "../../common/preloader/Preloader";
import Project from "./ShowProjects";

import {
    getPaginationProjectsThunkCreator,
    setCurrentPage,
    setFirstPage,
    setLastPage,
    setToggleFetching
} from "../../../redux/projects-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";

class ProjectsContainer extends React.Component {

    componentDidMount() {
        this.props.getPaginationProjectsThunkCreator(this.props.currentPage, this.props.numberForPage);
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
                         numberForPage={this.props.numberForPage}
                         getPaginationProjectsThunkCreator={this.props.getPaginationProjectsThunkCreator}
                />
            </>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        projects: state.projectsPage.projects,
        isFetching: state.projectsPage.isFetching,
        currentPage: state.projectsPage.currentPage,
        numberForPage: state.projectsPage.numberForPage
    }
};

const mapDispatchToProps = {
    setToggleFetching,
    getPaginationProjectsThunkCreator,
    setCurrentPage,
    setFirstPage,
    setLastPage
};


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(ProjectsContainer);
