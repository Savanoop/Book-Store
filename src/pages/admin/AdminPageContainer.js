import { connect } from "react-redux";
import { getAuthorDetails } from "../../actions/adminAction";
import AdminPage from "./AdminPage";

const mapStateToProps = state => {
  const {
    adminReducer: { items }
  } = state;

  let authorDetails = [];
  authorDetails = items;
  return {
    authorDetails,
  };
};

const mapDispatchToProps = dispatch => ({
  
  getAuthorDetails: () => dispatch(getAuthorDetails()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
