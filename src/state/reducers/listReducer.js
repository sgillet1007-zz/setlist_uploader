import { UPLOAD_LIST, REORDER_LIST, CLEAR_LIST } from '../actions/types';

const initialState = {
    list: []
}

export default function(state = initialState, action) {
    const actions = [UPLOAD_LIST, REORDER_LIST, CLEAR_LIST]
    if (actions.includes(action.type)) {
        return {
            ...state,
            list: action.payload
        };
    } else {
        return state;
    }
}