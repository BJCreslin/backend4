import React from 'react';
import css from "../../Login/login.module.css";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createProjectThunkCreator} from "../../../redux/projects-reducer";

const createProjectForm = (props) => {
    return (
      <div>
                        <form className={css.formDesign} onSubmit={props.handleSubmit}>
                            <div>
                                <Field type={"text"} placeholder={"Project Name"} component={"input"}
                                       name={"projectName"}/>
                            </div>

                            <div>
                                <Field type={"text"} placeholder={"Description"} component={"input"}
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
    }
};
const mapDispatchToProps = {
    createProjectThunkCreator
};

export default connect(mapStateToPros, mapDispatchToProps)(CreateProject);
