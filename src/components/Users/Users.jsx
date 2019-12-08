import React from 'react';
import style from './Users.module.css';


let Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, followed: false, photoUserUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
                fullName: 'Dimych', status: 'I am boss', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2, followed: true, photoUserUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
                fullName: 'Andrew', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 3, followed: false, photoUserUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
                fullName: 'Bory', status: 'I am boss', location: { city: 'Kiev', country: 'Ukraine' }
            }
        ]);
    }
    return (
        <div>
            {props.users.map(user => (
                <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUserUrl} className={style.userPhoto} alt='' />
                        </div>
                        <div>
                            {user.followed ? <button onClick={() => { props.unfollow(user.id) }}>unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }} >follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {user.fullName}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {user.location.city}
                            </div>
                            <div>
                                {user.location.country}
                            </div>
                        </span>
                    </span>
                </div>))
            }
        </div >
    )
}

export default Users;
