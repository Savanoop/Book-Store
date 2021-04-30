import { connect } from "react-redux";
import { getAuthorBooks, addAuthorBooks } from "../../../actions/authorBooksAction";
import AuthorBook from "./AuthorBook";

const mapStateToProps = state => {
  const {
    authorBookReducer: { items }
  } = state;

  let authorBooks = [];
  authorBooks = items;
  return {
    authorBooks,
  };
};

const mapDispatchToProps = dispatch => ({
  addAuthorBooks: (authorBook) => dispatch(addAuthorBooks(authorBook)),
  getAuthorBooks: (id) => dispatch(getAuthorBooks(id)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorBook);
