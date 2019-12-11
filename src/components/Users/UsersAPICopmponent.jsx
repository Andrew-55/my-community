import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/User_default.png';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                debugger;
                this.props.setUsers(response.data.items);
                this.props.setTonalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                debugger;
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        debugger;
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div> {pages.map(page => {
                    return < span className={this.props.currentPage === page && style.selectedPage}
                        onClick={(e) => { this.onPageChanged(page) }}>{page}</span>
                })}
                </div>
                {
                    this.props.users.map(user => (
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

export default UsersAPIComponent;
