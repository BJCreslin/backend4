import React from 'react';
import css from './users.module.css';

const Users = (props) => {
    return (<div className={css.thead}>

            <table className="table table-hover table-bordered table-striped table-responsive">
                <thead >
                <tr>
                    <th scope="col ">Name</th>
                    <th scope="col ">E-mail</th>
                    <th scope="col ">GitHubId</th>
                    <th scope="col ">Hours in week</th>
                    <th scope="col ">Create Date</th>
                    <th scope="col ">Update Date</th>
                    <th scope="col ">status</th>
                </tr>
                </thead>
                {props.users.map(user => {
                    return (
                        <div>

                            <tbody>
                            <tr className="table-active">
                                <th scope="row">Active</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr>
                                <th scope="row">Default</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-primary">
                                <th scope="row">Primary</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-secondary">
                                <th scope="row">Secondary</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-success">
                                <th scope="row">Success</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-danger">
                                <th scope="row">Danger</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-warning">
                                <th scope="row">Warning</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-info">
                                <th scope="row">Info</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-light">
                                <th scope="row">Light</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-dark">
                                <th scope="row">Dark</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            </tbody>

                        </div>)
                })}
            </table>
        </div>
    )
};

export default Users;
