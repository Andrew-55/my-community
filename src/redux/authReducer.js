import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL = 'samurai-network/auth/GET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    capthaUrl: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => {

    return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } }
};

export const getCaptchaUrlSuccess = (captchaUrl) => {

    return { type: GET_CAPTCHA_URL, payload: { captchaUrl } }
};



export const getUserData = () => async (dispatch) => {

    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let { id, email, login, } = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {

    let response = await securityAPI.getCaptchaUrl();
    const capthaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(capthaUrl))
}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;
