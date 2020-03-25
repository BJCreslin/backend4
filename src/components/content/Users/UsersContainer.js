import React from 'react';
import {connect} from "react-redux";
import {getUsersThunkCreator, setCurrentPage, setToggleFetching, setUsers} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator();

    }

    render() {
        return (<>
                {console.log(this.props)}
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
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

    setCurrentPage,
    setToggleFetching,
    getUsersThunkCreator
};


export default connect(mapStateToProps, mpDispatchToProps)(UsersContainer);
