import React from 'react';
import css from "../../Login/login.module.css";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {Modal} from "react-bootstrap";
import {createTaskThunkCreator, setCreated, setShowModal} from "../../../redux/tasks-reducer";
import {getAllUsersThunkCreator} from "../../../redux/users-reducer";

class createTaskForm extends React.Component {
    state = {
        show: false
    };


    constructor(props, context) {
        super(props, context);
        window.progressTaskModal = this;
    }

    componentDidMount() {
        this.handleShow();
        this.props.getAllUsersThunkCreator();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.created) {
            this.handleClose();
            this.props.setCreated(false);
        }
    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Create new task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className={css.formDesign} onSubmit={this.props.handleSubmit}>
                            <div>Project name:
                                <Field type={"text"} placeholder={"Task Name"} component={"input"}
                                       name={"name"}/>
                            </div>

                            <div>Text:
                                <Field type={"text"} placeholder={"text"} component={"textarea"}
                                       name={"text"}/>
                            </div>

                            <div>
                                Url:
                                <Field type={"text"} placeholder={"Project Url"} component={"input"}
                                       name={"projectUrl"}/>
                            </div>
                            <div>

                                <Field name="project" component="select" options={this.options}>
                                    {this.props.allUsers && this.props.allUsers.map((user, index) => {
                                        return (
                                            <option>{user.name}</option>
                                        )
                                    })}
                                </Field>
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

const CreateTaskReduxForm = reduxForm({
    form: 'createTaskForm'
})(createTaskForm);


const CreateTask = (props) => {
    let onSubmit = (formData) => {
        props.createTaskThunkCreator(formData);
        window.progressTaskModal.handleClose();
    };
    return (
        <CreateTaskReduxForm
            allUsers={props.allUsers}
            onSubmit={onSubmit}
            getAllUsersThunkCreator={props.getAllUsersThunkCreator}/>
    )
};

const mapStateToProps = (state) => {
    return {
        showModal: state.login.showModal,
        created: state.tasksPage.created,
        allUsers: state.usersContent.allUsers
    }
};
const mapDispatchToProps = {
    createTaskThunkCreator,
    setShowModal,
    setCreated,
    getAllUsersThunkCreator

};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(CreateTask);
