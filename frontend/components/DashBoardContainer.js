import React, { Component } from "react";
import HeaderView from "../views/dashboard/HeaderView";
import NavigationMenuView from "../views/dashboard/NavigationMenuView";
import DashboardView from "../views/dashboard/DashboardView";
import MentorProfileView from "../views/dashboard/MentorProfileView";
import DashboardService from "../services/DashboardService";
import CentralServiceCallBack from "../utils/CentralServiceCallBack";

class DashBoardContainer extends Component {
  state = {
    dashboardPageData: {
      careerCard: [],
      unsolvedQuestions: [],
      students: [],
      member: {},
    },
  };
  componentDidMount = () => {
    this.getCareer();
    this.getStudents();
    this.getUnsolvedQuestions();
    this.getMentorProfile();
  };

  getStudents = () => {
    let containerCallBackObj = new CentralServiceCallBack();
    containerCallBackObj.onSuccess = this.updateStudentView;
    containerCallBackObj.onFailure = this.failure;
    containerCallBackObj.data = {
      memberId: 4,
    };
    new DashboardService().getStudents(containerCallBackObj);
  };

  updateStudentView = (res) => {
    let { dashboardPageData } = this.state;

    dashboardPageData.students = res;
    this.setState({ dashboardPageData });
  };

  getUnsolvedQuestions = () => {
    let containerCallBackObj = new CentralServiceCallBack();
    containerCallBackObj.onSuccess = this.updateUnsolvedQuestionView;
    containerCallBackObj.onFailure = this.failure;
    containerCallBackObj.data = {
      memberId: "6",
    };
    new DashboardService().getUnsolvedQuestions(containerCallBackObj);
  };

  updateUnsolvedQuestionView = (res) => {
    let { dashboardPageData } = this.state;

    dashboardPageData.unsolvedQuestions = res;
    this.setState({ dashboardPageData });
  };

  getMentorProfile = () => {
    let containerCallBackObj = new CentralServiceCallBack();
    containerCallBackObj.onSuccess = this.updateMentorProfileView;
    containerCallBackObj.onFailure = this.failure;
    containerCallBackObj.data = {
      memberId: "6",
      memberType: "mentor",
    };
    new DashboardService().getMentorProfile(containerCallBackObj);
  };

  updateMentorProfileView = (res) => {
    let { dashboardPageData } = this.state;

    dashboardPageData.member = res;
    this.setState({ dashboardPageData });
  };

  getCareer = () => {
    let containerCallBackObj = new CentralServiceCallBack();
    containerCallBackObj.onSuccess = this.updateCareerView;
    containerCallBackObj.onFailure = this.failure;
    containerCallBackObj.data = {
      memberId: "4",
    };
    new DashboardService().getCareers(containerCallBackObj);
  };

  updateCareerView = (res) => {
    let { dashboardPageData } = this.state;

    dashboardPageData.careerCard = res;
    this.setState({ dashboardPageData });
  };

  failure = (error) => {
    console.log(error);
  };

  render() {
    return (
      <React.Fragment>
        <HeaderView />
        <div className="d-flex" id="wrapper">
          <NavigationMenuView />
          <div id="page-content-wrapper">
            <div className="container-fluid dashboardContent">
              <div className="dasahboardCenterContent clearfix">
                <DashboardView
                  careerCard={this.state.dashboardPageData.careerCard}
                  unsolvedQuestions={this.state.dashboardPageData.unsolvedQuestions}
                  students={this.state.dashboardPageData.students}
                />
                <MentorProfileView member={this.state.dashboardPageData.member} />
              </div>
            </div>
          </div>
          {/* <!-- /#page-content-wrapper --> */}
        </div>
        {/* <!-- /#wrapper --> */}
      </React.Fragment>
    );
  }
}

export default DashBoardContainer;
