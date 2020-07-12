package com.renlight.community.wallpost;

import java.util.Date;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Ref;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;
import com.googlecode.objectify.annotation.Parent;

@Entity
public class Comment {
	
	@Id
	@Index
	private Long commentId;
	private String commenterName;
	private long commentLikesCount;
	private String commenterImage;
	private List<Reply> commentsReply;
	private String commentText;
	private Date createdOn;
	private Date updatedOn;
	
	@Parent
	private Ref<Post> postKey;
	
	

	public String getWebSafeKey() {
		return Key.create(Comment.class, commentId).getString();
	}
	
	public String getPostKey() {
		return postKey.getKey().getString();
	}
	public void setPostKey(String webSafeString) {
		Key<Post> key = Key.create(webSafeString);
		postKey = Ref.create(key);
	}
	
	public String getCommentText() {
		return commentText;
	}

	public void setCommentText(String commentText) {
		this.commentText = commentText;
	}
	
	public Long getCommentId() {
		return commentId;
	}
	public void setCommentId(Long commentId) {
		this.commentId = commentId;
	}
	public String getCommenterName() {
		return commenterName;
	}
	public void setCommenterName(String commenterName) {
		this.commenterName = commenterName;
	}
	public long getCommentLikesCount() {
		return commentLikesCount;
	}
	public void setCommentLikesCount(long commentLikesCount) {
		this.commentLikesCount = commentLikesCount;
	}
	public String getCommenterImage() {
		return commenterImage;
	}
	public void setCommenterImage(String commenterImage) {
		this.commenterImage = commenterImage;
	}
	public List<Reply> getCommentsReply() {
		return commentsReply;
	}
	public void setCommentsReply(List<Reply> commentsReply) {
		this.commentsReply = commentsReply;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	
}
