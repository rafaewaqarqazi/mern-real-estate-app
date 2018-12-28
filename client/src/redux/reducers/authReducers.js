import * as ActionTypes from "../actions/types";
import isEmpty from 'is-empty';
const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};
export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case ActionTypes.USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.GET_CURRENT_USER:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };
        default:
            return state;
    }
}