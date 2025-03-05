import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = () => {
    return orderedPosts.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <h5>{post.content.substring(0, 100)}</h5>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
        <ReactionButtons post={post} />
      </article>
    ));
  };
  return (
    <>
      <h1>Posts</h1>
      {renderedPosts()}
    </>
  );
};
export default PostList;
