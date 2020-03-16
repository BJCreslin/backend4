import React from 'react';
import {connect} from "react-redux";
import {setCurrentPage, setToggleFetching, setTotalCount, setUsers} from "../../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import spinner from '../../../assets/img/Spinner.svg'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleFetching(true);
        axios.get('http://185.255.135.104:9000/api/users/users-all').then(response => {
            this.props.setUsers(response.data);
            this.props.setToggleFetching(false);
        })
    }

    render() {
        return (<>
                {this.props.isFetching ? <img src={spinner}/> : null}
                <Users users={this.props.users}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        numberForPage: state.usersPage.numberForPage,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
    }
};

let mpDispatchToProps = {
    setUsers,
    setTotalCount,
    setCurrentPage,
    setToggleFetching
};


export default connect(mapStateToProps, mpDispatchToProps)(UsersContainer);
