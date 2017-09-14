<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<script>
function myCalculate() {
    //document.getElementById("myInput").style.backgroundColor = "";
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("from").value = this.responseText;
      }
    };

    xhttp.open("POST", "CarServlet", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("minutesToPark="+document.getElementById("minutesToPark").value  + "&start="+"start");
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("to").value = this.responseText;
      }
    };

    xhttp.open("POST", "CarServlet", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("minutesToPark="+document.getElementById("minutesToPark").value  + "&end=" + "end");
}
</script>

<title>Insert title here</title>
</head>
<body>
	<h1 align="center">Welcome To The City Council Parking</h1>
	<tr>
		<table border="3" text align="center">
			<br>
			<br>
			</br>
			<body bgcolor='silver'>
			<tr>
				<td>Parking Time</td>
				<td>Two hour (free)</td>
			</tr>
			<th>Extend Parking For saturday</th></tr>
			<tr>
			<th>How many minutes would you wish to park ?</th>
			<form method="post" action="postExtentionData">
			<td><input type="text" name="minutesToPark" id="minutesToPark" onfocusout="myCalculate()"></td></tr>
				
				<td>Start Time</td>
				<td><input type="text" name="from" id="from"></td>
			</tr>
			<tr>
				<td>End Time</td>
				<td><input type="text" name="to" id="to"></td>
			<tr>
				<td></td>
				<td><input type="submit" value="Print"></td>
				</form>

			</tr>
		</table>
		<form action="Holidays.jsp">
			<input type="submit" value=" Public Holidays list">
		</form>
		<br>
		<br>
		</br>
		<marquee bgcolor=orange direction=right behavior=alternate
			scrolldelay=100> *PUBLIC HOLIDAYS UNRESTRICTED* </marquee>
		</table>
</body>
</html>