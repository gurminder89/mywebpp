package dbAccess;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import junit.framework.TestCase;

public class CarServletTest extends TestCase {
	
	CarServlet Obj;
	Calendar calObj;
	SimpleDateFormat dateObj;
	
	protected void setUp() throws Exception {
		Obj = new CarServlet();
		calObj = Calendar.getInstance();
		dateObj = new SimpleDateFormat("hh:mm");
	}

	public void testDoPostHttpServletRequestHttpServletResponse() {
		
	}

	public void testStartTime() {
			 String expected = dateObj.format(calObj.getTime());
			 String actual = Obj.startTime();
			 assertEquals (expected,actual);
	
	}

	public void testEndTime() {
		
	}

}
