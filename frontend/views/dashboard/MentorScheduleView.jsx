import community from "../../static/dashboard_image/community.svg";
import pie from "../../static/dashboard_image/pie.svg";



const MentorScheduleView = () => {
  return (
    <React.Fragment>
      <div className="yourShedule">
        <div className="row sheduleTitle">
          <div className="col-7">
            <p>Your Shedule</p>
            <span>6 events today</span>
          </div>
          <div className="col-5 todayBtnRight">
            <button className="btn todayBtn">
              Today<i className="fa fa-angle-down"></i>
            </button>
          </div>
        </div>
        <div className="row community">
          <div className="col-12 communityContent">
            <ul>
              <li>
                <div className="row communityContentList">
                  <div className="col-2 CLImg">
                    <img src={community} />
                  </div>
                  <div className="col-6 CLContent">
                    <span>Create a post in Community</span>
                  </div>
                  <div className="col-3 CLTime">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <span>12:00</span>
                  </div>
                </div>
                <span className="bgLineList"></span>
              </li>
              <li>
                <div className="row communityContentList">
                  <div className="col-2 CLImg">
                    <img src={pie} />
                  </div>
                  <div className="col-6 CLContent">
                    <span>Create a post in Community</span>
                  </div>
                  <div className="col-3 CLTime">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <span>12:00</span>
                  </div>
                </div>
                <span className="bgLineList"></span>
              </li>
              <li>
                <div className="row communityContentList">
                  <div className="col-2 CLImg">
                    <img src={community} />
                  </div>
                  <div className="col-6 CLContent">
                    <span>Create a post in Community</span>
                  </div>
                  <div className="col-3 CLTime">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <span>12:00</span>
                  </div>
                </div>
                <span className="bgLineList"></span>
              </li>
              <li>
                <div className="row communityContentList">
                  <div className="col-2 CLImg">
                    <img src={pie} />
                  </div>
                  <div className="col-6 CLContent">
                    <span>Create a post in Community</span>
                  </div>
                  <div className="col-3 CLTime">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <span>12:00</span>
                  </div>
                </div>
                <span className="bgLineList"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MentorScheduleView;
