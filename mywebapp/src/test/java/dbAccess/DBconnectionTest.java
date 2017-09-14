package dbAccess;

import java.sql.SQLException;

import org.junit.Test;

import junit.framework.TestCase;

public class DBconnectionTest extends TestCase {

	DBconnection dbconnection;
	protected void setUp() throws Exception {
		super.setUp();
		dbconnection = new DBconnection();
	}
	
	@Test(expected = dbAccess.InvalidUserException.class)
	public void testSearchUser() throws SQLException, InvalidUserException {
		dbconnection.searchUser("john", "12348");
	}

}
