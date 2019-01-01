import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback, ContactForm} from "../forms/forms";
import authReducer from "../reducers/authReducers";
import propertyReducer from '../reducers/propertyReducer';
import recentPropertiesReducer from '../reducers/recentPropertiesReducer';
import myPropertyReducer from "../reducers/myPropertyReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            properties:propertyReducer,
            recent:recentPropertiesReducer,
            myProperties: myPropertyReducer,
            ...createForms({
                addProperty: InitialFeedback,
                contact: ContactForm
            })
        }),
        compose(
            applyMiddleware(thunk, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

    );

    return store
};