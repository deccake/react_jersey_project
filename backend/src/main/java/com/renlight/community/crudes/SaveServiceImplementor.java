package com.renlight.community.crudes;

import static com.googlecode.objectify.ObjectifyService.ofy;

import com.renlight.community.SuperModel;


public class SaveServiceImplementor {
	
	public ServiceResult save(SuperModel dao) {
		//System.out.println("postman worked.");
		ServiceResult retUrnFromServer = new ServiceResult();
		retUrnFromServer.setEntityFromServer(dao);
		Boolean isSavable = dao.isSaveAllowed();
			
		if (isSavable) {
			try {
				ofy().save().entity(dao).now();
				retUrnFromServer.setMessageFromServer(dao.getSaveMessage());
				retUrnFromServer.setServerOperationResult(true);
				return retUrnFromServer;
			} catch (Exception e) {
				e.printStackTrace();
				retUrnFromServer.setServerOperationResult(false);
				retUrnFromServer.setMessageFromServer("Fail To Save !");
				return null;
			}
		} else {
			retUrnFromServer.setMessageFromServer(dao.getSaveMessage());
			retUrnFromServer.setServerOperationResult(false);
			return retUrnFromServer;
		}
	}
	
	
}
