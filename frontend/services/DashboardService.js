import ApiConstants from "../utils/ApiConstants";
import CentralServiceCallBack from "../utils/CentralServiceCallBack";
import CentralService from "../utils/CentralService";
import { Member } from "../viewModels/dashboard/Member";
import { ShortStudent } from "../viewModels/dashboard/Dashboard";
import { ShortPost } from "../viewModels/dashboard/Dashboard";
import { Dashboard } from "../viewModels/dashboard/Dashboard";
import { CareerCard } from "../viewModels/dashboard/Dashboard";

class DashboardService {
  getCareers = (containerCallBackObj) => {
    let apiUrl = ApiConstants.getCareerList;
    let serviceCallBackObj = new CentralServiceCallBack();
    serviceCallBackObj.onSuccess = this.mapCareer;
    serviceCallBackObj.onFailure = this.failure;
    serviceCallBackObj.data = containerCallBackObj.data;
    let data = containerCallBackObj.data;

    CentralService.doPost(apiUrl, data, serviceCallBackObj, containerCallBackObj);
  };

  mapCareer = (response, containerCallBackObj) => {
    let data = response.data;
    let dashboard = new Dashboard();

    if (data !== undefined && data.length > 0) {
      data.map((careerObj) => {
        let careerCard = new CareerCard();
        careerCard._subjectId = careerObj.subjectId;
        careerCard._subjectName = careerObj.subjectName;
        careerCard._subjectIcon = careerObj.subjectIcon;
        careerCard._studentCount = careerObj.studentCount;

        dashboard._careerCard.push(careerCard);
      });
    }

    containerCallBackObj.onSuccess(dashboard._careerCard);
  };

  getStudents = (containerCallBackObj) => {
    let apiUrl = ApiConstants.getStudent;
    let serviceCallBackObj = new CentralServiceCallBack();
    serviceCallBackObj.onSuccess = this.mapStudent;
    serviceCallBackObj.onFailure = this.failure;
    serviceCallBackObj.data = containerCallBackObj.data;

    CentralService.doPost(apiUrl, serviceCallBackObj.data, serviceCallBackObj, containerCallBackObj);
  };

  mapStudent = (response, containerCallBackObj) => {
    let data = response.data;
    let dashboard = new Dashboard();

    if (data !== undefined && data.length > 0) {
      data.map((studentObj) => {
        let std = new ShortStudent();

        std._id = studentObj.memberId;
        std._name = studentObj.firstName + " " + studentObj.lastName;
        std._class = studentObj.rank;
        std._profileImgUrl = studentObj.profileImg;
        std._userName = studentObj.memberName;
        // std._subscribedSubject = studentObj.subscribedSubject;
        std._subscribedSubject = "Maths";

        dashboard._studentList.push(std);
      });
    }

    containerCallBackObj.onSuccess(dashboard._studentList);
  };

  getUnsolvedQuestions = (containerCallBackObj) => {
    let Url = ApiConstants.getUnsolvedQuestions;
    let serviceCallBackObj = new CentralServiceCallBack();
    serviceCallBackObj.onSuccess = this.mapUnsolvedQuestions;
    serviceCallBackObj.onFailure = this.failure;
    serviceCallBackObj.data = containerCallBackObj.data;
    let data = containerCallBackObj.data;
    CentralService.doPost(Url, data, serviceCallBackObj, containerCallBackObj);
  };

  mapUnsolvedQuestions = (response, containerCallBackObj) => {
    let data = response.data;
    let dashboard = new Dashboard();

    if (data !== undefined && data.length > 0) {
      data.map((unsolvedQuestion) => {
        let uQuestion = new ShortPost();

        uQuestion.time = unsolvedQuestion.time;
        uQuestion.memberId = unsolvedQuestion.memberId;
        uQuestion.studentImage = unsolvedQuestion.studentImage;
        uQuestion.studentName = unsolvedQuestion.studentName;
        uQuestion.questionTitle = unsolvedQuestion.questionTitle;
        uQuestion.questionId = unsolvedQuestion.questionId;

        dashboard._unsolovedQuestions.push(uQuestion);
      });
    }
    containerCallBackObj.onSuccess(dashboard._unsolovedQuestions);
  };

  getMentorProfile = (containerCallBackObj) => {
    let Url = ApiConstants.getMentorProfile;
    let serviceCallBackObj = new CentralServiceCallBack();
    serviceCallBackObj.onSuccess = this.mapMentorProfile;
    serviceCallBackObj.onFailure = this.failure;
    serviceCallBackObj.data = containerCallBackObj.data;
    let data = containerCallBackObj.data;
    CentralService.doPost(Url, data, serviceCallBackObj, containerCallBackObj);
  };

  mapMentorProfile = (response, containerCallBackObj) => {
    let data = response.data;

    if (data !== undefined && data !== null) {
      let mentor = new Member();

      mentor._memberId = data.memberId;
      mentor._memberName = data.memberName;
      mentor._profileImg = data.profileImg;
      mentor._address = data.address;
      mentor._age = data.age;
      mentor._dateOfBirth = data.dateOfBirth;
      mentor._email = data.email;
      mentor._firstName = data.firstName;
      mentor._lastName = data.lastName;
      mentor._rank = data.rank;
      mentor._gender = data.gender;
      mentor._phoneNumber = data.phoneNumber;
      mentor._memberType = data.memberType;
      if (data.totalMediaCount !== null) {
        mentor._totalMediaCount = data.totalMediaCount;
      } else {
        mentor._totalMediaCount = 0;
      }
      if (data.totalPostsCount !== null) {
        mentor._totalPostsCount = data.totalPostsCount;
      } else {
        mentor._totalPostsCount = 0;
      }

      containerCallBackObj.onSuccess(mentor);
    }
  };

  failure = (error) => {
    console.log(error);
  };
}

export default DashboardService;
