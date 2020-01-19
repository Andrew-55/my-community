import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/User_default.png';
import { NavLink } from 'react-router-dom';
//import Paginator from '../common/Paginator/Paginator';

let User = ({ user, followingInProgress, follow, unfollow }) => {

    return (
        <div >
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id} >
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto} alt='' />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }} >follow</button>}
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
        </div>)
}

export default User;
