package com.renlight.community.wallpost;

import java.util.ArrayList;

public class ShortSubjectModel {
	public String memberId;
	public String getMemberId() {
		return memberId;
	}
	public ShortSubjectModel() {
		super();
		this.memberId = "";
		this.subscribedSubjectList = new ArrayList<String>();
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	public ArrayList<String> getSubscribedSubjectList() {
		return subscribedSubjectList;
	}
	public void setSubscribedSubjectList(ArrayList<String> subscribedSubjectList) {
		this.subscribedSubjectList = subscribedSubjectList;
	}
	public ArrayList<String> subscribedSubjectList;
}
