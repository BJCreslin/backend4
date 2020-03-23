import React from 'react';
import css from "../../Login/login.module.css";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createProjectThunkCreator} from "../../../redux/projects-reducer";
import {Col, Container, Row} from "react-bootstrap";

const createProjectForm = (props) => {
    return (
      <div>
          <Container className="themed-container" fluid={true}>
              <Row xs="2">
                  <Col></Col>
                  <Col>
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
                  </Col>
                  <Col></Col>
                  </Row>
          </Container>

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
