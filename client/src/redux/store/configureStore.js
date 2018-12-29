import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback} from "../forms/forms";
import authReducer from "../reducers/authReducers";
import propertyReducer from '../reducers/propertyReducer';
import recentPropertiesReducer from '../reducers/recentPropertiesReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            properties:propertyReducer,
            recent:recentPropertiesReducer,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        compose(
            applyMiddleware(thunk, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

    );

    return store
};