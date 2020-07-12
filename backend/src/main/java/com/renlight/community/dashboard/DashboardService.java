package com.renlight.community.dashboard;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.googlecode.objectify.ObjectifyService;
import com.renlight.community.crudes.SaveServiceImplementor;
import com.renlight.community.setup.MemberStudent;
import com.renlight.community.wallpost.MemberCareer;
import com.renlight.community.wallpost.MemberDto;
import com.renlight.community.wallpost.MemberModel;

@Path("/community/dashboard")
public class DashboardService {

	@POST
	@Path("/getcareers")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<CarrerCardModel> getCarrers(CarrerDto careerDto) {

		MemberCareer aMemberCarrer = ObjectifyService.ofy().load().type(MemberCareer.class)
				.filter("memberId", careerDto.getMemberId()).first().now();
		ArrayList<String> careerArray = aMemberCarrer.subscribedCareer;

//		ArrayList<String> aCarerList = new ArrayList<String>();
		ArrayList<CarrerCardModel> aCarerList = new ArrayList<CarrerCardModel>();
		MemberDto memberDto = new MemberDto();
		DashboardService dashboardService = new DashboardService();
		memberDto.setMemberId(careerDto.getMemberId());
		List<MemberModel> studentList = dashboardService.getMentorStudent(memberDto);
		
		for (String careerId : careerArray) {
//			Career careerObj = ObjectifyService.ofy().load().type(Career.class).filter("careerCode", career).first()
//					.now();
			CarrerCardModel careerObj = ObjectifyService.ofy().load().type(CarrerCardModel.class).filter("subjectId", careerId).first().now();
					
//			aCarerList.add(careerObj.getSubjectName());
			// add career code also in acareer list

			if (studentList.size() > 0) {
				for (MemberModel student : studentList) {
					MemberCareer studentCareer = ObjectifyService.ofy().load().type(MemberCareer.class)
							.filter("memberId", student.getMemberId()).first().now();
					ArrayList<String> careerOfStudents = studentCareer.subscribedCareer;
					if (careerOfStudents.size() > 0) {
						for (String subId : careerOfStudents) {
							if (subId.equals(careerObj.getSubjectId())) {
								careerObj.setStudentCount(careerObj.getStudentCount() + 1);
							}
						}
					}
				}
			}
			aCarerList.add(careerObj);

		}
//		CarrerCardModel careerCard = new CarrerCardModel();

		// CarrerCardModel careerCard=
		// ObjectifyService.ofy().load().type(CarrerCardModel.class).filter("subjectId",careerDto.getSubjectId()).filter("subjectName",careerDto.getSubjectName()).first().now();
		return aCarerList;
	}

	@POST
	@Path("/createcareers")
	@Consumes(MediaType.APPLICATION_JSON)
	public void createCareerCard(CarrerCardModel career) {
		SaveServiceImplementor saveServiceImplementor = new SaveServiceImplementor();
		saveServiceImplementor.save(career);
	}

	@POST
	@Path("/getmentorstudent")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ArrayList<MemberModel> getMentorStudent(MemberDto memberDto) {
		MemberStudent memberStudent = ObjectifyService.ofy().load().type(MemberStudent.class)
				.filter("memberId", memberDto.getMemberId()).first().now();
		ArrayList<String> studentList = memberStudent.student;

		ArrayList<MemberModel> studentListData = new ArrayList<MemberModel>();
		if (studentList != null && studentList.size() > 0) {
			for (String studId : studentList) {
				MemberModel student = ObjectifyService.ofy().load().type(MemberModel.class).filter("memberId", studId)
						.first().now();
				studentListData.add(student);
			}
		}
		return studentListData;
	}

	@POST
	@Path("/getunsolvedquestions")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<UnsolvedQuestionModal> getUnsolvedQuestioins(UnsolvedQuestionDto unsolvedQuestionDto) {

		
		UnsolvedQuestionModal unsolvedQuestionModal = new UnsolvedQuestionModal();
		unsolvedQuestionModal.setQuestionId("1");
		unsolvedQuestionModal.setQuestionTitle("What is features of React?");
		unsolvedQuestionModal.setStudentName("rahul@ren.com");
		unsolvedQuestionModal.setStudentImage("https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg");
		unsolvedQuestionModal.setMemberId("6");
		unsolvedQuestionModal.setTime(new Date());

		UnsolvedQuestionModal unsolvedQuestionModal2 = new UnsolvedQuestionModal();
		unsolvedQuestionModal2.setQuestionId("2");
		unsolvedQuestionModal2.setQuestionTitle("What is  javascript hoisting?");
		unsolvedQuestionModal2.setStudentName("mohan@ren.com");
		unsolvedQuestionModal2.setStudentImage("https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg");
		unsolvedQuestionModal2.setMemberId("6");
		unsolvedQuestionModal2.setTime(new Date());

		UnsolvedQuestionModal unsolvedQuestionModal3 = new UnsolvedQuestionModal();
		unsolvedQuestionModal3.setQuestionId("3");
		unsolvedQuestionModal3.setQuestionTitle("What is server-side rendering?");
		unsolvedQuestionModal3.setStudentName("manoj@ren.com");
		unsolvedQuestionModal3.setStudentImage("https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg");
		unsolvedQuestionModal3.setMemberId("6");
		unsolvedQuestionModal3.setTime(new Date());

		List<UnsolvedQuestionModal> questionList = new ArrayList<UnsolvedQuestionModal>();
		questionList.add(unsolvedQuestionModal);
		questionList.add(unsolvedQuestionModal2);
		questionList.add(unsolvedQuestionModal3);

		return questionList;

	}

}
