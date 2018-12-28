import * as ActionTypes from "../actions/types";

const initialState = {
    isLoading:true,
    errMess:null,
    properties:[]
};
export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_PROPERTIES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                properties: action.payload
            };

        case ActionTypes.ADD_PROPERTY:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                properties: [
                    ...state.properties,
                    action.payload
                ]
            };
        case ActionTypes.PROPERTY_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                properties: []
            };
        case ActionTypes.PROPERTY_ERROR:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                properties: []
            };
        default:
            return state;
    }
}