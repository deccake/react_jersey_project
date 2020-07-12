class ActivityBlog {
  _activity = [];
  get activity() {
    return this._activity;
  }
  set activity(value) {
    this._activity = value;
  }
}

class Activity {
  likedCount = 0;
  postTitle = "";
}
