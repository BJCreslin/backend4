import React from "react";
import Preloader from "../../common/preloader/Preloader";
import {connect} from "react-redux";
import Tasks from "./Tasks";
import {getTasksThunkCreator, setTasks, setToggleFetching} from "../../../redux/tasks-reducer";

class TasksContainer extends React.Component {
    componentDidMount() {
        this.props.getTasksThunkCreator(1,10);
    }

    render = () => {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Tasks tasks={this.props.tasks}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        credentialStatus: state.login.credentialStatus,
        credential: state.login.credential,
        userEmail: state.login.userEmail,
        tasks: state.tasksPage.tasks,
        isFetching: state.tasksPage.isFetching,
        currentPage: state.tasksPage.currentPage,
        numberForPage: state.tasksPage.numberForPage
    }
};
const mapDispatchToProps = {
    getTasksThunkCreator,
    setTasks,
    setToggleFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
