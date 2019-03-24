/*
FileName: store.js
Author: Caitlin Huang
Description:  The Redux store that maintains all the states of the application workflow.
*/
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleware)
);

export default store;