import React, {useState} from 'react';
import css from "../../Login/login.module.css";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createProjectThunkCreator, setShowModal} from "../../../redux/projects-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {Modal} from "react-bootstrap";

class createProjectForm extends React.Component {
    state={
        show:false
    };
    componentDidMount() {
        this.handleShow();
    }
     handleClose = () => this.setState({show:false});
     handleShow = () => this.setState({show:true});

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
    };
    return (
        <CreateProjectReduxForm onSubmit={onSubmit}/>
    )
};

const mapStateToProps = (state) => {
    return {
        showModal: state.login.showModal,
    }
};
const mapDispatchToProps = {
    createProjectThunkCreator,
    setShowModal
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(CreateProject);
