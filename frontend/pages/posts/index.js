import React, { Component } from "react";
import JavascriptTimeAgo from "javascript-time-ago";
import Head from "next/head";
// The desired locales.
import en from "javascript-time-ago/locale/en";
import ru from "javascript-time-ago/locale/ru";
import CommunityContainer from "../../components/CommunityContainer";
import CommunityService from "../../services/CommunityService";
import CentralServiceCallBack from "../../utils/CentralServiceCallBack";
// Initialize the desired locales.
JavascriptTimeAgo.locale(en);
JavascriptTimeAgo.locale(ru);

class Home extends Component {
  static getInitialProps = async ({ query }) => {
    let postPageData = { sidebarData: [], posts: [], activities: [] };
    const mentor = await Home.getMentor(query);
    postPageData.sidebarData = mentor;
    const activity = await Home.getActivity(query);
    postPageData.activities = activity;
    const posts = await Home.getAllPostsLists(query);
    postPageData.posts = posts;

    return { postPageData, query };
  };

  static getMentor = async (query) => {
    let containerCallBackObj = new CentralServiceCallBack();
    containerCallBackObj.data = {
      memberId: 1,
    };
    const mentorData = await new CommunityService().getMentor(containerCallBackObj);
    return mentorData;
  };

  static getAllPostsLists = async (query) => {
    let containerCallBackObj = new CentralServiceCallBack();
    if (Object.keys(query).length === 0) {
      containerCallBackObj.data = {
        type:"all"
      }  
    } else {
      containerCallBackObj.data = query; // optional
      }
    const postsList = await new CommunityService().getPost(containerCallBackObj);
    return postsList;
  };

  static getActivity = async (query) => {
    let containerCallBackObj = new CentralServiceCallBack();
    containerCallBackObj.data = {
      memberId: 1,
      // type: "feature",
    };
    const activityData = await new CommunityService().getActivity(containerCallBackObj);
    return activityData;
  };

  render() {
    
    return (
      <React.Fragment>
        <Head>
          <link rel="stylesheet" type="text/css" href="../../static/css/styles.css"></link>
          <link rel="stylesheet" type="text/css" href="../../static/css/community/index.css"></link>
          <link rel="stylesheet" type="text/css" href="../../static/css/community/sidebar.css"></link>
          <link rel="stylesheet" type="text/css" href="../../static/css/community/header.css"></link>
        </Head>
        <CommunityContainer activities={this.props.postPageData.activities} posts={this.props.postPageData.posts} sidebarData={this.props.postPageData.sidebarData} />
      </React.Fragment>
    );
  }
}

export default Home;
