import { SUB, ADD } from './actionType.js';

const initialState = { num: 0 };
function reducer(state=initialState, action) {
    switch(action.type) {
        case ADD:
            return {
                ...state,
                num: state.num + action.num
            };
        case SUB:
            return {
                ...state,
                num: state.num - action.num
            }
        default:
            return state;
    }
}

export default reducer;