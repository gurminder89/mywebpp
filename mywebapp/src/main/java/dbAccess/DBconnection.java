package dbAccess;

import java.sql.*;

public class DBconnection {
	
	
public DBconnection() throws ClassNotFoundException, SQLException {
		
		Class.forName("com.mysql.jdbc.Driver");
		
		System.out.println("initializing database created....****");
	}
	
	public boolean searchUser(String username, String password) throws SQLException, InvalidUserException {
		PreparedStatement myStmt = null; 
		ResultSet myRS = null;
		String dbUrl = "jdbc:mysql://localhost:3306/webappdata2";
		String user = "root";
		String dbpassword = "";
		

		Connection myConn = DriverManager.getConnection(dbUrl, user, dbpassword);
		try {
			if(myConn.isClosed()) {
				System.out.print("******** Closed conneciton ....");
			}
			myStmt = myConn.prepareStatement("select * from login where username=? and password=?");
			myStmt.setString(1, username);
			myStmt.setString(2, password);
			myRS = myStmt.executeQuery();
			
			if(myRS.next()) {
				return true;
			}
			throw new InvalidUserException();
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw e;
		}finally {
			 myConn.close();
		}
	}
	

	public static void main(String[] args) {
		try {
			DBconnection sampleObj = new DBconnection();
			System.out.println("db object created.....***");
			
			if(sampleObj.searchUser("lucky","12345")) {
				System.out.println("use not found..!!");
			} else {
				System.out.println("the user is NOT in the database.");
			}
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (InvalidUserException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}	
}

	
	