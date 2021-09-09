import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import store from './redux/redux-store';
// import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login';
import React from 'react';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

  catchAllUnhadleErrors = (reason, promise) => {
    alert('Some Error occured');
    // console.log('Reason: ', reason);
    // console.error(promiseRejectionEvent);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhadleErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhadleErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper container">
        <div className='row'>
          <HeaderContainer />
          <Navbar className='' />
        </div>

        <div className=''>
          <div className='app-wrapper-content col'>
            <Switch>
              <Route path='/dialogs' render={() => {
                return <React.Suspense fallback={<div>Loading...</div>}><DialogsContainer /></React.Suspense>
              }} />
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => <LoginPage />} />
              <Route path='/sidebar' render={() => <SidebarContainer />} />
              <Route path="*" render={() => <div>404. Not Found</div> } />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SanuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SanuraiJSApp;