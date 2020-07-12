package com.renlight.community.crudes;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.ArrayList;


public class MultiSaveServiceImplementor<T> {

	

	
	public ArrayList<T> save(ArrayList<T> lisModel) {
		try {
			ofy().save().entities(lisModel).now();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		return lisModel;
	}
}
