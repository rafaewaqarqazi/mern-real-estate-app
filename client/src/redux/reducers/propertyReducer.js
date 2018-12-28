import {
    ADD_PROPERTIES,
    ADD_PROPERTY
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {};
export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_PROPERTIES:
            return {
                ...state,
                properties: action.payload
            };

        case ADD_PROPERTY:
            return {
                ...state,
                properties: [
                    ...state.properties,
                    action.payload
                ]
            };
        default:
            return state;
    }
}