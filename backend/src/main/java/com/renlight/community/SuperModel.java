package com.renlight.community;

import java.util.Date;

import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

public class SuperModel {
	@Id
	private Long id;
	@Index
	private Date createdOn;
	@Index
	private Date updatedOn;
	@Index
	private String createdByUserCode;
	
	public SuperModel() {
		super();
		this.createdOn = new Date();
		this.updatedOn = new Date();
		this.createdByUserCode = "";
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

	public Long getId() {
		return id;
	}

	public Boolean isSaveAllowed() {	
		return true;
	}

	public String getSaveMessage() {
		return null;
	}
	
	public void setId(Long id) {	
		this.id=id;
	}
}
