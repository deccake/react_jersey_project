package com.renlight;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/json/metallica")
public class JSONService {
	@GET
	@Path("/gettrack")
	@Produces(MediaType.APPLICATION_JSON)
	public Track getTrackInJSON() {
		Track track = new Track();
		track.setTitle("Enter Sandman");
		track.setSinger("Metallica");

		return track;
	}

	@POST
	@Path("/postrack")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createTrackInJSON(Track track) {
		String result = "Track saved : " + track;
		System.out.println("Entity Coming"+result);
		
		return Response.status(201).entity(result).build();
	}
	
	@POST
	@Path("/createandget")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Track createAndGetTrack(Track track) {

		String result = "Track saved : " + track;
		System.out.println("Entity Coming"+result);
		return track;
		
	}
	
}