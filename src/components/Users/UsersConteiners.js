import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTonalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import Preloarder from '../common/Preloarder/Preloader';




class UsersAPIComponent extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                debugger;
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTonalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                debugger;
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
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
            />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersConteiners = connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setTonalUsersCount, toggleIsFetching })(UsersAPIComponent);

export default UsersConteiners;