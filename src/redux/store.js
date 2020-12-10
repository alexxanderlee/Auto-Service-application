import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

function saveToLocalStorage(state) {
    try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
    console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
    } catch (e) {
    console.warn(e);
    return undefined;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, loadFromLocalStorage(), composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;