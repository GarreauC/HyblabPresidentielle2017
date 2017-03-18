

var colPartis = []

$.getJSON("data/couleursPartis.json", function(data){
	$.each(data, function(key, value){
		colPartis[key]=value;
	})
}

)

var Data = function(circonscription,anneelec, departement){
	var circ = circonscription;
	var dep = departement
	var annee = anneelec;
	var datacol = [];
	var chartdatalabels = [];
	var chartdata = [];
	var colors = [];
	var nbelemt = 0;
	var datafile = "data/"+dep+".json"

	$.getJSON(datafile, function(data) {
		for (item in data) {
			if (data[item].circonscription === circ && data[item].Annee === annee){
				
				if (data[item].Blancs_et_nuls != ""){
					datacol[nbelemt] = [];
					datacol[nbelemt][0]= parseFloat(data[item].Blancs_et_nuls).toFixed(2)
					datacol[nbelemt][1] = "Blanc et nuls"
					datacol[nbelemt][2] = "rgba(255, 99, 132, 0.5)"
					nbelemt+=1;}
				
				for (item2 in data[item]){
					var splititem = item2.split(" ");
					if (splititem[1] === "Etiquette"){

						if (data[item][item2] != ""){
							
							var voixP = splititem[0] + " voix"
							var voix = parseFloat(data[item][voixP]).toFixed(2)
							var label = data[item][item2]
							var couleur = colPartis[label];
							datacol[nbelemt] = [];
							datacol[nbelemt][0]=voix;
							datacol[nbelemt][1]=label;
							datacol[nbelemt][2]=couleur
							nbelemt+=1;
						}
						else{
							var nuance = splititem[0] + " nuance";
							if (data[item][nuance] != ""){
								var voixP = splititem[0] + " voix"
								var voix = parseFloat(data[item][voixP]).toFixed(2)
								var label = data[item][nuance]
								var couleur = colPartis[label];
								datacol[nbelemt] = [];
								datacol[nbelemt][0]=voix;
								datacol[nbelemt][1]=label;
								datacol[nbelemt][2]=couleur
								nbelemt+=1;
							}
						}
					}
				}
			}
		}

		datacol.sort(function(a,b) {
        	return b[0]-a[0]
    	});

		for (var i=0; i< nbelemt; i++){		
			chartdata.push(datacol[i][0])
			chartdatalabels.push(datacol[i][1])
			colors.push(datacol[i][2])
			}

		var chart = {
			type: "bar",
			data :{
				labels: chartdatalabels,
				datasets : [{
					label: 'Pourcentage',
					data: chartdata,
					backgroundColor: colors,
					borderColor: colors,
	            	borderWidth: 1
					}]
				},

		    options: {
				scales: {
				            xAxes: [{
				               	display: false,
				                categoryPercentage: 1.0,
	            				barPercentage: 1.0
				            }]
				        },
		    	responsive:true,
		    	maintainAspectRatio: false,

		    	legend: {
		    		display: false
		    	}
		    }

		};
		
		var id = "Chart_"+dep+"_"+circ+"_"+annee;

		var ctx = document.getElementById(id).getContext('2d');
		var myChart = new Chart(ctx, chart);
	
	})
}

var dates = [1988,1993,1997,2002,2007,2012];

for (var c=1;c<6;c++){
	for(d=0;d<6;d++){
		
		Data(c,dates[d],85)
	}
}

for (c=1;c<4;c++){
	for(d=0;d<6;d++){
		Data(c,dates[d],53)
	}
}

for (c=1;c<11;c++){
	for(d=0;d<6;d++){
		Data(c,dates[d],44)
	}
}

for (c=1;c<6;c++){
	for(d=0;d<6;d++){
		Data(c,dates[d],72)
	}
}



for (var c=1;c<8;c++){
	for(d=0;d<6;d++){
		Data(c,dates[d],49)
	}
}



