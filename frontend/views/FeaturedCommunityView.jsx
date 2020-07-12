import React, { Component } from "react";
import community from "../static/images/community.jpg";
import Link from "next/link";

const FeaturedCommunityView = (props) => {
  return (
    <React.Fragment>
      <div className="">
        <img className="float-left" src={community} alt="message user image" />
        <h4 className="widget-user-username mt-2">Featured on the Community</h4>
      </div>
      <hr />

      <div>
        {props.featuredCommunity !== undefined &&
          props.featuredCommunity.length > 0 &&
          props.featuredCommunity.length > 0 &&
          props.featuredCommunity.map((featuredcommunity, index) => {
            return (
              <div className="row content-outer" key={index}>
                <div className="col-3">
                  <span className="amount-t"> {featuredcommunity._likedCount}</span>
                </div>
                <div className="col-9">
                  <Link
                    href={{
                      pathname: "/posts",
                      query: {
                        postId: featuredcommunity.postId,
                        type: "featured",
                      },
                    }}
                  >
                    <a>
                      <span className="value-t">{featuredcommunity._postTitle}</span>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default FeaturedCommunityView;
