package dbAccess;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dbAccess.DBconnection;

public class LoginCheck extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public LoginCheck() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	@SuppressWarnings("null")
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String uname = request.getParameter("uname");
		String password = request.getParameter("pword");

		try {
			DBconnection newConnection = new DBconnection();
			System.out.println("uname = " + uname + " :: password" + password);
			if (newConnection.searchUser(uname, password)) {
				response.sendRedirect("extension.jsp");

			}
		} catch (SQLException e) {
			e.printStackTrace();
			request.setAttribute("errorMessage", "Error: Database Unavailable");
			request.getRequestDispatcher("error.jsp").forward(request, response);
		} catch (InvalidUserException e) {
			e.getStackTrace();
			System.out.println("Servlet .. user not found");
			request.setAttribute("errorMessage", "Error:Incorrect username or password");
			request.getRequestDispatcher("error.jsp").forward(request, response);
		} catch (Exception e) {
			e.getStackTrace();
			request.setAttribute("errorMessage", "Error:Server");
			request.getRequestDispatcher("error.jsp").forward(request, response);
		}

	}
}
