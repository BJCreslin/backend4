import React from 'react';
import {connect} from "react-redux";
import {
    getUsersThunkCreator,
    setCurrentPage,
    setToggleFetching,
    setTotalUsersCount,
    setUsers
} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        alert("UsersContainer");
        this.props.getUsersThunkCreator();
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
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
    setTotalCount: setTotalUsersCount,
    setCurrentPage,
    setToggleFetching,
    getUsersThunkCreator
};


export default connect(mapStateToProps, mpDispatchToProps)(UsersContainer);
