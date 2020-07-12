import React, { Component } from "react";
import trandingdaily from "../static/images/tranding-daily.jpg";
import Link from "next/link";

const TrendingDailyView = (props) => {
  return (
    <React.Fragment>
      <div className="">
        <img className="float-left" src={trandingdaily} alt="message user image" />
        <h4 className="widget-user-username mt-2">Tranding Daily</h4>
      </div>

      <hr />
      <div>
        {props.trendingDaily !== undefined &&
          props.trendingDaily.length > 0 &&
          props.trendingDaily.length > 0 &&
          props.trendingDaily.map((trendingdaily, index) => {
            return (
              <div className="row content-outer" key={index}>
                <div className="col-3">
                  <span className="amount-t"> {trendingdaily._likedCount}</span>
                </div>
                <div className="col-9">
                  <Link
                    href={{
                      pathname: "/posts",
                      query: {
                        postId: trendingdaily._postId,
                        type: "tranding",
                      },
                    }}
                  >
                    <a>
                      <span className="value-t">{trendingdaily._postTitle}</span>
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

export default TrendingDailyView;
