import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTonalUsersCountAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import UsersAPIComponent from './UsersAPICopmponent';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTonalUsersCount: (totalCount) => {
            dispatch(setTonalUsersCountAC(totalCount))
        }
    }
}

const UsersConteiners = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersConteiners;