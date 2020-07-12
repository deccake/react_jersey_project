import React, { useState } from "react";
import comment from "../static/images/comment.svg";
import CommentListView from "./CommentListView";
import WriteCommentView from "./WriteCommentView";
import moment from "moment";

const PostView = (props) => {
  const { posts } = props;
  
  return (
    <React.Fragment>
      {posts !== undefined && posts.length > 0
        ? posts
            .sort((p1, p2) => p2.dateTime - p1.dateTime)
            .map((postObj) => {
              return (
                <SinglePostView
                  key={postObj.id}
                  singlePost={postObj}
                  {...props}
                  onHandleUpdatePost={props.onHandleUpdatePost}
                  onPostHandleChange={props.onPostHandleChange}
                />
              );
            })
        : ""}
    </React.Fragment>
  );
};

const SinglePostView = (props) => {
  const { singlePost } = props;
  let classes = "fa fa-heart";
  if (!singlePost.likeFlag) classes += "-o";
  const [commentIconFlag, setCommentIconFlag] = useState(false);

  const likeArrayManupulation = (likeArr) => {
    if (likeArr !== null) {
      if (likeArr.length > 0 && likeArr.length <= 3) {
        return (likeArr.map((like, index) => {
          return <img key={index} className={`direct-chat-img im1${index}`} src={like.userPic} alt="message user image" />;
        }))
      }
        if (likeArr.length >= 4) {
          return <img  className={`direct-chat-img im14`} src="" alt="message user image" />;
        }
    }
  }
  
  return (
    <div className="card my-3">
      <div className="card-body">
        <ul className="products-list product-list-in-card pl-2 pr-2 mb-2">
          <li className="item">
            <div className="product-img">
              <img className="direct-chat-img" src={singlePost.postedByImg} alt="message user image" />
            </div>
            <div className="product-info">
              <span className="product-description">{singlePost.heading}</span>
              <span className="direct-chat-timestamp">
                {moment(singlePost.dateTime).format("MMMM Do YYYY hh:mm:ss a by ")}
                <a className="product-title">{singlePost.postedBy}</a>
              </span>
            </div>
          </li>
          <span className="product-description-reguler mt-5">{singlePost.content}</span>
          <div className="mt-2">
            <img src={singlePost.meadia} className="img-fluid" alt="Responsive image" width="200px" height="100px" />

            <div className="outer-like">
              <div className="product-img-like mt-2 float-left">
                {likeArrayManupulation(singlePost.like)}
              </div>
              <span className="float-right text-muted mt-2">{singlePost.comment !== null ? singlePost.comment.length + " comments" : ""} </span>
            </div>
          </div>
        </ul>
      </div>
      <div className="likeandcomment">
        <div className="like">
          <a>
            <i
              className={classes}
              name="likeButton"
              onClick={(e) => props.onHandleUpdatePost("likeButton", singlePost)}
              style={{ cursor: "pointer" }}
              aria-hidden="true"
            />{" "}
            &nbsp;
            <span>Like</span>
          </a>
        </div>
        <div className="comment">
          <a onClick={() => setCommentIconFlag(!commentIconFlag)}>
            <img src={comment} />
            <span>Comment</span>
          </a>
        </div>
      </div>
      <WriteCommentView
        singlePost={singlePost}
        onHandleUpdatePost={props.onHandleUpdatePost}
        onPostHandleChange={props.onPostHandleChange}
        {...props}
        setCommentIconFlag={setCommentIconFlag}
        commentIconFlag={commentIconFlag}
      />
      {props.singlePost.comment !== null ? (
        <CommentListView
          singlePost={singlePost}
          {...props}
          commentArray={props.singlePost.comment}
          onHandleUpdatePost={props.onHandleUpdatePost}
          onPostHandleChange={props.onPostHandleChange}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PostView;
