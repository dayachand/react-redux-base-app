import {toastr} from 'react-redux-toastr';
import {
    FACEBOOK_UNREGISTERED_USER,
    GOOGLE_UNREGISTERED_USER
} from '../Types';
import axios from "axios/index";
import {API_URL, SERVICE_NAME} from "../../config/config";

/**
 * User registration action
 * @param data
 * @param callback
 * @returns {function(*)}
 */
export function registerUser(data, callback) {
    const formData = {...data, service: SERVICE_NAME};
    const request = axios.post(`${API_URL}/auth/registration/`, formData);
    return (dispatch)=> {
        request.then((data) => {
            callback(data);
        })
            .catch(function (error) {
                callback(error.response);
            });
    }
}

/**
 * User login action
 * @param data
 * @param callback
 * @returns {function(*)}
 */
export function login(data,callback){
    const formData = {...data, service: SERVICE_NAME};
    const request = axios.post(`${API_URL}/auth/login/`, formData);
    return (dispatch)=> {
        request.then((data) => {
            callback(data);
        })
        .catch(function (error) {
            callback(error.response);
        });
    }
}

/**
 * Facebook login action
 * @param data
 * @param callback
 * @returns {function(*)}
 */
export function fbLogin(data, callback){
    const formData = {...data, service: SERVICE_NAME};
    const request = axios.post(`${API_URL}/auth/login/facebook/`, formData);
    return (dispatch)=> {
        request.then((data) => {
            callback(data);
        })
        .catch(function (error) {
            callback(error.response);
            dispatch({
                type    : FACEBOOK_UNREGISTERED_USER,
                payload : formData
            });
        });
    }
}

/**
 * Google login action
 * @param data
 * @param callback
 * @returns {function(*)}
 */
export function gLogin(data, callback){
    const formData = {...data, service: SERVICE_NAME};
    const request = axios.post(`${API_URL}/auth/login/googleplus/`, formData);
    return (dispatch)=> {
        request.then((data) => {
            callback(data);
        })
        .catch(function (error) {
            callback(error.response);
            dispatch({
                type    : GOOGLE_UNREGISTERED_USER,
                payload : formData
            });
        });
    }
}

/**
 * Forgot password
 * @param values
 * @param callback
 * @returns {function(*)}
 */
export function forgotPassword(data,callback){
    const formData = {...data, service: SERVICE_NAME};
    const request = axios.post(`${API_URL}/auth/reset/`, formData);
    return (dispatch)=> {
        request.then((data) => {
            callback(data);
        })
        .catch(function (error) {
            callback(error.response);
        });
    }
}

/**
 * Reset password
 * @param values
 * @param callback
 * @returns {function(*)}
 */
export function resetPassword(data,callback){
    const formData = {...data, service: SERVICE_NAME};
    const request = axios.post(`${API_URL}/auth/reset/confirm/`, formData);
    return (dispatch)=> {
        request.then((data) => {
            callback(data);
        })
        .catch(function (error) {
            callback(error.response);
        });
    }
}

/**
 * Resend confirmation email
 * @param data
 * @param callback
 * @returns {function(*)}
 */
export function resendConfirmationEmail(data,callback){
    const formData = {...data, service: SERVICE_NAME};
    const request = axios.put(`${API_URL}/auth/email-resend/`, formData);
    return (dispatch)=> {
        request.then((data) => {
            callback(data);
        })
        .catch(function (error) {
            callback(error.response);
        });
    }
}