import { USER_GET_SUCCESS, USER_GET_FAILER } from '../constants/user';

const initialState = {
    name: null,
    role: 'guest',
};

export default(state = initialState, action) => {
    switch (action.type) {
        case USER_GET_SUCCESS :
            return {
                ...state,
                name: action.payload.name,
                role: action.payload.role,
            };
        case USER_GET_FAILER :
            return {
                ...state,
                name: null,
                role: 'guest',
            };
        default:
            return state;
    }
};