import { userActionsTypes } from './user.types';

const { SET_CURRENT_USER } = userActionsTypes;

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})