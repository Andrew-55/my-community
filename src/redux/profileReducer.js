import { userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';

let initialState = {

    posts: [
        { id: 1, message: 'Hi, How are you?', likecount: 15 },
        { id: 2, message: 'Hi, How are you?', likecount: 18 },
        { id: 3, message: 'Hi, How are you?', likecount: 17 },
        { id: 4, message: 'It is my first post', likecount: 20 },

    ],

    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likecount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then(response => {

            dispatch(setUserProfile(response.data));
        });
    }
}

export default profileReducer;
