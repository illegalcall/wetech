var subjectLists = {
	fir_fir : ["Mathematics", "Physics", "Electronics", "Introduction to Programming", "Mechanics"],
	fir_sec : ["Mathematics", "Physics", "Digital Logic", "Data Structures and Algorithms", "English"],
	sec_fir : ["Mathematics", "Physics", "Object Oriented Programming with c++", "Computer Architecture"],
	sec_sec : ["Mathematics", "Microprocessors", "Object Oriented Systems", "Computer Networks"],
	thd_fir : ["Compilers", "Web Technologies 1", "Wireless Networks", "Combinatorics and Graph Theory", "Operating Systems"],
	thd_sec : ["Web Technologies 2", "Mathematical Methods", "Cryptography and Networks Security", "Automata Theory", "Artificial Intelligence"]
};

function year_change(){
	var sem = document.getElementById("sem").value;
	var yr  = document.getElementById("year").value;
	//debugger;
	if(sem === "select" || yr === "select") clear_all();
	else display(yr +"_" + sem);
}

function semester_change(){
	var sem = document.getElementById("sem").value;
	var yr  = document.getElementById("year").value;
	if(sem === "select" || yr === "select") clear_all();
	else display(yr +"_" + sem);
}

function clear_all(){
	var list = document.getElementById("subjectList");
	if(list) list.parentElement.removeChild(list); 
}

function display(req){
	clear_all();
	var list = document.createElement("OL");
	
	var heading = document.createElement("H3");
	var header = document.createTextNode('Subject Lists');
	heading.appendChild(header);
	
	list.appendChild(heading);
	
	for(var sub in subjectLists[req]){
		var text_node = document.createTextNode(subjectLists[req][sub]);
		var item = document.createElement("LI");
		item.appendChild(text_node);
		list.appendChild(item);
	}
		
	list.id = "subjectList";
	document.body.appendChild(list);
}