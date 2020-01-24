import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount} pageSize={pageSize} />
            <div>
                {
                    users.map(user => <User user={user}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        key={user.id} />)
                }
            </div>
        </div >
    )
}

export default Users;
