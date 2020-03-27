import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {setCurrentPage, setToggleFetching, setUsers} from "../../../redux/users2-reducer";
import {getUsersThunkCreator} from "../../../redux/users-content-reducer";


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
    return {
        users: state.usersContent.users,
        numberForPage: state.usersContent.numberForPage,
        currentPage: state.usersContent.currentPage,
        totalCount: state.usersContent.totalCount,
        isFetching: state.usersContent.isFetching,
    }
};

let mpDispatchToProps = {
    setUsers,
    setCurrentPage,
    setToggleFetching,
    getUsersThunkCreator
};


export default connect(mapStateToProps, mpDispatchToProps)(UsersContainer);
