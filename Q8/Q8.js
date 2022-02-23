var store = {
	Andhra_Pradesh: [
		{
			name: "Anantapur",
			des : "Anantapur district (officially:Anantapuramu district[3]) is a district in the Rayalaseema region of Andhra Pradesh, India. The district headquarters is located at Anantapur city. As of 2011 Census, the district had a population of 4,083,315, of which 28.09% is urban and a literacy rate of 64.28%"
		},
		{
			name: "Chittoor",
			des: "The district headquarters is located at Chittoor. It has a population of 4,170,468 according to 2011 census of India.[2] Chittoor district has many major temples including Tirupati, Srikalahasti and Kanipakam and other temples. It lies in the Poini river valley of southernmost Andhra Pradesh along the Chennai – Bangalore section of Chennai-Mumbai highway"
		},
		{
			name: "East Godavari",
			des: "The district of Rajahmundry (present name Rajamahendravaram) was reorganised in 1859 into two districts of Godavari and Krishna. Godavari District was further bifurcated into East and West Godavari districts in 1925."
		}
	],
	
	Arunachal_Pradesh: [
		{
			name: "Tawang",
			des: "the smallest of the 16 administrative districts of Arunachal Pradesh in northeastern India.[2] With a population of 49,977,[3] it is the eighth least populous district in the country (out of 707)"
		},
		{
			name: "East Kameng",
			des: "It shares an international border with Tibet in the north and a state border with Assam and district borders with West Kameng, Papumpare and Kurung Kumey, which was bifurcated from Lower Subansiri district on 1 April 2000."
		},
		{
			name: "Kurung Kumey",
			des: "The name of this district is derived from the Kurung and the Kumey, the two principal rivers which flow through it. According to myth the Kurung and the Kumey rivers were two sisters; during the age of marriage Kurung eloped without prior permission from her parents and Kumey got married according to her parents' wishes."
		}
	],
	
	Assam: [
		{
			name: "Cachar ",
			des: "The name 'Cachar' has derived from the Dimasa word Kachari. The district headquarters are located at Silchar. The name Cachar traces its origin to the Kachari kingdom. There are one city and two small towns in Cachar district namely Silchar, Lakhipur and Sonai."
		},
		{
			name: "Majuli",
			des: "Majuli district headed by the Deputy Commissioner (DC), which combines the offices of the District Magistrate ultimately responsible for maintaining law and order and District Collector responsible for collection of the revenue. "
		},
		{
			name: "Karimganj ",
			des: "The early history of present district of Karimganj, Assam, is hazy and obscure. With available source materials and evidence, it is difficult to construct a chronologically comprehensive account of the early history of the region. Only a broad outline, with major gaps, can be attempted."
		}
	]
};

function get_description(state, dist){
	for(var dis in store[state])
		if(store[state][dis].name === dist) return store[state][dis].des;
	return "No Description Found!";
}

function state_change(){
	clear_all();
	var state = document.getElementById("state").value;
	if(state === "select") return;
	
	var dist_list = document.getElementById("dist");
	dist_list.innerHTML = "";
	
	var option_ = document.createElement("OPTION");
	dist_list.appendChild(option_);
	
	for(var dis in store[state]){
		var option_ = document.createElement("OPTION");
		
		var text_node = document.createTextNode(store[state][dis].name);
		option_.appendChild(text_node);
		
		dist_list.appendChild(option_);
	}
}

function clear_all(){
	var heading = document.getElementById("heading");
	
	if(heading){
		heading.parentElement.removeChild(heading);
		
		var desc = document.getElementById("description");
		desc.parentElement.removeChild(desc);
	}
}

function district_change(){
	var dist = document.getElementById("dist").value;
	var describe = document.getElementById("description");
	
	if(!describe){
		var heading = document.createElement("H3");
		var header = document.createTextNode("Description : ");
		heading.id = "heading";
		heading.appendChild(header);
		
		describe = document.createElement("p");
		describe.id = "description";
		
		document.body.appendChild(heading);
		document.body.appendChild(describe);
	}
	
	describe.innerHTML = get_description(document.getElementById("state").value, dist);
}