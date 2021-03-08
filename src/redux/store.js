import { createStore } from 'redux';
import { updater } from './reducers';

const defaultState = {
    activity: 'napping',
}

export const store = createStore(
    updater, 
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);