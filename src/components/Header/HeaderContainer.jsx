import React, {useState,} from 'react';
import Header from './Header';
import { connect, useSelector } from 'react-redux';
import { logout } from '../../redux/auth-reducer'

function HeaderContainer (props) {
    
    const isAuth = useSelector(state => state.auth.isAuth);
    const login = useSelector(state => state.auth.login);

        return <Header {...props} isAuth={isAuth} login={login} />
}

export default connect(null, { logout })(HeaderContainer)