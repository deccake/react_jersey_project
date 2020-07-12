import React, { useState, useEffect } from "react";
import ReactTimeAgo from "react-time-ago";
import chat from "../static/images/chat.jpg";

const ReplyListView = props => {
  const [limit, setLimit] = useState(3);
  const [showMore, setShowMore] = useState(true);

  const renderShowMore = () => {
    if (!showMore) return null;
    return (
      <div>
        <button class="button btn-primary"
          onClick={() => {
            setShowMore(false);
            setLimit(props.replyList.length);
          }}
        >
          View More
          </button>
      </div>
    );
  };
  let newReplyList = props.replyList.slice(0, limit);
  return (
    <div id="second" className="collapse show">
      <div className="inner-timeline-feed mb-2">
        <ul className="products-list product-list-in-card pl-2 pr-2 list-group list-group-flush">
          {newReplyList !== undefined && newReplyList.length > 0 ?
            newReplyList
            .sort((r1, r2) => r2.createdOn - r1.createdOn)
            .map((reply, index) => {
              return <SingelReply key={reply.replyId} {...props} reply={reply} />;
            }):""}
        </ul>
        {props.replyList.length > 3 ? renderShowMore() : "" }
      </div>
    </div>
  );
};

const SingelReply = props => {
  const { reply } = props;
  const [isLike, setIsLike] = useState(false);
  const [replyToreply, setReplyToreply] = useState(false);
  const toggleCommentLikesCount = () => {
    setIsLike(!isLike);
    if (isLike === false) {
      props.onHandleUpdatePost("replyLiked", { postObj: props.singlePost, commentObj: props.comment, replyObj: reply });
    }
    if (isLike === true) {
      props.onHandleUpdatePost("replyNotLiked", { postObj: props.singlePost, commentObj: props.comment, replyObj: reply });
    }
  };

  const replyOnReply = () => {
    setReplyToreply(!replyToreply);
  };

  const handleReplyButton = () => {
    props.onHandleUpdatePost("replyButton", { postObj: props.singlePost, commentObj: props.comment });
    setReplyToreply(false);
  };

  return (
    <li className="item mt-2 my-2">
      <div className="product-img">
        <img className="direct-chat-img" src={reply.replyerImage} alt="message user image" />
      </div>
      <div className="product-info">
        <span className="product-description">
          <strong>{reply.replyerName}</strong> {reply.replyText}
        </span>
        <span className="direct-chat-timestamp">
          <a className="product-title mr-3" onClick={toggleCommentLikesCount} style={{ cursor: "pointer" }}>
            Like
          </a>{" "}
          <a className="product-title mr-3" onClick={replyOnReply} style={{ cursor: "pointer" }}>
            Reply
          </a>{" "}
          <ReactTimeAgo date={reply.createdOn} /> <span className="ml-3">{reply.replyLikesCount} Likes</span>
        </span>
      </div>
      {replyToreply ? (
        <div className="card-body direct-chat-msg">
          <img className="direct-chat-img" src={chat} alt="message user image" />
          <div className="replyToreply">
            <input className="ml-3 mr-2" type="text" placeholder="Replying..." name="replyText" value={props.replyText} onChange={props.onPostHandleChange} />
            <button className="submit-p" onClick={handleReplyButton}>
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default ReplyListView;
