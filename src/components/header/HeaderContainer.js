import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

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
    credential: state.auth.credential
});


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
