package com.renlight.community.crudes;

import com.renlight.community.SuperModel;

public class EntityServiceCallResult 
{

    /**
     * 
     */
    private static final long serialVersionUID= 8848430811836226673L;

    private SuperModel entityFromServer;

    private String message;

    private Boolean serverResult;


    public EntityServiceCallResult()
    {
	super();

    }


   
    
    public SuperModel getEntityFromServer()
    {
	return entityFromServer;
    }


    /*
     * (non-Javadoc)
     * 
     * @see
     * com.slicktech.client.ness.entityoperation.daoservice.AbstractReturnFromServer
     * #setEntityFromServer(T)
     */
    
    public void setEntityFromServer(SuperModel entityFromServer)
    {
	this.entityFromServer= entityFromServer;
    }


    /*
     * (non-Javadoc)
     * 
     * @see
     * com.slicktech.client.ness.entityoperation.daoservice.AbstractReturnFromServer
     * #getMessage()
     */
    
    public String getMessage()
    {
	return message;
    }


    /*
     * (non-Javadoc)
     * 
     * @see
     * com.slicktech.client.ness.entityoperation.daoservice.AbstractReturnFromServer
     * #setMessage(java.lang.String)
     */
    
    public void setMessage(String message)
    {
	this.message= message;
    }


    /*
     * (non-Javadoc)
     * 
     * @see
     * com.slicktech.client.ness.entityoperation.daoservice.AbstractReturnFromServer
     * #getServerResult()
     */
    
    public Boolean getServerOperationResult()
    {
	return serverResult;
    }


    /*
     * (non-Javadoc)
     * 
     * @see
     * com.slicktech.client.ness.entityoperation.daoservice.AbstractReturnFromServer
     * #setServerResult(java.lang.Boolean)
     */
    
    public void setServerOperationResult(Boolean serverResult)
    {
	this.serverResult= serverResult;
    }


}
