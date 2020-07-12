import React, { Component, useEffect } from "react";
import chat from "../static/images/chat.jpg";


const WriteReplyView = props => {
  let { replyText } = props.replyData;
  props.hideShowFlag ? useEffect(() => { props.setReplyFlag(false) }, [false]) : ""
  
  

  return (
    <React.Fragment>
      {props.replyFlag ? (
        <div className="card-body direct-chat-msg">
          {/* <!-- /.direct-chat-infos --> */}
          <img
            className="direct-chat-img"
            src={chat}
            alt="message user image"
          />
          <div className="commentReply">
            <input
              className="ml-3 mr-2"
              type="text"
              placeholder="Replying..."
              name="replyText"
              value={replyText}
              onChange={props.onPostHandleChange}
              onKeyPress={(e) => e.key === 'Enter' ? props.onHandleUpdatePost("replyButton", {postObj:props.singlePost,commentObj:props.comment}):""}
            />
            <button className="submit-p" onClick={(e) => props.onHandleUpdatePost("replyButton", {postObj:props.singlePost,commentObj:props.comment})}>
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default WriteReplyView;
