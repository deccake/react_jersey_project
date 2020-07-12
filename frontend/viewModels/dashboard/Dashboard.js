export class Dashboard {
  _careerCard = [];
  get careerCard() {
    return this._careerCard;
  }
  set careerCard(value) {
    this._careerCard = value;
  }

  _unsolovedQuestions = [];
  get unsolovedQuestions() {
    return this._unsolovedQuestions;
  }
  set unsolovedQuestions(value) {
    this._unsolovedQuestions = value;
  }

  _studentList = [];
  get studentList() {
    return this._studentList;
  }
  set studentList(value) {
    this._studentList = value;
  }

  _mentor = {};
  get mentor() {
    return this._mentor;
  }
  set mentor(value) {
    this._mentor = value;
  }
}

export class CareerCard {
  _subjectId = "";
  get subjectId() {
    return this._subjectId;
  }
  set subjectId(value) {
    this._subjectId = value;
  }

  _subjectName = "";
  get subjectName() {
    return this._subjectName;
  }
  set subjectName(value) {
    this._subjectName = value;
  }

  _subjectIcon = "";
  get subjectIcon() {
    return this._subjectIcon;
  }
  set subjectIcon(value) {
    this._subjectIcon = value;
  }

  _studentCount = 0;
  get studentCount() {
    return this._studentCount;
  }
  set studentCount(value) {
    this._studentCount = value;
  }
}

export class ShortStudent {
  _name = "";
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  _id = 0;
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  _userName = "";
  get userName() {
    return this._userName;
  }
  set userName(value) {
    this._userName = value;
  }
  _class = "";
  get class() {
    return this._class;
  }
  set class(value) {
    this._class = value;
  }
  _profileImgUrl = "";
  get profileImgUrl() {
    return this._profileImgUrl;
  }
  set profileImgUrl(value) {
    this._profileImgUrl = value;
  }
  _subscribedSubject = "";
  get subscribedSubject() {
    return this._subscribedSubject;
  }
  set subscribedSubject(value) {
    this._subscribedSubject = value;
  }
}

export class Mentor {
  _mentorId = "";
  get mentorId() {
    return this._mentorId;
  }
  set mentorId(value) {
    this._mentorId = value;
  }
  _mentorName = "";
  get mentorName() {
    return this._mentorName;
  }
  set mentorName(value) {
    this._mentorName = value;
  }
  _totalPostCount = "";
  get totalPostCount() {
    return this._totalPostCount;
  }
  set totalPostCount(value) {
    this._totalPostCount = value;
  }
  _totalMediaCount = "";
  get totalMediaCount() {
    return this._totalMediaCount;
  }
  set totalMediaCount(value) {
    this._totalMediaCount = value;
  }
}

export class ShortPost {
  questionId = "";
  studentName = "";
  studentImage = "";
  questionTitle = "";
  time = null;
  memberId = "";
}
