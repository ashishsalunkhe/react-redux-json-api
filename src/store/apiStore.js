// Creating store

import { createStore, applyMiddleware } from "redux";
import apiReducer from "./apiReducer";
import logger from 'redux-logger' // built-in middleware for logging
import thunk from 'redux-thunk'; // built-in middleware allows you to
// write action creators that return function instead of an object
import promise from 'redux-promise-middleware';
const middleware = applyMiddleware(logger, thunk, promise)
const store = createStore(apiReducer, middleware)


export default store