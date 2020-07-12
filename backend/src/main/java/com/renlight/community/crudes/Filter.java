package com.renlight.community.crudes;


import java.io.Serializable;
import java.util.Date;




// TODO: Auto-generated Javadoc
/**
 * Allows us to send filters (querry String and value ) on server in data type
 * independent way Responsibility : Encapsulates pair of Query Strings and
 * Values.
 * 
 * @author Kamala
 */
public class Filter implements Serializable
{

    /**
	 * 
	 */
    private static final long serialVersionUID= -7795715315170345312L;

    /** The number value. */
    private Number numberValue;

    /** The boolean value. */
    private Boolean booleanValue;

    /** The dat value. */
    private Date datValue;

    /** The string value. */
    private String stringValue;

    /** The number list. */
    private Number[] numberList;

    private int[] integerList;

    /** The string list. */
    private String[] stringList;

    /** The boolean list. */
    private Boolean[] booleanList;

    /** The date list. */
    private Date[] dateList;

    /** The querry string. */
    private String querryString;


    /**
     * Instantiates a new filter.
     */
    public Filter()
    {

    }


    /**
     * Sets the value.
     * 
     * @param conditionField
     *            the condition field
     * @param number
     *            the number
     */
    public void setValue(String conditionField, Number[] number)
    {
	makeAllFilterNull();
	if(conditionField == null || number == null)
	    throw new NullParameterException("Parameters Cannot be Null !");
	this.numberList= number;
	this.querryString= conditionField;

    }


    /**
     * Sets the value.
     * 
     * @param conditionField
     *            the condition field
     * @param number
     *            the number
     */
    public void setValue(String conditionField, Number number)
    {
	makeAllFilterNull();
	if(conditionField == null || number == null)
	    throw new NullParameterException("Parameters Cannot be Null !");
	this.numberValue= number;
	this.querryString= conditionField;

    }


    /**
     * Sets the value.
     * 
     * @param conditionField
     *            the condition field
     * @param date
     *            the date
     */
    public void setValue(String conditionField, Date[] date)
    {
	makeAllFilterNull();
	if(conditionField == null || date == null)
	    throw new NullParameterException("Parameters Cannot be Null !");
	this.dateList= date;
	this.querryString= conditionField;

    }


    /**
     * Sets the value.
     * 
     * @param conditionField
     *            the condition field
     * @param date
     *            the date
     */
    public void setValue(String conditionField, Date date)
    {
	makeAllFilterNull();
	if(conditionField == null || date == null)
	    throw new NullParameterException("Parameters Cannot be Null !");
	this.datValue= date;
	this.querryString= conditionField;

    }


    /**
     * Sets the value.
     * 
     * @param conditionField
     *            the condition field
     * @param bool
     *            the bool
     */
    public void setValue(String conditionField, Boolean[] bool)
    {
	makeAllFilterNull();
	if(conditionField == null || bool == null)
	    throw new NullParameterException("Parameters Cannot be Null !");
	this.booleanList= bool;
	this.querryString= conditionField;

    }


    /**
     * Sets the value.
     * 
     * @param conditionField
     *            the condition field
     * @param bool
     *            the bool
     */
    public void setValue(String conditionField, Boolean bool)
    {
	makeAllFilterNull();
	if(conditionField == null || bool == null)
	    throw new NullParameterException("Parameters Cannot be Null !");
	this.booleanValue= bool;
	this.querryString= conditionField;

    }


    /**
     * Sets the value.
     * 
     * @param conditionField
     *            the condition field
     * @param value
     *            the value
     */
    public void setValue(String conditionField, String[] value)
    {
	makeAllFilterNull();
	if(conditionField == null || value == null)
	    throw new NullParameterException("Parameters Cannot be Null !");
	this.stringList= value;
	this.querryString= conditionField;
    }


    public void setValue(String conditionField, int[] value)
    {
	makeAllFilterNull();
	if(conditionField == null || value == null)
	    throw new NullParameterException("Parameters Cannot be Null !");
	this.integerList= value;
	this.querryString= conditionField;
    }


    /**
     * Sets the value.
     * 
     * @param conditionField
     *            the condition field
     * @param value
     *            the value
     */
    public void setValue(String conditionField, String value)
    {
	makeAllFilterNull();
	if(conditionField == null || value == null)
	    throw new NullParameterException("Parameters Cannot be Null !");
	this.stringValue= value;
	this.querryString= conditionField;
    }


    public String getQuerryString()
    {
	return querryString;
    }


    public void setQuerryString(String querryString)
    {
	if(querryString == null)
	    throw new NullParameterException("Parameter Cannot be Null !");
	this.querryString= querryString;
    }


    /**
     * Ge filter value.
     * 
     * @return the object
     */
    public Object geFilterValue()
    {


	if(stringList != null)
	    return stringList;
	else if(booleanList != null)
	    return booleanList;
	else if(dateList != null)
	    return dateList;
	else if(numberValue != null)
	    return numberValue;
	else if(booleanValue != null)
	    return booleanValue;
	else if(datValue != null)
	    return datValue;
	else if(stringValue != null)
	    return stringValue;
	else if(integerList != null)
	    return integerList;


	return null;
    }


    /**
     * Make all filter null.
     */
    private void makeAllFilterNull()
    {
	numberValue= null;
	booleanValue= null;
	datValue= null;
	stringValue= null;
	numberList= null;
	stringList= null;
	booleanList= null;
	dateList= null;
	integerList= null;

    }


}
