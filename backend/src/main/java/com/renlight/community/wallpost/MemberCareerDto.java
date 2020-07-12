package com.renlight.community.wallpost;

import java.util.ArrayList;

public class MemberCareerDto {
	
public String memberId;
public ArrayList<String> subscribedCareer;
public String getmemberId() {
	return memberId;
}
public void setmemberId(String memberId) {
	this.memberId = memberId;
}
public ArrayList<String> getSubscribedCareer() {
	return subscribedCareer;
}
public void setSubscribedCareer(ArrayList<String> subscribedCareer) {
	this.subscribedCareer = subscribedCareer;
}

}
