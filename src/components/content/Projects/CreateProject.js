import React from 'react';
import css from "../../Login/login.module.css";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createProjectThunkCreator, setCreated, setShowModal} from "../../../redux/projects-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {Modal} from "react-bootstrap";
import ProjectsContainer from "./ProjectsContainer";
import {Redirect} from "react-router-dom";

class createProjectForm extends React.Component {
    state = {
        show: false
    };

    componentDidMount() {
        this.handleShow();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.created) {
            this.props.setCreated(true);
            return (<>
                <Redirect to= "/projects"/>
            </>)
        }
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Create new project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className={css.formDesign} onSubmit={this.props.handleSubmit}>
                            <div>Project name:
                                <Field type={"text"} placeholder={"Project Name"} component={"input"}
                                       name={"projectName"}/>
                            </div>

                            <div>Description:
                                <Field type={"text"} placeholder={"Description"} component={"textarea"}
                                       name={"description"}/>
                            </div>

                            <div>
                                Url:
                                <Field type={"text"} placeholder={"Project Url"} component={"input"}
                                       name={"projectUrl"}/>
                            </div>

                            <div>
                                <button> OK</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>)
            ;
    };
}

const CreateProjectReduxForm = reduxForm({
    form: 'createProjectForm'
})(createProjectForm);


const CreateProject = (props) => {
    let onSubmit = (formData) => {
        props.createProjectThunkCreator(formData);
        return (<>
                <Redirect to= "/projects"/>
            </>)
    };
    return (
        <CreateProjectReduxForm onSubmit={onSubmit}/>
    )
};

const mapStateToProps = (state) => {
    return {
        showModal: state.login.showModal,
        created: state.projectsPage.created
    }
};
const mapDispatchToProps = {
    createProjectThunkCreator,
    setShowModal,
    setCreated

};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(CreateProject);
