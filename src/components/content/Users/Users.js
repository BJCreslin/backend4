import React from 'react';
import css from './users.module.css';

const Users = (props) => {
    debugger
    return (<div className={css.thead}>

            <table className="table table-hover table-bordered table-striped table-responsive">
                <thead>
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
                <tbody>
                {props.users.map(user => {
                    return (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gitHubId}</td>
                            <td>{user.hours}</td>
                            <td>{user.createDate}</td>
                            <td>{user.updateDate}</td>
                            <td>{user.status}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
};

export default Users;
