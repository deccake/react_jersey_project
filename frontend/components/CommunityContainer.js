import React, { Component } from "react";
import CommunityView from "../views/CommunityView";
import CentralServiceCallBack from "../utils/CentralServiceCallBack";
import CommunityService, { user1 } from "../services/CommunityService";
import { Post, LikedBy } from "../viewModels/posts/Posts";
import { Comment } from "../viewModels/posts/Comment";
import { Reply } from "../viewModels/posts/Reply";

class CommunityContainer extends Component {
  state = {
    posts: this.props.posts,
    postData: new Post(),
    commentData: {},
    replyData: {},
    hideShowFlag: false,
    postHeadingErrorMsg: "",
    imgFile: "",
  };


  handleOnSubmitComment = (eventName, post) => {
    
      let { commentText } = this.state.commentData;
      let postKey = post.webSafeKey;
      let containerCallbackObj = new CentralServiceCallBack();
      containerCallbackObj.onSuccess = this.updatePostView;
      containerCallbackObj.onFailure = this.failure;
      containerCallbackObj.postKey = postKey;
      containerCallbackObj.eventName = eventName;
      containerCallbackObj.commentText = commentText;
      new CommunityService().updatePost(containerCallbackObj);  
    
    
  };

  handleImageUpload = (event) => {
    let reader = new FileReader();
    const { postData } = this.state;
    let file = event.target.files[0];
    postData.mediaFile = file;
    this.setState({ imgFile: URL.createObjectURL(file), postData });
  };

  uploadImageToStorage = () => {
    let { mediaFile } = this.state.postData;
    

  }

  handleMentorItem = (item) => {};

  handlePostLike = (eventName, post) => {
    const { posts } = this.state;
    const singlePost = posts.find((postObj) => postObj.id == post.id);
    singlePost.likeFlag = !singlePost.likeFlag;
    let likeBy = new LikedBy();
    likeBy.userId = user1.userId;
    likeBy.userPic = user1.profileImg;
    likeBy.postKey = singlePost.webSafeKey;
    likeBy.likeFlag = singlePost.likeFlag;
    let containerCallbackObj = new CentralServiceCallBack();
    containerCallbackObj.onSuccess = this.updatePostView;
    containerCallbackObj.onFailure = this.failure;
    containerCallbackObj.data = likeBy;
    containerCallbackObj.eventName = eventName;
    new CommunityService().updatePost(containerCallbackObj);
  };

  updatePostView = (res) => {
    let { posts } = this.state;
    let index = posts.findIndex((post) => post.id === res.id);
    posts[index] = res;
    this.setState({ posts, commentData: { commentText: "" }, replyData: { replyText: "" }, hideShowFlag: true });
  };

  handleOnSubmitReply = (eventName, dataObj) => {
    const { replyText } = this.state.replyData;

    let containerCallbackObj = new CentralServiceCallBack();
    containerCallbackObj.onSuccess = this.updatePostView;
    containerCallbackObj.onFailure = this.failure;
    containerCallbackObj.data = dataObj;
    containerCallbackObj.eventName = eventName;
    containerCallbackObj.replyText = replyText;
    new CommunityService().updatePost(containerCallbackObj);
  };

  handlePostChange = (e) => {
    let { postData } = this.state;
    let comment = new Comment();
    let reply = new Reply();
    let eventName = e.target.name;
    let eventValue = e.target.value;
    switch (eventName) {
      case "postHeading":
        postData.heading = eventValue;
        break;
      case "postContent":
        postData.content = eventValue;
        break;
      case "mediaFile":
        this.handleImageUpload(e);
        break;
      case "commentText":
        comment.commentText = eventValue;
        break;
      case "replyText":
        reply.replyText = eventValue;
        break;
      default:
        break;
    }
    this.setState({ postData, commentData: comment, replyData: reply, postHeadingErrorMsg: "" });
  };

  handleCreatePost = () => {
    let { postData } = this.state;
    if (postData.heading) {
      let containerCallbackObj = new CentralServiceCallBack();
      containerCallbackObj.onSuccess = this.createPostView;
      containerCallbackObj.onFailure = this.failure;
      containerCallbackObj.data = postData;
      new CommunityService().createPost(containerCallbackObj);
    } else {
      this.setState({ postHeadingErrorMsg: "heading should not be empty" });
    }
  };

  handleUpdatePost = (eventName, post) => {
    switch (eventName) {
      case "likeButton":
        this.handlePostLike(eventName, post);
        break;
      case "commentButton":
        this.handleOnSubmitComment(eventName, post);
        break;
      case "replyButton":
        this.handleOnSubmitReply(eventName, post);
        break;
      case "commentLiked":
        this.handleCommentLike(eventName, post);
        break;
      case "commentNotLiked":
        this.handleCommentLike(eventName, post);
        break;
      case "replyLiked":
        this.handleReplyLike(eventName, post);
        break;
      case "replyNotLiked":
        this.handleReplyLike(eventName, post);
        break;
      case "imageUpload":
        this.uploadImageToStorage();
        break;
      default:
        break;
    }
  };

  handleCommentLike = (eventName, post) => {
    let containerCallbackObj = new CentralServiceCallBack();
    containerCallbackObj.onSuccess = this.updatePostView;
    containerCallbackObj.onFailure = this.failure;
    containerCallbackObj.data = post;
    containerCallbackObj.eventName = eventName;
    new CommunityService().updatePost(containerCallbackObj);
  };

  handleReplyLike = (eventName, post) => {
    let containerCallbackObj = new CentralServiceCallBack();
    containerCallbackObj.onSuccess = this.updatePostView;
    containerCallbackObj.onFailure = this.failure;
    containerCallbackObj.data = post;
    containerCallbackObj.eventName = eventName;
    new CommunityService().updatePost(containerCallbackObj);
  };

  createPostView = (response) => {
    let { posts } = this.state;
    let newPosts = [response, ...posts];
    this.setState({
      posts: newPosts,
      postData: { heading: "", content: "" },
    });
  };

  failure = (error) => {
    console.log(error);
  };

  render() {
   
    return (
      <React.Fragment>
        <CommunityView
          activities={this.props.activities}
          sideBar={this.props.sidebarData}
          {...this.state}
          handleMentorItem={this.handleMentorItem}
          onCreatePost={this.handleCreatePost}
          onPostHandleChange={this.handlePostChange}
          onHandleCreatePost={this.handleCreatePost}
          onHandleUpdatePost={this.handleUpdatePost}
        />
      </React.Fragment>
    );
  }
}

export default CommunityContainer;
