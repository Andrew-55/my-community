import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/User_default.png';



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div> {pages.map(page => {
                return (< span className={props.currentPage === page && style.selectedPage}
                    onClick={(e) => { props.onPageChanged(page) }}>{page}</span>)
            })}
            </div>
            {
                props.users.map(user => (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto} alt='' />
                            </div>
                            <div>
                                {user.followed ? <button onClick={() => { props.unfollow(user.id) }}>unfollow</button>
                                    : <button onClick={() => { props.follow(user.id) }} >follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {user.name}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {'user.location.city'}
                                </div>
                                <div>
                                    {'user.location.country'}
                                </div>
                            </span>
                        </span>
                    </div>))
            }
        </div >
    )
}

export default Users;
