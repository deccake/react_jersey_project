import React, { Component, useState } from "react";
import FeaturedCommunityView from "./FeaturedCommunityView";
import TrendingDailyView from "./TrendingDailyView";
import HelpDeskView from "./HelpDeskView";

const ActivityView = (props) => {
  return (
    <React.Fragment>
      <div className="col-lg-4  ">
        <div className="card card-primary right-side-panel sticky-side">
          <div className="card-body">
            {props.activities && props.activities.featuredCommunity != undefined ? (
              <FeaturedCommunityView featuredCommunity={props.activities.featuredCommunity} />
            ) : null}

            {props.activities && props.activities.trendingDaily != undefined ? <TrendingDailyView trendingDaily={props.activities.trendingDaily} /> : null}

            {props.activities && props.activities.helpDesk != undefined ? <HelpDeskView helpDesk={props.activities.helpDesk} /> : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ActivityView;
