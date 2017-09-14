<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	<%@ page import = "java.io.*,java.util.*" %>
<%@ page import = "javax.servlet.*,java.text.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
</head>
<body>
	<h1 align="center">City Council car Paking Ltd.</h1>
	<table>
		<table border="3" text align="center">
			<br>
			</br>
			<body bgcolor='silver'>
			<th align="center">Parking Receipt</th>
			<br>
			<tr>
				<td>Vehicle type and name</td>
				<td>Car park</td>
			</tr>
			<tr>
				<td>Date</td>
				<td><input type="text" name="date" value= <%= request.getAttribute("todayDate") %>></td>
			</tr>
			<tr>
				<td>Start Time</td>
				<td><input type="text" name="from" value="<%= request.getAttribute("from") %>"></td>
			</tr>
			<tr>
				<td>End Time</td>
				<td><input type="text" name="To"  value="<%= request.getAttribute("to") %>"></td>
			</tr>
			<TR>
			
			<td> Paid $ </td>
				<TD><input type="text" name="date" value="<%= request.getAttribute("paid") %>"></TD>
				</TR>
				<TR>
				<TH ALIGN="center">THANKS AND DRIVE SAFELY</TH>
				</table>
				</body>
				</html>