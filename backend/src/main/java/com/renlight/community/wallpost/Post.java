package com.renlight.community.wallpost;

import java.util.Date;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;
import com.googlecode.objectify.annotation.Load;
import com.googlecode.objectify.annotation.Serialize;
import com.renlight.community.SuperModel;
@Entity(name = "Post")
public class Post extends SuperModel {
	@Index
	public long postId;
	@Index
	public String postType;	
	public Date dateTime ;
	public String postedBy ;
	public String postedByImg ;
	public String heading ;
	public String content ;
	public Boolean likeFlag;
	public String media;
	@Serialize
	public Media[] mediaList;
	@Serialize
	public Post[] commentList;
	
	private List<Comment> comment;
	public List<Like> like;

	
	public String getWebSafeKey(){
        return Key.create(Post.class, this.getId()).getString();
}

	
	public Post() {
		super();
	}
	
	
	public long getPostId() {
		return postId;
	}
	public void setPostId(long postId) {
		this.postId = postId;
	}
	public String getPostType() {
		return postType;
	}
	public void setPostType(String postType) {
		this.postType = postType;
	}
	public Date getDateTime() {
		return dateTime;
	}
	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}
	public String getPostedBy() {
		return postedBy;
	}
	public void setPostedBy(String postedBy) {
		this.postedBy = postedBy;
	}
	public String getPostedByImg() {
		return postedByImg;
	}
	public void setPostedByImg(String postedByImg) {
		this.postedByImg = postedByImg;
	}
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public String getMedia() {
		return media;
	}
	public void setMedia(String media) {
		this.media = media;
	}
	public List<Comment> getComment() {
		return comment;
	}
	public void setComment(List<Comment> comment) {
		this.comment = comment;
	}


	public Boolean getLikeFlag() {
		return likeFlag;
	}


	public void setLikeFlag(Boolean likeFlag) {
		this.likeFlag = likeFlag;
	}


	public List<Like> getLike() {
		return like;
	}


	public void setLike(List<Like> like) {
		this.like = like;
	}
	
}
