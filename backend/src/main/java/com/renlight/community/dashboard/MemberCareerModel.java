package com.renlight.community.dashboard;

import com.renlight.community.SuperModel;

public class MemberCareerModel extends SuperModel {
 public String careerName;
 public String memberId[];

 public String getCareerName() {
	return careerName;
}
public void setCareerName(String careerName) {
	this.careerName = careerName;
}
public String[] getMemberId() {
	return memberId;
}
public void setMemberId(String[] memberId) {
	this.memberId = memberId;
}
}
