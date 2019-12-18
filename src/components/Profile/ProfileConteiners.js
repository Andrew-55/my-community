import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class ProfileConteiners extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) {

            return (<Redirect to={'/login'} />)
        }
        return (
            <div className=''>
                <Profile {...this.props} profile={this.props.profile} />
            </div >
        )
    }
}
let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileConteiners);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
