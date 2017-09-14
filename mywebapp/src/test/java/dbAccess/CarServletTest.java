package dbAccess;

import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.util.Calendar;

import junit.framework.TestCase;

public class CarServletTest extends TestCase {
	
	CarServlet Obj;
	Calendar calObj;
	SimpleDateFormat dateObj;
	
	protected void setUp() throws Exception {
		Obj = new CarServlet();
		calObj = Calendar.getInstance();
		dateObj = new SimpleDateFormat("HH:mm");
	}

	public void testDoPostHttpServletRequestHttpServletResponse() {
		
	}

	public void testStartTime() {
			 String expected = dateObj.format(calObj.getTime());
			 String actual = Obj.startTime();
			 System.out.println("expected=" + expected + " : actual="+ actual);
			 assertEquals (expected,actual);
	
	}

	public void testEndTime() {
		LocalTime It = LocalTime.parse(Obj.startTime());
		LocalTime Itlater = It.plusMinutes(60);
		String expected = Itlater.toString();
		
		
		String actual = Obj.endTime(60);
		System.out.println("expected=" + expected + " : actual="+ actual);
		assertEquals (expected,actual);
	}

}
