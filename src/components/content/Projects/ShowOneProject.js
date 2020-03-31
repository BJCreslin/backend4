import React from 'react';
import css from "./projects.module.css";
import {reduxForm} from "redux-form";

export class ShowOneProject extends React.Component {
    state = {
        descriptionEditMode: false,
        nameEditMode: false,
        urlEditMode: false
    };
    activateDescriptionEditMode = () => {
        this.setState({descriptionEditMode: true})
    };
    deActivateDescriptionEditMode = () => {
        this.setState({descriptionEditMode: false})
    };
    activateNameEditMode = () => {
        this.setState({nameEditMode: true})
    };
    deActivateNameEditMode = () => {
        this.setState({nameEditMode: false})
    };
    activateUrlEditMode = () => {
        this.setState({urlEditMode: true})
    };
    deActivateUrlEditMode = () => {
        this.setState({urlEditMode: false})
    };

    render() {
        return <div>

            <h4 className={css.name}>
                {!this.state.nameEditMode &&
                <span onClick={this.activateNameEditMode}>Name: {this.props.project.projectName} </span>
                }

                {this.state.nameEditMode &&
                <input autoFocus={true} onBlur={this.deActivateNameEditMode}
                       value={this.props.project.projectName}/>
                }
            </h4>
            <container className={css.container}>
                <span className={css.id}>ID: {this.props.project.projectId}      </span>
                <span className={css.description}>
                {!this.state.descriptionEditMode &&
                <span onClick={this.activateDescriptionEditMode}>Description: {this.props.project.description} </span>
                }

                {this.state.descriptionEditMode &&
                <input className={css.descriptionInput} autoFocus={true} onBlur={this.deActivateDescriptionEditMode}
                        value={this.props.project.description}
                    />
                }
                </span>

                <span className={css.url}>
                {!this.state.urlEditMode &&
                <span onClick={this.activateUrlEditMode}>URL: {this.props.project.projectUrl} </span>
                }

                {this.state.urlEditMode &&
                <input className={css.urlInput} autoFocus={true} onBlur={this.deActivateUrlEditMode}
                       value={this.props.project.projectUrl}/>
                }
                </span>
            </container>

            <hr/>
        </div>
    }
}

const UpdateProjectReduxForm = reduxForm({
    form: 'updateProjectForm'
})(ShowOneProject);
