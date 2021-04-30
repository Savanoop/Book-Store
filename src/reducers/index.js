import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import adminReducer from './adminReducer';
import userReducer from './userReducer'
import authorBookReducer from './authorBookReducer'


const rootReducers = combineReducers({
  loginReducer,
  adminReducer,
  userReducer,
  authorBookReducer,
});

export default rootReducers;
