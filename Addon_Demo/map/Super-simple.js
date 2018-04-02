$.getJSON("biology.json", function( data){
	var simple_chart_config = data;
	new Treant( simple_chart_config );
});