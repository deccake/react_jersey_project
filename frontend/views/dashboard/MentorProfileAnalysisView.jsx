import React from "react";
import feed5 from "../../static/images/feed5.jpg";

const MentorProfileAnalysisView = (props) => {
  let { member } = props;
  
  return (
    <React.Fragment>
      <div>
        <div className="userDetails clearfix">
          <div className="usrLeft">
            <p>Hello,</p>
            <h3>{member._firstName}</h3>
          </div>
          <div className="usrRht">
            <img src={feed5} />
            <span className="userList">
              <i className="fa fa-ellipsis-v"></i>
            </span>
          </div>
        </div>

        <div className="analysisOverview">
          <p>Analysis Overview</p>
          <div className="row analysisOverviewContent">
            <div className="col-6 leftAO">
              <span>
                Total Post:
                <br />
                <strong className="line">|</strong>
                <strong className="number">{ member._totalPostsCount}</strong>
              </span>
            </div>
            <div className="col-6 rightAO">
              <span>
                Video:
                <br />
                <strong className="line">|</strong>
                <strong className="number">{ member._totalMediaCount }</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MentorProfileAnalysisView;
