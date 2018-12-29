import * as ActionTypes from "../actions/types";

const initialState = {
    isLoading:true,
    errMess:null,
    recent:[]
};
export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_RECENT:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                recent: action.payload
            };

        case ActionTypes.RECENT_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                recent: []
            };
        case ActionTypes.RECENT_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                recent: []
            };
        default:
            return state;
    }
}