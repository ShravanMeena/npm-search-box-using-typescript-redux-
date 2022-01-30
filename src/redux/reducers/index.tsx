import { combineReducers } from "redux";
import npmReducer from "./npmReducer";

const reducers = combineReducers({
  npmReducer,
});

export default reducers;

export type RootState = ReturnType <typeof reducers>