if(window.EventSource){
	
	var es = new EventSource("indexsse.jsp");

	es.addEventListener("stock1", function(e){
		document.getElementById("stock1").innerHTML = e.data;
	});

	es.addEventListener("stock2", function(e){
		document.getElementById("stock2").innerHTML = e.data;
	});

}else alert('No EventSource found!');