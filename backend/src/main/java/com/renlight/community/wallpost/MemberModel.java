package com.renlight.community.wallpost;

import java.util.Date;
import java.util.List;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;
import com.renlight.community.SuperModel;

@Entity (name="Member")
public class MemberModel extends SuperModel{
	@Index
	public String memberCode;
	public String memberName;
	@Index
	public String memberType;
	
	public String email;
	public String firstName;
	public String lastName;
	@Index
	public String memberId;
	public String profileImg;
	public String rank;// class
	public int age;
	public Date dateOfBirth;
	public String gender;
	public String address;
	public long phoneNumber;
	
	public String totalPostsCount;
	public String totalMediaCount;
	
	
	
	
	public String getTotalPostsCount() {
		return totalPostsCount;
	}
	public void setTotalPostsCount(String totalPostsCount) {
		this.totalPostsCount = totalPostsCount;
	}
	public String getTotalMediaCount() {
		return totalMediaCount;
	}
	public void setTotalMediaCount(String totalMediaCount) {
		this.totalMediaCount = totalMediaCount;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	public String getProfileImg() {
		return profileImg;
	}
	public void setProfileImg(String profileImg) {
		this.profileImg = profileImg;
	}
	public String getRank() {
		return rank;
	}
	public void setRank(String rank) {
		this.rank = rank;
	}		
	public String getMemberCode() {
		return memberCode;
	}
	public void setMemberCode(String memberCode) {
		this.memberCode = memberCode;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getMemberType() {
		return memberType;
	}
	public void setMemberType(String memberType) {
		this.memberType = memberType;
	}
}
