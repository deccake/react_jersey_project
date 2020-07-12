package com.renlight.community.setup;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.googlecode.objectify.ObjectifyService;
import com.renlight.community.crudes.SaveServiceImplementor;
import com.renlight.community.dashboard.CarrerCardModel;
import com.renlight.community.wallpost.Career;
import com.renlight.community.wallpost.MemberCareer;
import com.renlight.community.wallpost.MemberCareerDto;
import com.renlight.community.wallpost.MemberDto;
import com.renlight.community.wallpost.MemberModel;
import com.renlight.community.wallpost.UserModel;

@Path("/community/setup")
public class SetupService {
	@POST
	@Path("/createcareer")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Career createCareer(Career careerDto) {
		
		SaveServiceImplementor saveServiceImplementor = new SaveServiceImplementor();
		saveServiceImplementor.save(careerDto);
		
		return careerDto;
	}
	
	@POST
	@Path("/getcareer")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Career getCareer(Career careerDto) {
		
		Career aCareer= ObjectifyService.ofy().load().type(Career.class).filter("careerName",careerDto.getCareerName()).filter("careerCode",careerDto.getCareerCode()).first().now();		
		return aCareer;
	}
	
	@POST
	@Path("/createmember")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MemberModel createMember(MemberDto memberDto) {
		
		SaveServiceImplementor saveServiceImplementor = new SaveServiceImplementor();
		
		MemberModel member = new MemberModel();
		member.setFirstName(memberDto.firstName);
		member.setLastName(memberDto.lastName);
		member.setMemberId(memberDto.memberId);
		member.setMemberName(memberDto.memberName);
		member.setEmail(memberDto.email);
		member.setRank(memberDto.rank);
		member.setMemberType(memberDto.memberType);
		member.setProfileImg(memberDto.profileImg);
		member.setAge(memberDto.age);
		member.setAddress(memberDto.address);
		member.setDateOfBirth(memberDto.dateOfBirth);
		member.setGender(memberDto.gender);
		member.setPhoneNumber(memberDto.phoneNumber);
		
		saveServiceImplementor.save(member);
		
		return member;
	}
	
	@POST
	@Path("/getmember")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MemberModel getMember(MemberModel memberDto) {
		
		MemberModel aMember= ObjectifyService.ofy().load().type(MemberModel.class).filter("memberType",memberDto.getMemberType()).filter("memberId",memberDto.getMemberId()).first().now();		
		return aMember;
	}
	
	@POST
	@Path("/createuser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public UserModel createUser(UserModel userDto) {
		
		SaveServiceImplementor saveServiceImplementor = new SaveServiceImplementor();
		saveServiceImplementor.save(userDto);
		
		return userDto;
	}
	
	@POST
	@Path("/getuser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public UserModel getUser(UserModel userDto) {
		
		UserModel aUser = ObjectifyService.ofy().load().type(UserModel.class).filter("userName",userDto.getUserName()).filter("memberCode",userDto.getMemberCode()).filter("password",userDto.getPassword()).first().now();		
		return aUser;
	}
	
	@POST
	@Path("/createmembercareer")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public MemberCareer createMemberCareer(MemberCareerDto memberCareerDto) {
		MemberCareer memberCareer = new MemberCareer();
		memberCareer.memberId = memberCareerDto.memberId;
		memberCareer.subscribedCareer = memberCareerDto.subscribedCareer;
		SaveServiceImplementor saveServiceImplementor = new SaveServiceImplementor();
		saveServiceImplementor.save(memberCareer);
		return memberCareer;
	}
	
	@POST
	@Path("/creatememberstudent")
	@Consumes(MediaType.APPLICATION_JSON)
	public void createMemberStudent(MemberStudent memStud) {		
		SaveServiceImplementor saveServiceImplementor = new SaveServiceImplementor();
		 saveServiceImplementor.save(memStud);		
	}
}
