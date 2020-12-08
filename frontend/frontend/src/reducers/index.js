import { combineReducers } from "redux";
import users from "./user.reducer";
import posts from "./posts.reducer";
import auth from "./auth.reducer";

export default combineReducers({
  users,
  posts,
  auth,
});
