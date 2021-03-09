import { ACTION_SET_ACTIVITY, ACTION_ADD_CAT } from './actionTypes';

export const updater = (state, action) => {
    const { id, activity, newCat } = action.payload;
    switch(action.type) {
        case ACTION_ADD_CAT:
            return {
                ...state,
                cats: {
                    ...state.cats,
                    [id]: newCat
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