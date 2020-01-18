import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import DialogsConteiner from './components/Dialogs/DialogsConteiners';
import UsersConteiners from './components/Users/UsersConteiners';
import ProfileConteiners from './components/Profile/ProfileConteiners';
import HeaderConteiner from './components/Header/HeaderConteiner';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloarder from './components/common/Preloarder/Preloader';

class App extends React.Component {


  componentDidMount() {
    this.props.initializeApp();
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
          <Route path='/profile/:userId?' render={() => <ProfileConteiners />} />
          <Route path='/dialogs' render={() => <DialogsConteiner />} />
          <Route path='/users' render={() => <UsersConteiners />} />
          <Route path='/login' render={() => <LoginPage />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

