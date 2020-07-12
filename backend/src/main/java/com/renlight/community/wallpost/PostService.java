package com.renlight.community.wallpost;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.googlecode.objectify.Key;

@Path("/community/post")
public class PostService {
	@POST
	@Path("/getpost")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Post> getPost(PostDto postDto) {
		List<Post> posts;
		String type = postDto.getType();
		if (postDto.getType().equals("all")) {
			posts = ofy().load().type(Post.class).list();
		} else {
			posts = ofy().load().type(Post.class).filter("postType", type).list();
		}
		Iterator itr = posts.iterator();
		while (itr.hasNext()) {
			Post postObj = (Post) itr.next();
			// get list of post like
			List<Like> likes = ofy().load().type(Like.class).ancestor(Key.create(postObj.getWebSafeKey())).list();
			List<Comment> commentList = ofy().load().type(Comment.class).ancestor(Key.create(postObj.getWebSafeKey()))
					.list();
			Iterator<Comment> itrComnt = commentList.iterator();
			while (itrComnt.hasNext()) {
				Comment comment = itrComnt.next();
				List<Reply> replyList = ofy().load().type(Reply.class).ancestor(Key.create(comment.getWebSafeKey()))
						.list();
				comment.setCommentsReply(replyList);

			}
			postObj.setLike(likes);
			postObj.setComment(commentList);

		}

		return posts;
	}

	@POST
	@Path("/getshortactivity")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Activity getShortActivity(ActivityDto activityDto) {

		Activity activityObj = new Activity();
		ActivityTypeModel featured = new ActivityTypeModel();
		featured.setType("featured");
		ActivityModel actObj = new ActivityModel();
		actObj.setId("1");
		actObj.setLikedCount("10");
		actObj.setPostTitle("Here is post title with featured algo.");
		ActivityModel actObj1 = new ActivityModel();
		actObj1.setId("2");
		actObj1.setLikedCount("156");
		actObj1.setPostTitle("Here is post title with featured algo.");
		featured.activityWithType.add(actObj1);
		featured.activityWithType.add(actObj);
		activityObj.activityList.add(featured);

		ActivityTypeModel tranding = new ActivityTypeModel();
		tranding.setType("tranding");
		ActivityModel trandObj = new ActivityModel();
		trandObj.setId("2");
		trandObj.setLikedCount("110");
		trandObj.setPostTitle("Here is post title with tranding daily algo.");
		tranding.activityWithType.add(trandObj);
		activityObj.activityList.add(tranding);

		ActivityTypeModel hotDesk = new ActivityTypeModel();
		hotDesk.setType("helpDesk");
		ActivityModel hotObj = new ActivityModel();
		hotObj.setId("2");
		hotObj.setLikedCount("11k");
		hotObj.setPostTitle("Here is post title with hot desk algo.");
		hotDesk.activityWithType.add(hotObj);
		hotDesk.activityWithType.add(hotObj);
		hotDesk.activityWithType.add(hotObj);
		hotDesk.activityWithType.add(hotObj);
		activityObj.activityList.add(hotDesk);

		return activityObj;
	}

	@POST
	@Path("/getshortsubject")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ShortSubjectModel getShortSubject(ShortSubjectDto shortSubjectDto) {
		ShortSubjectModel subject = new ShortSubjectModel();
		// getMemberCard using Id
		System.out.println(shortSubjectDto.getMemberId());
		MemberCareer aMemberCarrer = ofy().load().type(MemberCareer.class)
				.filter("memberId", shortSubjectDto.getMemberId()).first().now();
		ArrayList<String> careerArray = aMemberCarrer.subscribedCareer;

		ArrayList<String> aCarerList = new ArrayList<String>();
		if(careerArray != null && careerArray.size() > 0)
		{
			for (String career : careerArray) {
				Career careerObj = ofy().load().type(Career.class).filter("careerCode", career).first().now();
				aCarerList.add(careerObj.getCareerName());

			}
		}
		subject.setSubscribedSubjectList(aCarerList);
		subject.setMemberId(aMemberCarrer.memberId);
		return subject;
	}

	@POST
	@Path("/createpost")
	@Consumes(MediaType.APPLICATION_JSON)
	public Post createPost(Post post) {
//		SaveServiceImplementor saveServiceImplementor = new SaveServiceImplementor();
//	  ServiceResult serviceResult = saveServiceImplementor.save(post);	
		post.setDateTime(new Date());
		post.setCreatedOn(new Date());
		post.setUpdatedOn(new Date());
		Key<Post> postKey = ofy().save().entity(post).now();
		Post postObj = ofy().load().key(postKey).now();
		return postObj;
	}

	@POST
	@Path("/updatepost")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public PostService updatePost(PostService post) {

		String result = "Track saved : " + post;
		System.out.println("Entity Coming" + result);
		return post;

	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path(value = "/comment/{webSafeKey}")
	public Post doComment(@PathParam("webSafeKey") String webSafeKey, Comment comment) {
		Post post = (Post) ofy().load().key(Key.create(webSafeKey)).now();
		comment.setCreatedOn(new Date());
		comment.setUpdatedOn(new Date());
		ofy().save().entity(comment).now();
		List<Like> likesList = ofy().load().type(Like.class).ancestor(Key.create(webSafeKey)).list();
		List<Comment> commentList = ofy().load().type(Comment.class).ancestor(Key.create(webSafeKey)).list();
		post.setLike(likesList);
		post.setComment(commentList);

		return post;
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path(value = "{postKey}/updateComment/{webSafeKey}")
	public Post updateComment(@PathParam("webSafeKey") String webSafeKey, @PathParam("postKey") String postKey,
			Comment commentDto) {
		Post post = (Post) ofy().load().key(Key.create(postKey)).now();
		Iterable<Comment> list = ofy().load().type(Comment.class).ancestor(Key.create(postKey));
		Iterator<Comment> comnt = list.iterator();
		while (comnt.hasNext()) {
			Comment c = comnt.next();
			if (c.getWebSafeKey().equals(webSafeKey)) {
				c.setCommentLikesCount(commentDto.getCommentLikesCount());
				c.setUpdatedOn(new Date());
				ofy().save().entity(c).now();
			}
		}
		List<Like> likesList = ofy().load().type(Like.class).ancestor(Key.create(postKey)).list();
		List<Comment> commentList = ofy().load().type(Comment.class).ancestor(Key.create(postKey)).list();
		post.setComment(commentList);
		post.setLike(likesList);

		return post;
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path(value = "/like/{webSafeKey}")
	public Post doLike(@PathParam("webSafeKey") String webSafeKey, Like like) {
		Post post = (Post) ofy().load().key(Key.create(webSafeKey)).now();
		List<Like> list;
		if (like.getLikeFlag()) {
			ofy().save().entity(like).now();
		} else {
			list = ofy().load().type(Like.class).ancestor(Key.create(webSafeKey)).list();

			Iterator<Like> itr = list.iterator();
			while (itr.hasNext()) {
				Like likeObj = itr.next();
				if (likeObj.getUserId().equals(like.getUserId())) {
					ofy().delete().entity(likeObj).now();
				}
			}
		}
		list = ofy().load().type(Like.class).ancestor(Key.create(webSafeKey)).list();

		List<Comment> commentList = ofy().load().type(Comment.class).ancestor(Key.create(post.getWebSafeKey())).list();
		Iterator<Comment> itrs = commentList.iterator();
		List<Reply> replyList;
		while (itrs.hasNext()) {
			Comment commentObj = itrs.next();
			replyList = ofy().load().type(Reply.class).ancestor(Key.create(commentObj.getWebSafeKey())).list();
			commentObj.setCommentsReply(replyList);
		}

		post.setComment(commentList);
		post.setLike(list);
		post.setLikeFlag(like.getLikeFlag());

		return post;
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path(value = "{postKey}/{commentKey}/reply")
	public Post doReply(@PathParam("postKey") String postKey, @PathParam("commentKey") String commentKey, Reply reply) {

		Post post = (Post) ofy().load().key(Key.create(postKey)).now();
		reply.setCommentKey(commentKey);
		reply.setCreatedOn(new Date());
		reply.setUpdatedOn(new Date());
		ofy().save().entity(reply).now();
		List<Like> likesList = ofy().load().type(Like.class).ancestor(Key.create(postKey)).list();

		List<Reply> replyList = ofy().load().type(Reply.class).ancestor(Key.create(commentKey)).list();
		Iterable<Comment> itrble = ofy().load().type(Comment.class).ancestor(Key.create(postKey));
		Iterator<Comment> itr = itrble.iterator();
		while (itr.hasNext()) {
			Comment comment = itr.next();
			if (comment.getWebSafeKey().equals(commentKey)) {
				comment.setCommentsReply(replyList);
			}
		}

		List<Comment> commentList = ofy().load().type(Comment.class).ancestor(Key.create(postKey)).list();
		post.setLike(likesList);
		post.setComment(commentList);

		return post;
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@Path(value = "{postKey}/{commentKey}/updateCommentReply/{webSafeKey}")
	public Post updateCommentReply(@PathParam("commentKey") String commentKey, @PathParam("postKey") String postKey,
			@PathParam("webSafeKey") String webSafeKey, Reply reply) {

		Post post = (Post) ofy().load().key(Key.create(postKey)).now();
		Iterable<Reply> list = ofy().load().type(Reply.class).ancestor(Key.create(commentKey));
		System.out.println("post comment" + list);
		Iterator<Reply> itr = list.iterator();
		while (itr.hasNext()) {
			Reply replyObj = itr.next();
			if (replyObj.getWebSafeKey().equals(webSafeKey)) {
				replyObj.setReplyLikesCount(reply.getReplyLikesCount());
				replyObj.setUpdatedOn(new Date());
				ofy().save().entity(replyObj).now();
			}
		}

		List<Reply> replyList = ofy().load().type(Reply.class).ancestor(Key.create(commentKey)).list();

		List<Like> likesList = ofy().load().type(Like.class).ancestor(Key.create(postKey)).list();
		List<Comment> commentList = ofy().load().type(Comment.class).ancestor(Key.create(postKey)).list();
		Iterator<Comment> itrs = commentList.iterator();
		while (itrs.hasNext()) {
			Comment commentObj = itrs.next();
			if (commentObj.getWebSafeKey().equals(commentKey)) {
				commentObj.setCommentsReply(replyList);
			}
		}

		post.setComment(commentList);
		post.setLike(likesList);

		return post;
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path(value = "/uploadFile")
	public String uploadFile() throws FileNotFoundException, IOException {
//	Storage	storage = StorageOptions.getDefaultInstance().getService();
//	 File file = new File("C:\\Users\\amol.wankhade\\Pictures\\feed2.jpg");
//     String bucketName = "https://console.cloud.google.com/storage/browser/reactrenlight.appspot.com";
//     
//     GoogleCredentials credentials = GoogleCredentials.fromStream(new FileInputStream("D:\\amo\\reactrenlight-fe29768f293c.json")).createScoped(Lists.newArrayList());
//
//     Storage storage = StorageOptions.newBuilder().setCredentials(credentials).build().getService();
//
//     Bucket bucket = storage.create(BucketInfo.of("img"));
//
//     Blob blob = bucket.create("feed2.jpg", "Hello, World!".getBytes(UTF_8), "text/plain");
		return "Hooo";
	}
}
