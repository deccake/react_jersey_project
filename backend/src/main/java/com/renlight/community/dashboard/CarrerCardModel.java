package com.renlight.community.dashboard;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;
import com.renlight.community.SuperModel;

@Entity
public class CarrerCardModel extends SuperModel {
	@Index
	public String subjectId;
	@Index
	public String subjectName;
	public String subjectIcon;
	public long studentCount;
	
	public String getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(String subjectId) {
		this.subjectId = subjectId;
	}
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	public String getSubjectIcon() {
		return subjectIcon;
	}
	public void setSubjectIcon(String subjectIcon) {
		this.subjectIcon = subjectIcon;
	}
	public long getStudentCount() {
		return studentCount;
	}
	public void setStudentCount(long studentCount) {
		this.studentCount = studentCount;
	}
}
