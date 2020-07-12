package com.renlight.community.wallpost;

import java.util.ArrayList;

public class ActivityTypeModel {
public String type;
public ActivityTypeModel() {
	super();
	this.type = "";
	this.activityWithType = new ArrayList<ActivityModel>();
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public ArrayList<ActivityModel> getActivityWithType() {
	return activityWithType;
}
public void setActivityWithType(ArrayList<ActivityModel> activityWithType) {
	this.activityWithType = activityWithType;
}
public ArrayList<ActivityModel> activityWithType;
}
