import React from 'react';
import css from "./task.module.css";
import {Pagination} from "react-bootstrap";

const Tasks = (props) => {
    const handleFirstSelect = () => {
        props.setFirstPage();
    };
    const handleLastSelect = () => {
        props.setLastPage();
    };
    const handlePrevSelect = () => {
        props.setCurrentPage(props.currentPage - 1);
    };
    const handleNextSelect = () => {
        props.setCurrentPage(props.currentPage + 1);
    };
    return (<div>
            <div>
                <Pagination className={css.pagination}>
                    <Pagination.First onClick={handleFirstSelect}/>
                    <Pagination.Ellipsis/>
                    <Pagination.Prev onClick={handlePrevSelect}/>
                    <Pagination.Item>{props.currentPage}</Pagination.Item>
                    <Pagination.Next onClick={handleNextSelect}/>
                    <Pagination.Ellipsis/>
                    <Pagination.Last onClick={handleLastSelect}/>
                </Pagination>
            </div>
            <div className={css.thead}>
                <table className="table table-hover table-bordered table-striped table-responsive">
                    <thead>
                    <tr>
                        <th scope="col ">ID</th>
                        <th scope="col ">Project ID</th>
                        <th scope="col ">Author email</th>
                        <th scope="col ">Implementer email</th>
                        <th scope="col ">Name</th>
                        <th scope="col ">Text</th>
                        <th scope="col ">createDate</th>
                        <th scope="col ">updateDate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.tasks.map(task => {
                        return (
                            <tr>
                                <td>{task.id}</td>
                                <td>{task.project}</td>
                                <td>{task.author}</td>
                                <td>{task.implementer}</td>
                                <td>{task.name}</td>
                                <td>{task.text}</td>
                                <td>{task.createDate}</td>
                                <td>{task.updateDate}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )

};

export default Tasks;
