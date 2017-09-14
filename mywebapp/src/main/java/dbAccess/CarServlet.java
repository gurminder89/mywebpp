package dbAccess;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.util.Calendar;
import java.util.Scanner;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CarServlet extends HttpServlet {
	static int timeToPark = 0;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String minutesToPark = request.getParameter("minutesToPark");
		String endTime = endTime(Integer.valueOf(minutesToPark));
		String startTime = startTime();
		System.out.println("minutesToPark::" + minutesToPark);
		
		if (request.getParameter("start") != null) {
			
			response.setContentType("text/plain");
			PrintWriter out = response.getWriter();
			out.write(startTime);
		} else {
			response.setContentType("text/plain");
			PrintWriter out = response.getWriter();
			out.write(endTime);
		}
	}

	public static String startTime() {
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
		return sdf.format(cal.getTime());

	}

	public static String endTime(int minutesToPark) {
		timeToPark = minutesToPark;
		LocalTime It = LocalTime.parse(startTime());
		LocalTime Itlater = It.plusMinutes(minutesToPark);
		String endTime = Itlater.toString();
		return endTime;

	}

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);

		System.out.println("how many minutes do you wish to park ?");
		int time = in.nextInt();
		System.out.println("Start time: " + startTime());
		System.out.println("End time: " + endTime(time));

	}

}
