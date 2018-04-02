chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "biology"){
    }
	
	$.getJSON("biology.json", function( data){
		var simple_chart_config = data;
		new Treant( simple_chart_config );
	});
})


		chrome.runtime.sendMessage("1");

