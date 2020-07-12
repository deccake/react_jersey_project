package com.renlight.community.wallpost;

import java.util.ArrayList;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;
import com.renlight.community.SuperModel;
@Entity
public class MemberCareer extends SuperModel{
	@Index
	public String memberId;
	public ArrayList<String> subscribedCareer;
	
	public MemberCareer() {
		super();
	    this.memberId="";
	    this.subscribedCareer=new ArrayList<String>();
	}
	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	public ArrayList<String> getSubscribedCareer() {
		return subscribedCareer;
	}
	public void setSubscribedCareer(ArrayList<String> subscribedCareer) {
		this.subscribedCareer = subscribedCareer;
	}
	
	

}