import axios from "axios";

import { getPost } from "../posts.actions/getPost";

import {
  ADD_COMMENT_TO_COMMENT,
  POST_ERROR,
} from "../../../constants/posts.constants";

export const addCommentToComment = (
  textOfInnerComment,
  post_id,
  comment_id,
) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ textOfInnerComment });
    const res = await axios.put(
      `http://localhost:5000/api/posts/inner_comment/${post_id}/${comment_id}`,
      body,
      config
    );
    dispatch({ type: ADD_COMMENT_TO_COMMENT, payload: res.data });
    dispatch(getPost(post_id));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};
