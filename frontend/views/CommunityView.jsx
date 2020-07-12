import React from "react";
import FeedsView from "../views/FeedsView";
import SideBarView from "../views/SideBarView";
import ActivityView from "../views/ActivityView";
import HeaderView from "./HeaderView";

const CommunityView = props => {
  return (
    <div>
      <HeaderView/>
      <div className="d-flex rl-cv" id="wrapper">
        <SideBarView
          sideBar={props.sideBar}
          handleMentorItem={props.handleMentorItem}
        />

        {/* <!-- Page Content --> */}
        <div id="page-content-wrapper">
          <div className="container-fluid mt-4">
            <div className="row">
              <FeedsView
                {...props}
                onPostHandleChange={props.onPostHandleChange}
                onHandleCreatePost={props.onHandleCreatePost}
                onHandleUpdatePost={props.onHandleUpdatePost}
              />

              <ActivityView activities={props.activities} />
            </div>
            {/* <!-- /.row --> */}
          </div>
        </div>
        {/* <!-- /#page-content-wrapper --> */}
      </div>
    </div>
  );
};

export default CommunityView;
