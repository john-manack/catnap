import { createStore } from 'redux';
import { updater } from './reducers';

const defaultState = {
    cats: {
        1001: {
            name: 'Rosie',
            activity: 'flopping'
        },
        1002: {
            name: 'Maslow',
            activity: 'meowing'
        }
    },
}

export const store = createStore(
    updater, 
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Old state
// name: 'Guster',
// activity: 'staring at you',