import React from 'react';
import css from "./projects.module.css";
import {Card, Pagination} from "react-bootstrap";
import CreateProject from "./CreateProject";
import {Link} from "react-router-dom";


const Projects = (props) => {
    const handleFirstSelect = () => {
        props.setFirstPage();
        props.getPaginationProjects()
    };
    const handleLastSelect = () => {
        props.setLastPage();
        props.getPaginationProjects()
    };

    const handlePrevSelect = () => {
        props.setCurrentPage(props.currentPage - 1);
        props.getPaginationProjects()
    };
    const handleNextSelect = () => {
        props.setCurrentPage(props.currentPage + 1);
        props.getPaginationProjects()
    };


    const onclickNewProject = () => {
        return (<>
                <CreateProject/>
            </>
        )
    };

    const onclickEdit = () => {
        return (
            <>


            </>
        )
    };

    return (<div>
            <div>
                <Link to="/newproject" onClick={onclickNewProject}>New Project</Link>
            </div>
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
                {props.projects.map(project => {
                    return (
                        <div className="card text-white bg-primary mb-3">

                            <Card.Body >
                                <h4 className="card-title">{project.projectName}</h4>
                                <Card.Subtitle class="card text-white bg-secondary mb-3" mb="2"
                                               text="muted">ID: {project.projectId}
                                </Card.Subtitle>
                                <Card.Text class="card text-white bg-dark mb-3">
                                    {project.description}
                                </Card.Text>
                                <Card.Link class="card bg-light mb-3" href="{project.projectUrl}">Project
                                    link</Card.Link>
                                <Link to={"/editproject/" + project.projectId} onClick={onclickEdit(project.projectId)}>New
                                    Project</Link>

                            </Card.Body>

                        </div>
                    )
                })}


            </div>
        </div>
    )

};

export default Projects;
