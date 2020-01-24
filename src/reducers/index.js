import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
  // dummy reducer to make it woork, to do not get errors
  //dummy: () => "dummy"
});
