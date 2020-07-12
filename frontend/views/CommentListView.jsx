import React, { Component, useState, useEffect } from "react";
import feed5 from "../static/images/feed5.jpg";
import ReactTimeAgo from "react-time-ago";
import ReplyListView from "./ReplyListView";
import WriteReplyView from "./WriteReplyView";

const CommentListView = props => {

  const [limit, setLimit] = useState(3);
  const [showMore, setShowMore] = useState(true);

  const renderShowMore = () => {
    if (!showMore) return null;
    return (
      <div>
        <button className="button btn-primary ml-3 my-2"
          onClick={() => {
            setShowMore(false);
            setLimit(props.commentArray.length);
          }}
        >
          View More
          </button>
      </div>
    );
  };
  let newCommentList = props.commentArray.slice(0, limit);

  return (
    <div className="timeline-feed">
      {newCommentList !== undefined && newCommentList.length > 0 ?
        newCommentList.sort((c1, c2) => c2.createdOn - c1.createdOn)
        .map((comment, index) => {
        return (
          <SingleComment
            {...props}
            onHandleUpdatePost={props.onHandleUpdatePost}
            onPostHandleChange={props.onPostHandleChange}
            singlePost={props.singlePost}
            key={comment.commentId}
            comment={comment}
          />
        );
      }):""}
      {props.commentArray.length > 3 ? renderShowMore() : "" }
    </div>
  );
};

export default CommentListView;

const SingleComment = props => {
  const { comment } = props;
  const [replyFlag, setReplyFlag] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const toggleCommentLikesCount = () => {
    setIsLike(!isLike);
    if (isLike === false) {
      props.onHandleUpdatePost("commentLiked", {postObj:props.singlePost,commentObj:comment})
    }
    if (isLike === true) {
      props.onHandleUpdatePost("commentNotLiked", {postObj:props.singlePost,commentObj:comment})
    }
  };

  return (
    <div className="container mb-3">
      <a type="button" className="collapsed feed-collapes mr-3" data-toggle="collapse" data-target="#demo" aria-expanded="false">
        {" "}
        <div className="product-img">
          <img className="direct-chat-img" src={feed5} alt="message user image" />
        </div>
      </a>
      <div className="product-info">
        <span className="product-description">
          <strong>{comment.commenterName}</strong> {comment.commentText}
        </span>
        <br />
        <span className="direct-chat-timestamp parent-col">
          <a onClick={toggleCommentLikesCount} style={{ cursor: "pointer" }} className="product-title mr-3">
            Like
          </a>{" "}
          <a onClick={() => setReplyFlag(!replyFlag)} style={{ cursor: "pointer" }} className="product-title mr-3">
            Reply
          </a>{" "}
          <ReactTimeAgo date={comment.createdOn} /> <span className="ml-3"> {comment.commentLikesCount} Likes</span>
        </span>
      </div>
      <WriteReplyView {...props} setReplyFlag={setReplyFlag} comment={comment} onHandleUpdatePost={props.onHandleUpdatePost} onPostHandleChange={props.onPostHandleChange} replyFlag={replyFlag} />
      {comment.commentsReply !== null ?
        <ReplyListView {...props} comment={comment} onHandleUpdatePost={props.onHandleUpdatePost} onPostHandleChange={props.onPostHandleChange} replyList={comment.commentsReply} />
        : ""}
    </div>
  );
};
