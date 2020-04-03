import React from 'react';
import css from "./projects.module.css";
//
// <td>{task.id}</td>
// <td>{task.project}</td>
// <td>{task.author}</td>
// <td>{task.implementer}</td>
// <td>{task.name}</td>
// <td>{task.text}</td>
// <td>{task.createDate}</td>
// <td>{task.updateDate}</td>

export class ShowOneTask extends React.Component {
    state = {
        descriptionEditMode: false,
        nameEditMode: false,
        urlEditMode: false,
        id: this.props.task.id,
        author: this.props.task.author,
        implementer: this.props.task.implementer,
        project: this.props.task.project,
        name: this.props.task.name,
        text: this.props.task.text,
        createDate: this.props.task.createDate,
        updateDate: this.props.task.updateDate,
    };
    activateDescriptionEditMode = () => {
        this.setState({descriptionEditMode: true})
    };
    deActivateDescriptionEditMode = () => {
        this.setState({descriptionEditMode: false})
        this.doUpdate();
    };
    activateNameEditMode = () => {
        this.setState({nameEditMode: true})
    };
    deActivateNameEditMode = () => {
        this.setState({nameEditMode: false})
        this.doUpdate();
    };
    activateUrlEditMode = () => {
        this.setState({urlEditMode: true})
    };
    deActivateUrlEditMode = () => {
        this.setState({urlEditMode: false})
        this.doUpdate();
    };
    doUpdate = () => {
        this.props.updateProjectThunkCreator({
            id: this.state.id,
            author: this.state.author,
            name: this.state.name,
            text: this.state.text,
            implementer: this.state.implementer,
            project: this.state.project,
        })
    };

    doDeleteProject = () => {
        this.props.deleteTaskThunkCreator(this.state.Id);
    };

    nameOnChange = (e) => {
        this.setState({name: e.currentTarget.value});
    };
    authorOnChange = (e) => {
        this.setState({author: e.currentTarget.value});
    };
    textOnChange = (e) => {
        this.setState({text: e.currentTarget.value});
    };
    implementerOnChange = (e) => {
        this.setState({implementer: e.currentTarget.value});
    };
    projectOnChange = (e) => {
        this.setState({project: e.currentTarget.value});
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.project.projectName !== this.props.project.projectName) {
            this.setState({projectName: this.props.project.projectName})
        }
        if (prevProps.project.projectUrl !== this.props.project.projectUrl) {
            this.setState({projectUrl: this.props.project.projectUrl})
        }
        if (prevProps.project.description !== this.props.project.description) {
            this.setState({description: this.props.project.description})
        }


    }

    render() {
        return <div>

            <h4 className={css.name}>
                {!this.state.nameEditMode &&
                <span onClick={this.activateNameEditMode}>Name: {this.state.projectName} </span>
                }

                {this.state.nameEditMode &&
                <input autoFocus={true} onBlur={this.deActivateNameEditMode}
                       onChange={this.nameOnChange} value={this.state.projectName}/>
                }
            </h4>
            <container className={css.container}>
                <span className={css.id}>ID: {this.props.project.projectId}      </span>

                <span className={css.description}>
                {!this.state.descriptionEditMode &&
                <span onClick={this.activateDescriptionEditMode}>Description: {this.state.description} </span>
                }

                    {this.state.descriptionEditMode &&
                    <input className={css.descriptionInput} autoFocus={true} onBlur={this.deActivateDescriptionEditMode}
                           onChange={this.textOnChange} value={this.state.description}
                    />
                    }
                </span>

                <span className={css.url}>
                {!this.state.urlEditMode &&
                <span onClick={this.activateUrlEditMode}>URL: {this.state.projectUrl} </span>
                }

                    {this.state.urlEditMode &&
                    <input className={css.urlInput} autoFocus={true} onBlur={this.deActivateUrlEditMode}
                           onChange={this.authorOnChange} value={this.state.projectUrl}/>
                    }
                </span>

                <span className={css.delete} onClick={this.doDeleteProject}>
                    Delete
                </span>
            </container>

            <hr/>
        </div>
    }
}


