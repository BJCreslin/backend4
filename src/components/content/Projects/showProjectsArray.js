import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";


class ShowProjectsArray extends React.Component {

    render() {
        return <div>
            {this.props.projects.map(project => {
                return (
                    <div className="card text-white bg-primary mb-3">

                        <Card.Body>
                            <h4 className="card-title">{project.projectName}</h4>
                            <Card.Subtitle class="card text-white bg-secondary mb-3" mb="2"
                                           text="muted">ID: {project.projectId}
                            </Card.Subtitle>
                            <Card.Text class="card text-white bg-dark mb-3">
                                {project.description}
                            </Card.Text>
                            <Card.Link class="card bg-light mb-3" href="{project.projectUrl}">Project
                                link</Card.Link>
                            <Link to={"/editproject/" + project.projectId}>Edit
                                Project</Link>

                        </Card.Body>

                    </div>)
            })
            }
        </div>
    }
}

export default ShowProjectsArray;

