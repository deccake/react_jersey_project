package com.renlight.community.setup;

import java.util.ArrayList;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;
import com.renlight.community.SuperModel;

@Entity (name = "MemberStudent")
public class MemberStudent extends SuperModel{
	@Index
	public String memberId;
	public ArrayList<String> student;
}
