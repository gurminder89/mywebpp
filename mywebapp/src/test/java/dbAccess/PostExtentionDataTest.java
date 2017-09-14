package dbAccess;

import junit.framework.TestCase;

public class PostExtentionDataTest extends TestCase {

	PostExtentionData postExtentionDate;
	protected void setUp() throws Exception {
		super.setUp();
		 postExtentionDate = new PostExtentionData();
	}

	public void testCalculateFee() {
		double expected = postExtentionDate.calculateFee(60);
		double actual = 60 / 60 * 1.5;
		System.out.println("expected=" + expected + " : actual="+ actual);
		assertEquals(expected,  actual);
	}

}
