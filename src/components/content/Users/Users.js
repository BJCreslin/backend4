import React from 'react';
import css from './users.module.css';
import freeLogo from '../../../assets/img/free.gif';
import busyLogo from '../../../assets/img/busy.gif'
import academicLeaveLogo from '../../../assets/img/academic.gif';
import temporalyInactiveLogo from '../../../assets/img/inactive.gif';

let busyLogoChoice = (status) => {
    if (status.toUpperCase() === "BUSY") return busyLogo;
    if (status.toUpperCase() === "WAITING_FOR_A_TASK") return freeLogo;
    if (status.toUpperCase() === "ACADEMIC_LEAVE") return academicLeaveLogo;
    if (status.toUpperCase() === "TEMPORARILY_INACTIVE") return academicLeaveLogo;
};

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
                    <th scope="col ">Status</th>
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
                            <td><img className={css.statusLogo} src={busyLogoChoice(user.status)}/></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
};

export default Users;
