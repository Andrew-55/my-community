import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import UsersConteiners from './components/Users/UsersConteiners';
import HeaderConteiner from './components/Header/HeaderConteiner';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloarder from './components/common/Preloarder/Preloader';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';


const DialogsConteiner = React.lazy(() => import('./components/Dialogs/DialogsConteiners'));
const ProfileConteiners = React.lazy(() => import('./components/Profile/ProfileConteiners'));


class App extends React.Component {

  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error occured")
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillMount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {

    if (!this.props.initialized) {
      return <Preloarder />
    }

    return (
      <div className='app-wrapper' >
        <HeaderConteiner />
        <Navbar />
        <div className='app-wrapper-contenet'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to={'/profile/'} />} />
            <Route path='/profile/:userId?' render={withSuspense(ProfileConteiners)} />
            <Route path='/dialogs' render={withSuspense(DialogsConteiner)} />
            <Route path='/users' render={() => <UsersConteiners />} />
            <Route path='/login' render={() => <LoginPage />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/*' render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter >
}

export default SamuraiJSApp;
