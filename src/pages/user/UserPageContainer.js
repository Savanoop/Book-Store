import { connect } from "react-redux";
import { getBookDetails } from "../../actions/userAction";
import UserPage from "./UserPage";

const mapStateToProps = state => {
  const {
    userReducer: { items }
  } = state;

  let books = [];
  books = items;
  return {
    books,
  };
};

const mapDispatchToProps = dispatch => ({ 
  getBookDetails: () => dispatch(getBookDetails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
