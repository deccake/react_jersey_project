import React, { Component } from "react";
import helpdesk from "../static/images/help-desk.jpg";
import Link from "next/link";

const HelpDeskView = (props) => {
  return (
    <React.Fragment>
      <div className="">
        <img className="float-left" src={helpdesk} alt="Help Hot Desk" />
        <h4 className="widget-user-username">Help Hot Desk</h4>
      </div>
      <hr />

      <div>
        {props.helpDesk &&
          props.helpDesk.length > 0 &&
          props.helpDesk &&
          props.helpDesk.length > 0 &&
          props.helpDesk.map((helpdesk, index) => {
            return (
              <div className="row content-outer" key={index}>
                <div className="col-3">
                  <span className="amount-t"> {helpdesk._likedCount}</span>
                </div>
                <div className="col-9">
                  <Link
                    href={{
                      pathname: "/posts",
                      query: {
                        postId: helpdesk._postId,
                        type: "helpdesk",
                      },
                    }}
                  >
                    <a>
                      <span className="value-t">{helpdesk._postTitle}</span>
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

export default HelpDeskView;
