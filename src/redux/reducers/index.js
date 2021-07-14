import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";
import { loginReducer } from "./loginReducer";
import { practiceQuestionReducer } from "./practiceQuestionReducer";
import { profileReducer } from "./profileReducer";

export default combineReducers({
  registerReducer,
  loginReducer,
  practiceQuestionReducer,
  profileReducer,
});
