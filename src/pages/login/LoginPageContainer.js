import LoginPage from "./LoginPage";
import { connect } from "react-redux";
import { getLoginCredential } from "../../actions/loginAction";

const mapStateToProps = state => {
  const {
    loginReducer: { items }
  } = state;

  let loginDetails = [];
  loginDetails = items;
  return {
    loginDetails,
  };
};

const mapDispatchToProps = dispatch => ({
  
  getLoginCredential: () => dispatch(getLoginCredential()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
