import React from "react";
import Preloader from "../../common/preloader/Preloader";
import {connect} from "react-redux";
import Tasks from "./Tasks";
import {
    getTasksThunkCreator,
    setCurrentPage,
    setFirstPage,
    setLastPage,
    setTasks,
    setToggleFetching
} from "../../../redux/tasks-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";

class TasksContainer extends React.Component {
    componentDidMount() {
        this.props.getTasksThunkCreator(this.props.currentPage, this.props.numberForPage);
    }

    render = () => {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Tasks tasks={this.props.tasks}
                       currentPage={this.props.currentPage}
                       setCurrentPage={this.props.setCurrentPage}
                       isFetching={this.props.isFetching}
                       setFirstPage={this.props.setFirstPage}
                       setLastPage={this.props.setLastPage}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasksPage.tasks,
        isFetching: state.tasksPage.isFetching,
        currentPage: state.tasksPage.currentPage,
        numberForPage: state.tasksPage.numberForPage
    }
};
const mapDispatchToProps = {
    getTasksThunkCreator,
    setTasks,
    setToggleFetching,
    setFirstPage,
    setLastPage,
    setCurrentPage
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(TasksContainer);
