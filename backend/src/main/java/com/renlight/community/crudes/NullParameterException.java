package com.renlight.community.crudes;


public class NullParameterException extends RuntimeException
{


    public NullParameterException(String message)
    {
	super(message);
	// TODO Auto-generated constructor stub
    }


    public NullParameterException()
    {
	super("Null Parameter Not Allowed !");

    }


    private static final long serialVersionUID= -6126600034333472210L;

}
