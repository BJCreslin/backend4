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

const updateProject=(project) =>{
    return (
        <div className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

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
    setToggleFetching,
    updateProject
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
