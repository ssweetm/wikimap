// listens for the message from the main page to give the proper display based on search term
chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "biology"){
    }
	
	$.getJSON("biology.json", function( data){
		var simple_chart_config = data;
		new Treant( simple_chart_config );
	});
})

// ask for the search term after listener is enabled
chrome.runtime.sendMessage("1");

