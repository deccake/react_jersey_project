package com.renlight.community.wallpost;

public class ActivityModel {
	public String id;
	public String likedCount;
	public String postTitle;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getLikedCount() {
		return likedCount;
	}
	public void setLikedCount(String likedCount) {
		this.likedCount = likedCount;
	}
	public String getPostTitle() {
		return postTitle;
	}
	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}
}
