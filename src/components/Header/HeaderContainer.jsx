import React, {useState,} from 'react';
import Header from './Header';
import { connect, useSelector } from 'react-redux';
import { logout } from '../../redux/auth-reducer'

function HeaderContainer (props) {
    console.log('headercontainer state', props);
    
    const isAuth = useSelector(state => state.auth.isAuth);
    const login = useSelector(state => state.auth.login);

    // render() {
        return <Header {...props} isAuth={isAuth} login={login} />
    // }
}

// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth,
//     login: state.auth.login
// })

export default connect(null, { logout })(HeaderContainer)
// export default HeaderContainer;