package com.renlight.community.crudes;

import com.renlight.community.SuperModel;

public class ServiceResult 
{
    private SuperModel entityFromServer;
    private String messageFromServer;
    private Boolean serverResult;

    public ServiceResult()
    {
    	super();
    }
    
    public SuperModel getEntityFromServer()
    {
    	return entityFromServer;
    }

    public void setEntityFromServer(SuperModel entityFromServer)
    {
    	this.entityFromServer= entityFromServer;
    }
    
    public String getMessageFromServer() {
		return messageFromServer;
	}

	public void setMessageFromServer(String messageFromServer) {
		this.messageFromServer = messageFromServer;
	}

	public Boolean getServerResult() {
		return serverResult;
	}

	public void setServerResult(Boolean serverResult) {
		this.serverResult = serverResult;
	}

	public Boolean getServerOperationResult()
    {
    	return serverResult;
    }

    public void setServerOperationResult(Boolean serverResult)
    {
    	this.serverResult= serverResult;
    }


}
