import React, { Component } from "react";
import CreatePostView from "../views/CreatePostView";
import PostView from "./PostView";
import NoPosts from "./NoPosts";

const FeedsView = props => {
  let { posts } = props;
  
  return (
    <React.Fragment>
      <div className="col-lg-8">
        <CreatePostView
          {...props}
          onPostHandleChange={props.onPostHandleChange}
          onHandleCreatePost={props.onHandleCreatePost}
        />
        {posts.length === 0 ? <NoPosts /> :
          <PostView
            onHandleUpdatePost={props.onHandleUpdatePost}
            onPostHandleChange={props.onPostHandleChange}
            {...props}
          />
        }
      </div>
    </React.Fragment>
  );
};

export default FeedsView;
