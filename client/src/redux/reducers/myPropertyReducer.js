import * as ActionTypes from "../actions/types";

const initialState = {
    isLoading:true,
    errMess:null,
    myProperties:[]
};
export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_MY_PROPERTIES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                myProperties: action.payload
            };

        case ActionTypes.MY_PROPERTIES_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                myProperties: []
            };
        case ActionTypes.MY_PROPERTIES_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                myProperties: []
            };

        case ActionTypes.REMOVE_MY_PROPERTY:
            return{
                ...state,
                myProperties: state.myProperties.filter(prop => prop._id !== action.payload )
            };
        default:
            return state;
    }
}