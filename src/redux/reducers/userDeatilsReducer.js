import { ActionTypes } from "../contants/action-types";
import update from "immutability-helper";

const initialState = {
  arr: [],
};
export const userDeatilsReducer = (
  state = initialState,
  { type, payload, userId }
) => {
  switch (type) {
    case ActionTypes.SET_USER_DETAILS:
      return { ...state, arr: [...state.arr, payload] };
    case ActionTypes.REMOVE_SELECTED_USER:
      return { ...state, arr: state.arr.filter((user, i) => i !== userId) };
    case ActionTypes.EDIT_SELECTED_USER:
      return {
        ...state,
        arr: state.arr.map((user, i) =>
          user.id === payload.id
            ? {
                ...user,
                id: payload.id,
                firstName: payload.firstName,
                lastName: payload.lastName,
                date: payload.date,
              }
            : user
        ),
      };
    default:
      return state;
  }
};
