import { Action } from "../actions";
import { ActionType } from "../actionTypes";

interface NpmInitialState {
  loading: boolean;
  error: null | string;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const npmReducer = (
  state: NpmInitialState = initialState,
  action: Action
): NpmInitialState => {
  switch (action.type) {
    case ActionType.SEARCH_NPM:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_NPM_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_NPM_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default npmReducer;
