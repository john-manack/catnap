import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from './actionTypes';

export const actionNap = () => {
    return {
        type: ACTION_NAP,
    }
}

export const actionEat = () => {
    return {
        type: ACTION_EAT,
    }
}

export const actionPlay = () => {
    return {
        type: ACTION_PLAY,
    }
}