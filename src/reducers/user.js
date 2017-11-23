import { USER_GET_SUCCESS, USER_GET_FAILER } from '../constants/user';

const initialState = {};

export default(state = initialState, action) => {
    switch (action.type) {
        case USER_GET_SUCCESS :
            return {
                ...state,
                ...action.payload
            };
        case USER_GET_FAILER :
            return {};
        default:
            return state;
    }
};