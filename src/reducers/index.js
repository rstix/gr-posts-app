import { combineReducers } from "redux";
import postsReducers from "./postsReducers";

export default combineReducers({
  posts: postsReducers
  // dummy reducer to make it woork, to do not get errors
  //dummy: () => "dummy"
});
