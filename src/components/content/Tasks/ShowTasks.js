import React from 'react';
import css from "./projects.module.css";
import {Pagination} from "react-bootstrap";
import CreateProject from "./CreateProject";
import {Link} from "react-router-dom";
import {ShowOneTask} from "./ShowOneProject";

class ShowTasks extends React.Component {

    onclickNewProject = () => {
        return (<>
                <CreateTask/>
            </>
        )
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.props.getPaginationTasksThunkCreator(this.props.currentPage, this.props.numberForPage)
        }
        if (this.props.projects !== prevProps.projects) {
            this.props.getPaginationTasksThunkCreator(this.props.currentPage, this.props.numberForPage)
        }
    }

    render() {
        return (<div>
                <div>
                    <Link to="/newtask" onClick={this.onclickNewProject}>New Project</Link>
                </div>
                <div>
                    <Pagination className={css.pagination}>
                        <Pagination.First onClick={this.props.setFirstPage}/>
                        <Pagination.Ellipsis/>
                        <Pagination.Prev onClick={this.props.setPreviousPage}/>
                        <Pagination.Item>{this.props.currentPage}</Pagination.Item>
                        <Pagination.Next onClick={this.props.setNextPage}/>
                        <Pagination.Ellipsis/>
                        <Pagination.Last onClick={this.props.setLastPage}/>
                    </Pagination>

                </div>
                {this.props.tasks.map(task => {
                    return (
                        <ShowOneTask task={task}
                                        updateTaskThunkCreator={this.props.updateTaskThunkCreator}
                                        deleteTaskThunkCreator={this.props.deleteTaskThunkCreator}/>)
                })}

            </div>
        )
    }
}

export default ShowTasks;
