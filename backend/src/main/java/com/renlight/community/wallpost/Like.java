package com.renlight.community.wallpost;


import com.googlecode.objectify.Key;
import com.googlecode.objectify.Ref;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Parent;

@Entity
public class Like {

	@Id
	private Long id;
	private String userId;
	private String userPic;
	
	@Parent
	private Ref<Post> postKey;
	
	private Boolean likeFlag;
	
	public String getWebSafeKey() {
		return Key.create(Like.class,id).getString();
	}
	
	public Boolean getLikeFlag() {
		return likeFlag;
	}
	public void setLikeFlag(Boolean likeFlag) {
		this.likeFlag = likeFlag;
	}
	public String getPostKey() {
		return postKey.getKey().getString();
	}
	public void setPostKey(String webSafeString) {
		Key<Post> key = Key.create(webSafeString);
		postKey = Ref.create(key);
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserPic() {
		return userPic;
	}
	public void setUserPic(String userPic) {
		this.userPic = userPic;
	}
	
	
}
