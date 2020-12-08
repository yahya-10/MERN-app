import React, { useState } from "react";
import Moment from "react-moment";
import { connect } from "react-redux";

import { removeLikeFromComment } from "../../actions/posts.actions/likes.actions/removeLikeFromComment";
import { addLikeToComment } from "../../actions/posts.actions/likes.actions/addLikeToComment";
import Spinner from "../../Spinner";
import { addCommentToComment } from "../../actions/posts.actions/comments.actions/addCommentToComment";

const Comment = ({
  comment,
  auth,
  post,
  addCommentToComment,
  removeLikeFromComment,
  addLikeToComment,
}) => {
  const [innerComment, setInnerComment] = useState("");

  const onChange = (e) => {
    setInnerComment(e.target.value);
  };

  const { textOfInnerComment } = innerComment;

  return post === null || post === [] ? (
    <div className="all-page-wrapper flex__center">
      <Spinner />
    </div>
  ) : (
    <div className="topic-wrapper" key={comment._id}>
      <div className="topic-date">
        <Moment format="HH:mm YYYY-MM-DD">{comment.date}</Moment>
      </div>

      <div className="topic-user">
        <img src={comment.avatar} className="topic-avatar" alt="" />
        <p className="font__p p__size">{comment.userName}</p>
      </div>

      <div className="topic-section">
        <p>{comment.textOfTheComment}</p>
        <div className="topic-section-links">
          <div
            className="like-section"
            style={{ color: "white" }}
            onClick={() => {
              if (comment.likes.find((like) => like.user === auth.user._id)) {
                comment.likes.find((like) =>
                  removeLikeFromComment(post._id, comment._id, like._id)
                );
              } else {
                addLikeToComment(post._id, comment._id);
              }
            }}
          >
            <div className="font__p font__bold p__size like-item">
              <i
                className={
                  comment.likes.find((like) => like.user === auth.user._id)
                    ? "fas fa-thumbs-up"
                    : "far fa-thumbs-up"
                }
              ></i>
            </div>

            <div className="font__p font__bold p__size likes-length-item">
              <p>{comment.likes.length}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <textarea
              type="text"
              value={textOfInnerComment}
              onChange={(e) => onChange(e)}
            />
            <button
              style={{
                padding: 10,
                backgroundColor: "#3cd1fd",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => addCommentToComment(innerComment)}
            >
              Comment Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.posts.post,
});

const mapDispatchToProps = {
  removeLikeFromComment,
  addLikeToComment,
  addCommentToComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
