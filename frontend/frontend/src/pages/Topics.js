import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import TopicPostsWrapper from "./TopicPosts/TopicPostsWrapper";

import { getPosts } from "../actions/posts.actions/posts.actions/getPosts";
import { getMostRecentPosts } from "../actions/posts.actions/posts.actions/getMostRecentPosts";
import { searchTopics } from "../actions/posts.actions/searchTopics";



const Topics = ({
  getPosts,
  getMostRecentPosts,
  searchTopics,
  posts,
}) => {
  let [dataFromSearch, setDataFromSearch] = useState("");
  let [topicsSortType, setTopicsSortType] = useState({
    isTheOldest: false,
    isTheMostRecent: true,
  });

  let { isTheOldest, isTheMostRecent } = topicsSortType;

  useEffect(() => {
    if (isTheOldest) getPosts();
    else getMostRecentPosts();
  }, []);

  const onChange = (e) => setDataFromSearch(e.target.value);

  const searchForTopic = () => {
    if (dataFromSearch !== "" || dataFromSearch !== null) {
      return searchTopics(dataFromSearch);
    } else {
      setTopicsSortType({
        isTheMostRecent: true,
        isTheOldest: false,
      });
      getMostRecentPosts();
    }
  };

  const changeTopicsType = (changedType) => {
    if (changedType === "isTheMostLiked") {
      setTopicsSortType({
        isTheOldest: false,
        isTheMostRecent: false,
      });
    } else if (changedType === "isTheOldest") {
      setTopicsSortType({
        isTheOldest: true,
        isTheMostRecent: false,
      });
      getPosts();
    } else if (changedType === "isTheMostCommented") {
      setTopicsSortType({
        isTheOldest: false,
        isTheMostRecent: false,
      });
    } else {
      setTopicsSortType({
        isTheOldest: false,
        isTheMostRecent: true,
      });
      getMostRecentPosts();
    }
  };

  return (
    <div>
      <header className="topics-header">
        <p className="app_color_font font__bold font__p topics-headline">
          Topics
        </p>
        <br />

        <div
          className={
            isTheOldest
              ? "header-checkbox app_color_font p__size font__p font__bold"
              : "header-checkbox app_color_font p__size font__p"
          }
        >
          <input
            type="checkbox"
            value={isTheOldest}
            checked={isTheOldest}
            onChange={() => changeTopicsType("isTheOldest")}
          />
          <p onClick={() => changeTopicsType("isTheOldest")}>The Oldest</p>
        </div>

        <div
          className={
            isTheMostRecent
              ? "header-checkbox app_color_font p__size font__p font__bold"
              : "header-checkbox app_color_font p__size font__p"
          }
        >
          <input
            onChange={() => changeTopicsType("isTheMostRecent")}
            value={isTheMostRecent}
            checked={isTheMostRecent}
            type="checkbox"
          />
          <p onClick={() => changeTopicsType("isTheMostRecent")}>
            The most recent
          </p>
        </div>

        <form className="search-topic-wrapper">
          <textarea
            type="submit"
            value={dataFromSearch}
            onChange={(e) => onChange(e)}
          />

          <div
            className="topic-search-button app_color_background font__p font__bold"
            onClick={() => searchForTopic()}
          >
            Search for topic
          </div>
        </form>
      </header>

      <div className="topics-wrapper">
        <TopicPostsWrapper
          isTheOldest={isTheOldest}
          isTheMostRecent={isTheMostRecent}
          posts={posts.posts}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  getPosts,
  getMostRecentPosts,
  searchTopics,
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
