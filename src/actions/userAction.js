import { LoginTypes } from "../const/ActionTypes";
import { author, books } from '../helper/data'

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
export const getAuthors = () => {
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