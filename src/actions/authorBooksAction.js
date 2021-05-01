import { LoginTypes } from "../const/ActionTypes";
import { books } from '../helper/data'

export const getAuthorBooks = (id) => {
   const localData = localStorage.getItem('books') && JSON.parse(localStorage.getItem('books'))
   const localAuthorData = localData ? localData.filter(book => book.author_id === id): [];
  const authorBooks = books.filter(book => book.author_id === id);
  return dispatch => {
    dispatch({
      type: LoginTypes.GET_AUTHOR_BOOKS_LOADING
    });
    dispatch({
      type: LoginTypes.GET_AUTHOR_BOOKS_SUCCESS,
      payload: [...localAuthorData,...authorBooks],
    });
    
  };
};

export const addAuthorBooks = (addedBook) => {
  return dispatch => {
    dispatch({
      type: LoginTypes.ADD_AUTHOR_BOOKS_SUCCESS,
      payload: addedBook
    });
  };
};