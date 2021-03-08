import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from './actionTypes';

export const counter = (state, action) => {
    switch(action.type) {
        case ACTION_NAP: 
            return {
                activity: 'napping'
            }
        case ACTION_EAT:
            return {
                activity: 'eating'
            }
        case ACTION_PLAY:
            return {
                activity: 'playing'
            }
        default:
            return state;
    }
}