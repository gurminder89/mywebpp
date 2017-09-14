package dbAccess;

import java.io.IOException;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dbAccess.DBconnection;

public class PostExtentionData extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public PostExtentionData() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	@SuppressWarnings("null")
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String from = request.getParameter("from");
		String to = request.getParameter("to");
		String minutesToPark = request.getParameter("minutesToPark");
		System.out.println("from=" + from + "    to=" + to);

		request.setAttribute("from", from);
		request.setAttribute("to", to);
		request.setAttribute("todayDate", new SimpleDateFormat("dd/MM/yyyy").format(new Date()));
		request.setAttribute("paid", calculateFee(Integer.valueOf(minutesToPark)) + "");
		request.getRequestDispatcher("parkingrecipt.jsp").forward(request, response);

	}

	public double calculateFee(int minutesToPark) {
		double payRate = 1.5;
		double totalamount = (double) minutesToPark / 60 * payRate;
		return totalamount;
	}
}
