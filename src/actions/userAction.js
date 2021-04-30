import { LoginTypes } from "../const/ActionTypes";
import { books } from '../helper/data'

export const getBookDetails = () => {
  return dispatch => {
    dispatch({
      type: LoginTypes.GET_BOOKS_DETAILS_LOADING
    });
    dispatch({
      type: LoginTypes.GET_BOOKS_DETAILS_SUCCESS,
      payload: books
    });
  };
};