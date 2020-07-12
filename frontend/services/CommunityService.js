import ApiConstants from "../utils/ApiConstants";
import SSRCentralService from "../utils/SSRCentralService";
import CentralServiceCallBack from "../utils/CentralServiceCallBack";
import { Post } from "../viewModels/posts/Posts";
import { Reply } from "../viewModels/posts/Reply";
import { Comment } from "../viewModels/posts/Comment";
import CentralService from "../utils/CentralService";
import FeaturedCommunity from "../viewModels/activity/FeaturedCommunity";
import TrendingDaily from "../viewModels/activity/TrendingDaily";
import HelpDesk from "../viewModels/activity/HelpDesk";

import { PostSideBar } from "../viewModels/posts/PostSideBar";

export const user1 = {
  userId: 123,
  profileImg: "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
  name: "amol",
};

class CommunityService {
  getPost = (containerCallBackObj) => {
    let apiUrl = ApiConstants.posts;
    let serviceCallBackObj = new CentralServiceCallBack();
    serviceCallBackObj.onSuccess = this.mapPost;
    serviceCallBackObj.onFailure = this.failure;
    serviceCallBackObj.data = containerCallBackObj.data; // optional
    let response = SSRCentralService.doPost(apiUrl, serviceCallBackObj.data, serviceCallBackObj, containerCallBackObj);

    return response;
  };

  createPost = (containerCallBackObj) => {
    let apiUrl = ApiConstants.createPost;
    let serviceCallBackObj = new CentralServiceCallBack();
    serviceCallBackObj.onSuccess = this.mapCreatePost;
    serviceCallBackObj.onFailure = this.failure;
    let postData = containerCallBackObj.data;

    let post = {
      heading: postData.heading,
      content: postData.content,
      postedByImg: "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
      postedBy: "@amol@123",
      postType: "Chemistry",
      
    };
    CentralService.doPost(apiUrl, post, serviceCallBackObj, containerCallBackObj);
  };

  updatePost = (containerCallBackObj) => {
    let eventName = containerCallBackObj.eventName;
    let serviceCallBackObj = new CentralServiceCallBack();
    serviceCallBackObj.onSuccess = this.mapUpdatePost;
    serviceCallBackObj.onFailure = this.failure;

    if (eventName === "likeButton") {
      let apiUrl = ApiConstants.updatePostLike;
      let likeObj = containerCallBackObj.data;
      CentralService.doPut(`${apiUrl}${likeObj.postKey}`, likeObj, serviceCallBackObj, containerCallBackObj);
    }

    if (eventName === "commentButton") {
      let commentObj = new Comment();
      let apiUrl = ApiConstants.updatePostComment;
      commentObj.commentText = containerCallBackObj.commentText;
      commentObj.commenterName = "JackY";
      commentObj.commentLikesCount = 10;
      commentObj.postKey = containerCallBackObj.postKey;
      commentObj.commenterImage = "https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg";
      CentralService.doPut(`${apiUrl}${commentObj.postKey}`, commentObj, serviceCallBackObj, containerCallBackObj);
    }

    if (eventName === "replyButton") {
      let comment = containerCallBackObj.data.commentObj;
      let post = containerCallBackObj.data.postObj;
      let apiUrl = ApiConstants.createCommentReply;
      let replyObj = new Reply();
      replyObj.replyText = containerCallBackObj.replyText;
      replyObj.replyLikesCount = 45;
      replyObj.replyerImage = "https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg";
      replyObj.replyerName = "raj";
      CentralService.doPut(`${apiUrl}${comment.postKey}/${comment.webSafeKey}/reply`, replyObj, serviceCallBackObj, containerCallBackObj);
    }
    if (eventName === "commentLiked" || eventName === "commentNotLiked") {
      let apiUrl = ApiConstants.updateComment;
      let comment = containerCallBackObj.data.commentObj;
      let post = containerCallBackObj.data.postObj;
      let commentObj = new Comment();
      if (eventName === "commentLiked") {
        commentObj.commentLikesCount = comment.commentLikesCount + 1;
      } else {
        commentObj.commentLikesCount = comment.commentLikesCount - 1;
      }
      CentralService.doPut(`${apiUrl}${post.webSafeKey}/updateComment/${comment.webSafeKey}`, commentObj, serviceCallBackObj, containerCallBackObj);
    }
    if (eventName === "replyLiked" || eventName === "replyNotLiked") {
      let apiUrl = ApiConstants.updateComment;
      let comment = containerCallBackObj.data.commentObj;
      let post = containerCallBackObj.data.postObj;
      let reply = containerCallBackObj.data.replyObj;
      let replyObj = new Reply();
      if (eventName === "replyLiked") {
        replyObj.replyLikesCount = reply.replyLikesCount + 1;
      } else {
        replyObj.replyLikesCount = reply.replyLikesCount - 1;
      }
      CentralService.doPut(
        `${apiUrl}${post.webSafeKey}/${comment.webSafeKey}/updateCommentReply/${reply.webSafeKey}`,
        replyObj,
        serviceCallBackObj,
        containerCallBackObj
      );
    }
  };

  mapUpdatePost = (response, containerCallBackObj) => {
    let data = response.data;
    containerCallBackObj.onSuccess(data);
  };

  mapCreatePost = (response, containerCallBackObj) => {
    let data = response.data;
    if (data !== undefined) {
      containerCallBackObj.onSuccess(data);
    } else {
      containerCallBackObj.failure();
    }
  };

  getActivity = (containerCallBackObj) => {
    let apiUrl = ApiConstants.getShortActivity;
    let serviceCallBackObj = new CentralServiceCallBack();
    serviceCallBackObj.onSuccess = this.mapActivity;
    serviceCallBackObj.onFailure = this.failure;
    serviceCallBackObj.data = containerCallBackObj.data;

    let response = SSRCentralService.doPost(apiUrl, containerCallBackObj.data, serviceCallBackObj, containerCallBackObj);
    return response;
  };

  mapActivity = (response) => {
    let data = response.data;
    let activityList = data.activityList;
    let activityArray = {
      featuredCommunity: [],
      trendingDaily: [],
      helpDesk: [],
    };

    if (activityList != undefined && activityList.length > 0) {
      activityList.map((activityWithTypeObj) => {
        if (activityWithTypeObj.type === "featured" && activityWithTypeObj.activityWithType.length > 0) {
          activityWithTypeObj.activityWithType &&
            activityWithTypeObj.activityWithType.map((aActivity) => {
              let featuredCommunity = new FeaturedCommunity();
              featuredCommunity._postId = aActivity.id;
              featuredCommunity._likedCount = aActivity.likedCount;
              featuredCommunity._postTitle = aActivity.postTitle;
              activityArray.featuredCommunity.push(featuredCommunity);
            });
        }

        if (activityWithTypeObj.type === "tranding" && activityWithTypeObj.activityWithType.length > 0) {
          activityWithTypeObj.activityWithType &&
            activityWithTypeObj.activityWithType.map((aActivity) => {
              let activityObj = new FeaturedCommunity();
              activityObj._postId = aActivity.id;
              activityObj._likedCount = aActivity.likedCount;
              activityObj._postTitle = aActivity.postTitle;
              activityArray.trendingDaily.push(activityObj);
            });
        }

        if (activityWithTypeObj.type === "helpDesk" && activityWithTypeObj.activityWithType.length > 0) {
          activityWithTypeObj.activityWithType &&
            activityWithTypeObj.activityWithType.map((aActivity) => {
              let activityObj = new FeaturedCommunity();
              activityObj._postId = aActivity.id;
              activityObj._likedCount = aActivity.likedCount;
              activityObj._postTitle = aActivity.postTitle;
              activityArray.helpDesk.push(activityObj);
            });
        }
      });
    }

    return activityArray;
  };

  mapPost = (response) => {
    let data = response.data;
    let postArray = [];
    if (data !== undefined && data.length > 0) {
      data.map((postObj) => {
        let post = new Post();
        post.id = postObj.id;
        post.dateTime = postObj.createdOn;
        post.content = postObj.content;
        post.heading = postObj.heading;
        post.postedBy = postObj.postedBy;
        post.webSafeKey = postObj.webSafeKey;
        post.postedByImg = postObj.postedByImg;
        post.like = postObj.like;
        post.comment = postObj.comment;

        postArray.push(post);
      });
    }
    return postArray;
  };

  getMentor = (containerCallBackObj) => {
    let apiUrl = ApiConstants.getShortSubject;
    let serviceCallBackObj = new CentralServiceCallBack();
    serviceCallBackObj.onSuccess = this.mapMentor;
    serviceCallBackObj.onFailure = this.failure;
    serviceCallBackObj.data = containerCallBackObj.data;

    let response = SSRCentralService.doPost(apiUrl, containerCallBackObj.data, serviceCallBackObj, containerCallBackObj);

    return response;
  };

  mapMentor = (response) => {
    let data = response.data;

    let postSideBar = new PostSideBar();
    postSideBar.memberId = data.memberId;
    if (data !== undefined && data.subscribedSubjectList && data.subscribedSubjectList.length > 0) {
      data.subscribedSubjectList.map((sub) => {
        postSideBar.sideBar.push(sub);
      });
    }
    return postSideBar;
  };

  failure = (error) => {
    console.log(error);
  };
}

export default CommunityService;
