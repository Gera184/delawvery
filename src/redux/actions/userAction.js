import { ActionTypes } from "../contants/action-types";

export const setUserDeatils = (userDeatils) => {
  return {
    type: ActionTypes.SET_USER_DETAILS,
    payload: userDeatils,
  };
};

export const removeSelectedUser = (userIndex) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_USER,
    userId: userIndex,
  };
};

export const editSelectedUser = (userId, userDeatils) => {
  return {
    type: ActionTypes.EDIT_SELECTED_USER,
    userId: userId,
    payload: userDeatils,
  };
};
