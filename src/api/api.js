import * as axios from 'axios';



const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {
            'API-KEY': '3e67af7d-111f-4303-88b4-a9cc5b13a435'
        }

    }
)

export const userAPI = {
    getUser(currentPage = 1, pageSize = 10) {
        debugger;
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

