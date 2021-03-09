import { ACTION_SET_ACTIVITY, ACTION_ADD_CAT } from './actionTypes'

export const setNewCat = (newCat) => {
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return {
        type: ACTION_ADD_CAT,
        payload: { newCat, id }
    }
}

export const setActivity = (id, activity) => {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: { id, activity }
    }
}