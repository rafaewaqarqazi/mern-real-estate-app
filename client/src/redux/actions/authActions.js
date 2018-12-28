import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
    GET_CURRENT_USER,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";
// Register User
export const registerUser = (userData) => dispatch => {
    axios
        .post("http://localhost:5000/api/users/register", userData)
        .then(res => alert('Registered Successfully')) // re-direct to login on successful register
        .catch(err =>
            console.log(err)
        );
};
// Login - get user token
export const loginUser = userData => dispatch => {
    console.log(userData);
    axios
        .post("http://localhost:5000/api/users/login", userData)
        .then(res => {
                alert(JSON.stringify(res.data));
            dispatch(setCurrentUser(res.data));
            alert('Logged in Successfully');

        })
        .catch(err =>
           console.log(err)
        );
};
// Set logged in user
export const setCurrentUser = userId => {
    return {
        type: SET_CURRENT_USER,
        payload: userId
    };
};
// Get current user
export const getCurrentUser = () => dispatch => {
    dispatch(setUserLoading());
    axios
        .get("http://localhost:5000/api/user/currentuser")
        .then(res =>
            dispatch({
                type: GET_CURRENT_USER,
                payload: res.data
            })
        )
        .catch(err =>
            console.log(err)
        );
};
// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};
// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
    alert('Logged out Successfully');

};