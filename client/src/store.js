import { combineReducers, createStore, applyMiddleware } from 'redux';
import getAllPizzasReducers from './reducers/pizzasReducers';
import {thunk }from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const finalReducers = combineReducers({
  getAllPizzasReducers: getAllPizzasReducers
});

const initialState = {};

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(finalReducers, initialState, composeEnhancers);

export default store;
