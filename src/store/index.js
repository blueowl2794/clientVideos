// import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// import {composeWithDevTools} from 'redux';
import info from './reducer';
// import thunk from 'redux-thunk';

const store = configureStore({
    reducer:{
        info
    }
});

export default store;