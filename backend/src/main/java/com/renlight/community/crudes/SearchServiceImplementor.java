package com.renlight.community.crudes;

import static com.googlecode.objectify.ObjectifyService.ofy;

import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.google.appengine.api.datastore.ReadPolicy.Consistency;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.cmd.Query;
import com.renlight.community.SuperModel;

public class SearchServiceImplementor<T extends SuperModel>  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4485291570701133809L;

	
	public ArrayList<T> search(NessQuery quer)

	{
		Logger logger = Logger.getLogger("Search Logger---+++");

		logger.log(Level.SEVERE,
				"Object going to be searchrd()()" + quer.getQuerryObject().getClass().getCanonicalName());
		Long companyId = getCompanyId();

		if (companyId == null) {

			logger.log(Level.SEVERE, "COMPANY ID IS NULL");
			throw new NullPointerException("COMPANY ID NOT SET");

		}

		return objectifySearch(quer, companyId);
	}

	private Long getCompanyId() {
		
		return null;

	}

	
	public ArrayList<T> search(NessQuery searchQuerry, Long companyId) {
		// TODO Auto-generated method stub
		return objectifySearch(searchQuerry, companyId);
	}

	private ArrayList<T> objectifySearch(NessQuery searchQuerry, Long companyId) {
		Logger logger = Logger.getLogger("Search Logger");

		System.out.println("Company id--- " + companyId);
		if (companyId == null)
			throw new NullPointerException("COMPANY ID NOT SET");

		ArrayList<T> list = new ArrayList<T>();
		try {
			ofy().clear();
			Query<T> query = null;

			System.out.println("REGSTERED");
			query = (Query<T>) ofy().load().type(searchQuerry.getQuerryObject().getClass());
			query = query.filter("companyId", companyId);
			System.out.println("Filter Size" + query.count());
			if (searchQuerry.getStart() != null && searchQuerry.getEnd() != null) {

				int start = searchQuerry.getStart();
				int end = searchQuerry.getEnd();
				System.out.println("Start of querry" + start);
				System.out.println("End of querry" + end);
				query = query.offset(start).limit(end - start);

			}

			if (searchQuerry.getLimit() != null) {

				query = query.limit(searchQuerry.getLimit());
			}

			if (searchQuerry.getFilters() != null) {
				for (int i = 0; i < searchQuerry.getFilters().size(); i++) {

					String conditionField = searchQuerry.getFilters().get(i).getQuerryString().trim();
					String object = searchQuerry.getQuerryObject().getClass().getName();

					Object value = searchQuerry.getFilters().get(i).geFilterValue();
					logger.log(Level.SEVERE, "Object " + object);
					logger.log(Level.SEVERE, "Condition Field " + conditionField);
					logger.log(Level.SEVERE, "Condition Value " + value);

					query = query.filter(conditionField, value);

					logger.log(Level.SEVERE, "SIZE OF QUERRY " + query.count());

				}

			}
		
			ofy().consistency(Consistency.STRONG);

			ofy().clear();
			list.addAll(query.list());

		} catch (Exception e) {
			logger.log(Level.SEVERE, "Exception in search ");
			logger.log(Level.SEVERE, e.getMessage());

			e.printStackTrace();
		}

		return list;

	}

}
