package com.renlight;

import com.googlecode.objectify.ObjectifyService;
import com.renlight.community.dashboard.CarrerCardModel;
import com.renlight.community.setup.MemberStudent;
import com.renlight.community.wallpost.Career;
import com.renlight.community.wallpost.Comment;
import com.renlight.community.wallpost.Like;
import com.renlight.community.wallpost.MemberCareer;
import com.renlight.community.wallpost.MemberModel;
import com.renlight.community.wallpost.Post;
import com.renlight.community.wallpost.Reply;
import com.renlight.community.wallpost.UserModel;

public class Registration {
	public void register() {
		ObjectifyService.register(Post.class);
		ObjectifyService.register(Career.class);
		ObjectifyService.register(UserModel.class);
		ObjectifyService.register(MemberModel.class);
		ObjectifyService.register(CarrerCardModel.class);
		ObjectifyService.register(MemberCareer.class);
		ObjectifyService.register(MemberStudent.class);
		ObjectifyService.register(Like.class);
		ObjectifyService.register(Comment.class);
		ObjectifyService.register(Reply.class);
	}

}
