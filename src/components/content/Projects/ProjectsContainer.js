import React from 'react';
import {connect} from "react-redux";


class ProjectsContainer extends React.Component {


    render = () => {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        credentialStatus: state.login.credentialStatus,
        credential: state.login.credential,
        userEmail: state.login.userEmail
    }
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
