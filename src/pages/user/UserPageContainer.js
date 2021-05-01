import { connect } from "react-redux";
import { getAuthors, getBookDetails } from "../../actions/userAction";
import UserPage from "./UserPage";

const mapStateToProps = state => {
  const {
    userReducer: { items,authors }
  } = state;

  let books = [];
  let allAuthors = []
  books = items;
  allAuthors = authors
  return {
    books,
    allAuthors
  };
};

const mapDispatchToProps = dispatch => ({ 
  getBookDetails: () => dispatch(getBookDetails()),
  getAuthors: () => dispatch(getAuthors()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
