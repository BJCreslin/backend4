import React from 'react';
import css from "../Users/users.module.css";
import {Card} from "react-bootstrap";

// private int projectId;
// private String projectUrl;
// private String description;
// private String projectName;



const Projects = (props) => {
    return (
        <div className={css.thead}>
            {props.projects.map(project => {
                return (
                    <div className="card text-white bg-primary mb-3"  >
                        <Card.Body>
                            <h4 className="card-title" >{project.projectName}</h4>
                            <Card.Subtitle class="card text-white bg-secondary mb-3" mb="2"
                                           text="muted">ID: {project.projectId}

                            </Card.Subtitle>
                            <Card.Text class="card text-white bg-dark mb-3">
                                {project.description}
                            </Card.Text>
                            <Card.Link class="card bg-light mb-3" href="{project.projectUrl}">Project link</Card.Link>
                            <button type="button" className="btn btn-secondary" onClick={props.updateProject()}>Edit</button>
                        </Card.Body>
                    </div>
                )
            })}


        </div>
    )

};

export default Projects;
