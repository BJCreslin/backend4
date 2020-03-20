import React from 'react';
import css from "../Users/users.module.css";

const Tasks=(props)=>{
    return(
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
    )

};

export default Tasks;
