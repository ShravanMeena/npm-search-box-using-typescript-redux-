import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionType } from "../actionTypes";

export const searchNpms = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_NPM,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.com/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data?.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_NPM_SUCCESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_NPM_ERROR,
        payload: "Error",
      });
    }
  };
};
