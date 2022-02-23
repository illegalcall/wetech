function pay_later_option(){
	var text_box = document.getElementById("payment_date");
	
	if(!text_box){
		text_box = document.createElement('INPUT');
		text_box.setAttribute("type", "date");
		text_box.id = "payment_date";
		
		text_box.setAttribute("placeholder", "payment date");
		
		document.getElementById("payment_form").appendChild(text_box);
	}
}

function pay_now_option(){
	var text_box = document.getElementById("payment_date");
	var label = document.getElementById("payment_label");
	
	if(text_box){
		text_box.parentElement.removeChild(text_box);
		label.parentElement.removeChild(label);
	}
}