import { ActionType } from "../actionTypes";

interface SearchNpmAction {
  type: ActionType.SEARCH_NPM;
}
interface SearchNpmSuccessAction {
  type: ActionType.SEARCH_NPM_SUCCESS;
  payload: string[];
}

interface SearchNpmErrorAction {
  type: ActionType.SEARCH_NPM_ERROR;
  payload: string;
}

export type Action =
  | SearchNpmAction
  | SearchNpmSuccessAction
  | SearchNpmErrorAction;
