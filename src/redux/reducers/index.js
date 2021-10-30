import { combineReducers } from "redux";
import { userDeatilsReducer } from "./userDeatilsReducer";

const reducers = combineReducers({
  user: userDeatilsReducer,
});

export default reducers;
