import React from "react";
import TopicPost from "./TopicPost";

const TopicPostsWrapper = ({
  isTheOldest,
  isTheMostRecent,
  posts,
}) =>
  posts !== null &&
  posts.length > 0 &&
  posts.map((post) => (
    <TopicPost
      isTheOldest={isTheOldest}
      isTheMostRecent={isTheMostRecent}
      post={post}
      key={post._id}
    />
  ));

export default TopicPostsWrapper;
