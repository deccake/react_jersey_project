package com.renlight.community.wallpost;


import java.util.Date;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Ref;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Parent;

@Entity
public class Reply {

	@Id 
	private Long replyId;
	private String replyerName;
	private String replyerImage;
	private Long replyLikesCount;
	private String replyText;
//	private List<ReplyToReply> replyToReply;
	private Date createdOn;
	private Date updatedOn;
	
	@Parent
	private Ref<Comment> commentKey;

	public String getWebSafeKey() {
		return Key.create(Reply.class,replyId).getString();
	}
	public String getReplyText() {
		return replyText;
	}

	public void setReplyText(String replyText) {
		this.replyText = replyText;
	}

	public Long getReplyId() {
		return replyId;
	}

	public void setReplyId(Long replyId) {
		this.replyId = replyId;
	}

	public String getReplyerName() {
		return replyerName;
	}

	public void setReplyerName(String replyerName) {
		this.replyerName = replyerName;
	}

	public String getReplyerImage() {
		return replyerImage;
	}

	public void setReplyerImage(String replyerImage) {
		this.replyerImage = replyerImage;
	}

	public Long getReplyLikesCount() {
		return replyLikesCount;
	}

	public void setReplyLikesCount(Long replyLikesCount) {
		this.replyLikesCount = replyLikesCount;
	}

	public String getCommentKey() {
		return commentKey.getKey().getString();
	}

	public void setCommentKey(String commentKey) {
		Key<Comment> key = Key.create(commentKey);
		this.commentKey = Ref.create(key);
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
