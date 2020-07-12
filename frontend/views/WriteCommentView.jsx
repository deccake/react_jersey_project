import React, { Component, useEffect } from "react";
import chat from "../static/images/chat.jpg";

const WriteCommentView = props => {
  let { commentText } = props.commentData 
  props.hideShowFlag ? useEffect(() => { props.setCommentIconFlag(false) }, [false]) : ""
  

  return (
    <React.Fragment>
      {props.commentIconFlag ? (
        <div className="card-body direct-chat-msg">
          {/* <!-- /.direct-chat-infos --> */}
          <img
            className="direct-chat-img"
            src={chat}
            alt="message user image"
          />
         
          <div className="comment">
            <input
              className=" ml-3 mr-2"
              type="text"
              placeholder="Write Somthing.."
              name="commentText"
              value={commentText}
              onChange={props.onPostHandleChange}
              onKeyPress={(e) => e.key === 'Enter'? props.onHandleUpdatePost("commentButton", props.singlePost):""}
            />
            <button className="submit-p"  onClick={(e) => props.onHandleUpdatePost("commentButton", props.singlePost)}>
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </button>
            </div>
         
        </div>
      ) : (
        ""
      )}
      <hr />
    </React.Fragment>
  );
};

export default WriteCommentView;
