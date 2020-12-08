const express = require("express");
const router = express.Router();

const authentication = require("../middleware/authentication");
const {
  createPostValidator,
  searchForPostValidator,
  addCommentValidator,
  addCommentToCommentValidator,
} = require("../middleware/express-validator/express-validator");
const getPosts = require("../functions/postFunctions/getPosts");
const getPostsByDate = require("../functions/postFunctions/getPostsByDate");
const getSinglePost = require("../functions/postFunctions/getSinglePost");
const getUserPostsByMiddleware = require("../functions/postFunctions/getUserPostsByMiddleware");
const getUserPostsById = require("../functions/postFunctions/getUserPostsById");
const createPost = require("../functions/postFunctions/createPost");
const searchForPost = require("../functions/postFunctions/searchForPost");
const addLike = require("../functions/postFunctions/addLike");
const addComment = require("../functions/postFunctions/addComment");
const likeComment = require("../functions/postFunctions/likeComment");
const removePost = require("../functions/postFunctions/removePost");
const removeLikeFromPost = require("../functions/postFunctions/removeLikeFromPost");
const removeComment = require("../functions/postFunctions/removeComment");
const removeLikeFromComment = require("../functions/postFunctions/removeLikeFromComment");
const addCommentToComment = require("../functions/postFunctions/addCommentToComment");

router.get("/posts", getPosts);

router.get("/posts/the_most_recent", getPostsByDate);

router.get("/single_post/:post_id", getSinglePost);

router.get("/user_posts/:user_id", getUserPostsById);

router.get("/user_posts", authentication, getUserPostsByMiddleware);

router.post("/", authentication, createPostValidator, createPost);

router.put("/search_for_post", searchForPostValidator, searchForPost);

router.put("/likes/:post_id", authentication, addLike);

router.put(
  "/add_comment/:post_id",
  authentication,
  addCommentValidator,
  addComment
);

router.put("/like_comment/:post_id/:comment_id", authentication, likeComment);

router.put(
  "/inner_comment/:post_id/:comment_id",
  authentication,
  addCommentToCommentValidator,
  addCommentToComment
);

router.delete("/delete_post/:post_id", authentication, removePost);

router.delete(
  "/remove_like_from_post/:post_id/:like_id",
  authentication,
  removeLikeFromPost
);

router.delete(
  "/remove_comment/:post_id/:comment_id",
  authentication,
  removeComment
);

router.delete(
  "/remove_like_from_comment/:post_id/:comment_id/:like_id",
  authentication,
  removeLikeFromComment
);

module.exports = router;
