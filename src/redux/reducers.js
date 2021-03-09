import { ACTION_SET_ACTIVITY, ACTION_ADD_CAT } from './actionTypes';

export const updater = (state, action) => {
    const { id, activity, name } = action.payload || {};
    switch(action.type) {
        case ACTION_ADD_CAT:
            return {
                ...state,
                cats: {
                    ...state.cats,
                    [id]: { name, activity }
                }
            }
        case ACTION_SET_ACTIVITY:
            return {
                ...state,
                cats: {
                    ...state.cats,
                    [id]: { 
                        ...state.cats[id],
                        activity,
                    }
                }
            }
        default:
            return state;
    }
}