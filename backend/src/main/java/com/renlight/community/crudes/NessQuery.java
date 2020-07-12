package com.renlight.community.crudes;


import java.io.Serializable;
import java.util.Date;
import java.util.Vector;

import com.renlight.community.SuperModel;




// TODO: Auto-generated Javadoc
/**
 * Represents a Query object which will be sent from client side to search kind
 * on server side. Responsibility : Encapsulates Kind of Query and pairs of
 * {@link Filter} on that Querry
 * 
 * @version 1.0
 * @author Ajay
 * 
 * 
 */
public class NessQuery implements Serializable
{

    /** The Constant serialVersionUID. */
    private static final long serialVersionUID= -957633658995321375L;

    /** Vector of MyFilterValues encapsulating multiple filter values;. */
    protected Vector<Filter> filters;

    /**
     * Sets the limit on number of entity to be retrieved entities using this
     * querry
     */

    private Integer start;

    private Integer end;

    private Integer limit;

    /** The querry object. */
    SuperModel querryObject;


    /**
     * Instantiates a new querry.
     */

    public NessQuery()
    {
	super();
	filters= new Vector<Filter>();

    }


    public NessQuery copy()
    {
	NessQuery aNessQuery= new NessQuery();
	aNessQuery.setLimit(limit);
	aNessQuery.start(start);
	aNessQuery.end(end);
	aNessQuery.setQuerryObject(querryObject);
	Vector<Filter> aFilterVec= new Vector<>();
	aFilterVec.addAll(filters);
	aNessQuery.filters= aFilterVec;
	return aNessQuery;
    }


    public Vector<Filter> getFilters()
    {
	return filters;
    }


    public void clearAllFilters()
    {
	filters= new Vector<Filter>();
    }


    /**
     * Gets the limit.
     * 
     * @return the limit
     */
    public Integer getLimit()
    {
	return limit;
    }


    /**
     * Sets the limit.
     * 
     * @param limit
     *            the new limit
     */
    public void setLimit(Integer limit)
    {
	this.limit= limit;

    }


    /**
     * Filter.
     * 
     * @param conditionField
     *            the condition field
     * @param number
     *            the number
     * @return the querry
     */
    public NessQuery filter(String conditionField, Number[] number)
    {
	Filter filter= new Filter();
	filter.setValue(conditionField, number);
	filters.add(filter);
	return this;

    }


    /**
     * Filter.
     * 
     * @param conditionField
     *            the condition field
     * @param number
     *            the number
     * @return the querry
     */
    public NessQuery filter(String conditionField, Number number)
    {
	Filter filter= new Filter();
	filter.setValue(conditionField, number);
	filters.add(filter);
	return this;

    }


    /**
     * Filter.
     * 
     * @param conditionField
     *            the condition field
     * @param date
     *            the date
     * @return the querry
     */
    public NessQuery filter(String conditionField, Date[] date)
    {
	Filter filter= new Filter();
	filter.setValue(conditionField, date);
	filters.add(filter);
	return this;

    }


    /**
     * Filter.
     * 
     * @param conditionField
     *            the condition field
     * @param date
     *            the date
     * @return the querry
     */
    public NessQuery filter(String conditionField, Date date)
    {
	Filter filter= new Filter();
	filter.setValue(conditionField, date);
	filters.add(filter);
	return this;
    }


    /**
     * Filter.
     * 
     * @param conditionField
     *            the condition field
     * @param bool
     *            the bool
     * @return the querry
     */
    public NessQuery filter(String conditionField, Boolean[] bool)
    {
	Filter filter= new Filter();
	filter.setValue(conditionField, bool);
	filters.add(filter);
	return this;

    }


    /**
     * Filter.
     * 
     * @param conditionField
     *            the condition field
     * @param bool
     *            the bool
     * @return the querry
     */
    public NessQuery filter(String conditionField, Boolean bool)
    {
	Filter filter= new Filter();
	filter.setValue(conditionField, bool);
	filters.add(filter);
	return this;
    }


    /**
     * Filter.
     * 
     * @param conditionField
     *            the condition field
     * @param value
     *            the value
     * @return the querry
     */
    public NessQuery filter(String conditionField, String[] value)
    {
	Filter filter= new Filter();
	filter.setValue(conditionField, value);
	filters.add(filter);
	return this;
    }


    public NessQuery filter(String conditionField, int[] value)
    {
	Filter filter= new Filter();
	filter.setValue(conditionField, value);
	filters.add(filter);
	return this;
    }


    /**
     * Filter.
     * 
     * @param conditionField
     *            the condition field
     * @param value
     *            the value
     * @return the querry
     */
    public NessQuery filter(String conditionField, String value)
    {
	Filter filter= new Filter();
	filter.setValue(conditionField, value);
	filters.add(filter);
	return this;
    }


    /**
     * Sets the querry object.
     * 
     * @param obj
     *            the new querry object
     */
    public NessQuery setQuerryObject(SuperModel obj)
    {

	this.querryObject= obj;
	return this;
    }


    /**
     * Gets the querry object.
     * 
     * @return the querry object
     */
    public Object getQuerryObject()
    {

	return this.querryObject;
    }


    public Integer getStart()
    {
	return start;
    }


    public NessQuery start(Integer start)
    {
	this.start= start;
	return this;
    }


    public Integer getEnd()
    {
	return end;
    }


    public NessQuery end(Integer end)
    {
	this.end= end;
	return this;

    }


    public NessQuery limit(Integer limit)
    {
	this.limit= limit;
	return this;
    }

}
