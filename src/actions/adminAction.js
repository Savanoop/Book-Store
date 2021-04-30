import { LoginTypes } from "../const/ActionTypes";
import { author } from '../helper/data'

export const getAuthorDetails = () => {
  return dispatch => {
    dispatch({
      type: LoginTypes.GET_AUTHOR_DETAILS_LOADING
    });
    dispatch({
      type: LoginTypes.GET_AUTHOR_DETAILS_SUCCESS,
      payload: author
    });
  };
};
