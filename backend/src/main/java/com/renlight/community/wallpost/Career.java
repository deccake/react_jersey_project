package com.renlight.community.wallpost;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;
import com.renlight.community.SuperModel;

@Entity
public class Career extends SuperModel{
	@Index
	public String careerName;
	@Index
	public String careerCode;
	
	public String getCareerName() {
		return careerName;
	}
	public void setCareerName(String careerName) {
		this.careerName = careerName;
	}
	public String getCareerCode() {
		return careerCode;
	}
	public void setCareerCode(String careerCode) {
		this.careerCode = careerCode;
	}
}
