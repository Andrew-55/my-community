import React from 'react';
import {
    follow, unfollow, setCurrentPage,
    toggleIsFollowing,
    getUsers
} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloarder from '../common/Preloarder/Preloader';
import { compose } from 'redux';
import {
    getUsersState, getPageSize, getTotalUsersCount,
    getCurrentPage, getIsFetching, getFollowingInProgress
} from '../../redux/usersSelectors';



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);

    }

    onPageChanged = (page) => {
        const { pageSize } = this.props;
        this.props.getUsers(page, pageSize);

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloarder /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
        { follow, unfollow, toggleIsFollowing, setCurrentPage, getUsers: getUsers })
)(UsersAPIComponent);
