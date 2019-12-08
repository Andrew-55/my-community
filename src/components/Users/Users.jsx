import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/User_default.png';

let Users = (props) => {
    debugger;
    let getUsers = () => {
        if (props.users.length === 0) {

            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    debugger;
                    props.setUsers(response.data.items);
                });
        }
    }
    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {props.users.map(user => (
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
