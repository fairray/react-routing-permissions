import {
    USER_GET_SUCCESS,
    USER_GET_FAILER
} from '../constants/user';

export const successUser = (user) => {
    return ({
        type: USER_GET_SUCCESS,
        payload: user
    })
}
export const failerUser = () => {
    return ({
        type: USER_GET_FAILER,
    })
}