import axios from "axios";

import { ADD_LIKE, POST_ERROR } from "../../../constants/posts.constants";
import { getPosts } from "../posts.actions/getPosts";
import { getMostRecentPosts } from "../posts.actions/getMostRecentPosts";

export const addLikeToPost = (post_id, isOldest, isMostRecent) => async (
  dispatch
) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/posts/likes/${post_id}`
    );
    dispatch({ type: ADD_LIKE, payload: res.data });

    if (isOldest) {
      dispatch(getPosts());
    } else if (isMostRecent) {
      dispatch(getMostRecentPosts());
    }
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};
