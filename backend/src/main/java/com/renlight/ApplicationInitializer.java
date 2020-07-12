package com.renlight;

import java.util.List;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import com.googlecode.objectify.ObjectifyService;

@WebListener
public class ApplicationInitializer implements ServletContextListener 
{

	@Override
	public void contextInitialized(ServletContextEvent sce) 
	{
		Registration registration = new Registration();
		
		registration.register();
		
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		// TODO Auto-generated method stub
		
	}

}
