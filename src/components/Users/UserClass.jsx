import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/User_default.png';

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {

            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    debugger;
                    this.props.setUsers(response.data.items);
                });
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>GET USERS</button>
                {this.props.users.map(user => (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto} alt='' />
                            </div>
                            <div>
                                {user.followed ? <button onClick={() => { this.props.unfollow(user.id) }}>unfollow</button>
                                    : <button onClick={() => { this.props.follow(user.id) }} >follow</button>}
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
}

export default Users;