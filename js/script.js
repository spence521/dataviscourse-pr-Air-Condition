let chart = new Chart()


d3.json("data/CA.geo.json").then(data => {
	let CAMap = new Map(data, chart);
	CAMap.drawMap();
	setTimeout(function(){
		CAMap.drawCitys();
	}, 1000);
	//setTimeout(, 2000);
	//CAMap.drawCitys();
});

