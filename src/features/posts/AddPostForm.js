import React, { useState } from "react";
import { postAdded } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  console.log(users);

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }
    setTitle("");
    setContent("");
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const cansave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <div>
      <h2>Add a New Post</h2>
      <form action="AddPost">
        <p>
          <label htmlFor="postTitle">Post Title : </label>
          <input
            type="text"
            placeholder="Title"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="postAuthor">Author : </label>
          <select
            name="postAuthor"
            id="postAuthor"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            {usersOptions}
          </select>
        </p>
        <p>
          <label htmlFor="postContent">Post Content : </label>
          <input
            type="text"
            placeholder="Content"
            id="postContent"
            name="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </p>
        <button onClick={onSavePostClicked} type="submit" disabled={!cansave}>
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
