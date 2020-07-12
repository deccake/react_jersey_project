package com.renlight.community.wallpost;

import java.util.ArrayList;

import com.renlight.community.SuperModel;

public class Activity extends SuperModel{	
	
	public Activity() {
		super();
		this.activityList = new ArrayList<ActivityTypeModel>();	
	}

	public ArrayList<ActivityTypeModel> activityList;

	public ArrayList<ActivityTypeModel> getActivityList() {
		return activityList;
	}

	public void setActivityList(ArrayList<ActivityTypeModel> activityList) {
		this.activityList = activityList;
	}

	
}
