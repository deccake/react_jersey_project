export class PostSideBar {
  _memberId = "";
  get memberId() {
    return this._memberId;
  }
  set memberId(value) {
    this._memberId = value;
  }
  _sideBar = [];
  get sideBar() {
    return this._sideBar;
  }
  set sideBar(value) {
    this._sideBar = value;
  }
}

export class SideBarItems {
  _lebal = "";
  get lebal() {
    return this._lebal;
  }
  set lebal(value) {
    this._lebal = value;
  }
}

//export default { PostSideBar, SideBarItems };
