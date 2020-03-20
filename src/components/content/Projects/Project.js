import React from 'react';
import css from "../Users/users.module.css";

// private int projectId;
// private String projectUrl;
// private String description;
// private String projectName;

const Projects=(props)=>{
    return(
        <div className={css.thead}>

            <table className="table table-hover table-bordered table-striped table-responsive">
                <thead>
                <tr>
                    <th scope="col ">ID</th>
                    <th scope="col ">Project URL</th>
                    <th scope="col ">Description</th>
                    <th scope="col ">project Name</th>
                </tr>
                </thead>
                <tbody>
                {props.projects.map(project => {
                    return (
                        <tr>
                            <td>{project.projectId}</td>
                            <td>{project.projectUrl}</td>
                            <td>{project.description}</td>
                            <td>{project.projectName}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )

};

export default Projects;
