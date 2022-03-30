<%
	response.setContentType("text/event-stream"); 
	response.setCharacterEncoding("UTF-8");

	java.util.Random rand = new java.util.Random();

	try{
		while(true){
			out.print("event: stock1\n");
			out.print("data: value of <b>stock1</b> at <b>" + new java.util.Date() + "</b> is : <b>" + rand.nextInt(10000) + "</b>\n\n");

			out.print("event: stock2\n");
			out.print("data: value of <b>stock2</b> at <b>" + new java.util.Date() + "</b> is : <b>" + rand.nextInt(10000) + "</b>\n\n");

			out.flush();

			Thread.sleep(5000);
		}
	} 
	catch(Exception ex) {
		out.println(ex); 
	}
%>