class TrendingDaily {
  _activity = [];

  get activity() {
    return this._activity;
  }
  set activity(value) {
    this._activity = value;
  }

  _likedCount = 0;

  get likedCount() {
    return this._likedCount;
  }
  set likedCount(value) {
    this._likedCount = value;
  }
  _postTitle = "";

  get postTitle() {
    return this._postTitle;
  }
  set postTitle(value) {
    this._postTitle = value;
  }
}
export default TrendingDaily;
