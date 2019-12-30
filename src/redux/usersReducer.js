import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FFOLLOWING';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

export const followSuccess = (userId) => { return { type: FOLLOW, userId } }
export const unfollowSuccess = (userId) => { return { type: UNFOLLOW, userId } }
export const setUsers = (users) => { return { type: SET_USERS, users } }
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } }
export const setTonalUsersCount = (totalCount) => { return { type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount } }
export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } }
export const toggleIsFollowing = (isFetching, userId) => { return { type: TOGGLE_IS_FOLLOWING, isFetching, userId } }

export const getUsers = (page, pageSize) => {
    debugger;
    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        userAPI.getUser(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTonalUsersCount(data.totalCount))
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {

        dispatch(toggleIsFollowing(true, userId));
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowing(false, userId));
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {

        dispatch(toggleIsFollowing(true, userId));
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowing(false, userId));
            });
    }
}


export default usersReducer;
