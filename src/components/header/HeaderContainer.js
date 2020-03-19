import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setCredential, setSuccessLogin, setWrongCredential} from "../../redux/login-redux";

const authLoginEndPoint = "http://185.255.135.104:9000/api/auth/";

class HeaderContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (<div>
                <Header {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credential: state.login.credential,
    credentialStatus: state.login.credentialStatus
});

const mapDispatchToProps = {
    setCredential,
    setWrongCredential,
    setSuccessLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
