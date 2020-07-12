import React from "react";

//const post = this.props.post;

const PostView = props => {
  console.log("datetime views", props.post._dateTime);
  return (
    <div>
      <h1>View</h1>
      <b>DateTime : </b>
      <p>{props.post._dateTime}</p>
      <br />
      <b>Heading : </b>
      <p>{props.post._heading}</p>
      <br />

      <br />
    </div>
  );
};

export default PostView;
