import axios from "axios";
import {

    SET_CURRENT_USER,
    USER_LOADING
} from "./types";
import {fetchMyProperties} from "./propertyActions";
// Register User
export const registerUser = (userData) => dispatch => {
    axios
        .post("http://localhost:5000/api/users/register", userData)
        .then(res => alert('Registered Successfully')) // re-direct to login on successful register
        .catch(err =>
            alert('Email Already Exist')
        );
};
// Login - get user token
export const loginUser = userData => dispatch => {
    console.log(userData);
    axios
        .post("http://localhost:5000/api/users/login", userData)
        .then(res => {

            localStorage.setItem("user",JSON.stringify(res.data) );
            dispatch(setCurrentUser(res.data));
            dispatch(fetchMyProperties(res.data.email));
            alert('Logged in Successfully');
        })
        .catch(err => {
           alert(err.response.data.message);
        });
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
    if (localStorage.getItem("user") != null){
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch(setCurrentUser(user));
        dispatch(fetchMyProperties(user.email));
    }

};
// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Log user out
export const logoutUser = () => dispatch => {


    axios
        .get("http://localhost:5000/api/users/logout")
        .then(res => {
            if (res.status === 200){
                dispatch(setCurrentUser({}));
                localStorage.removeItem("user");
                alert('Logged out Successfully');
            }

        })
        .catch(err => {
            alert('Logout Failed');
        });
};

