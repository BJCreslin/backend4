import React from 'react';
import css from "../../Login/login.module.css";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createProjectThunkCreator, setShowModal} from "../../../redux/projects-reducer";
import {Modal} from "react-bootstrap";

const createProjectForm = (props) => {
    setShowModal(true);
    const handleClose=() => {setShowModal(false);};
    return (
        <div>
            <Modal show={true} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Create new project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className={css.formDesign} onSubmit={props.handleSubmit}>
                        <div>
                            <Field type={"text"} placeholder={"Project Name"} component={"input"}
                                   name={"projectName"}/>
                        </div>

                        <div>
                            <Field type={"text"} placeholder={"Description"} component={"textarea"}
                                   name={"description"}/>
                        </div>

                        <div>
                            <Field type={"text"} placeholder={"Project Url"} component={"input"}
                                   name={"projectUrl"}/>
                        </div>

                        <div>
                            <button> OK</button>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        </div>);
};

const CreateProjectReduxForm = reduxForm({
    form: 'createProjectForm'
})(createProjectForm);


const CreateProject = (props) => {
    let onSubmit = (formData) => {

        props.createProjectThunkCreator(props.credential.sessionId, formData);
    };
    return (
        <CreateProjectReduxForm onSubmit={onSubmit}/>
    )
};

const mapStateToPros = (state) => {
    return {
        credential: state.login.credential,
        credentialStatus: state.login.credentialStatus,
        showModal: state.login.showModal,
    }
};
const mapDispatchToProps = {
    createProjectThunkCreator,
    setShowModal
};


export default connect(mapStateToPros, mapDispatchToProps)(CreateProject);
