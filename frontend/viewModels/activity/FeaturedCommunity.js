class FeaturedCommunity {
  _postId = "";
  get postId() {
    return this._postId;
  }
  set postId(value) {
    this._postId = value;
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
export default FeaturedCommunity;
