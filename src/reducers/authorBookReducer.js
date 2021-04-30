import { LoginTypes } from "../const/ActionTypes";

const INITIAL_STATE = {
  items: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LoginTypes.GET_AUTHOR_BOOKS_LOADING:
      return { ...state, loading: true };

    case LoginTypes.GET_AUTHOR_BOOKS_SUCCESS:
      return { ...state, items: payload, loading: false };

    case LoginTypes.ADD_AUTHOR_BOOKS_SUCCESS:
      return {
        ...state, items:[...state.items,payload],
        loading: false
      };

    default:
      return state;
  }
};
