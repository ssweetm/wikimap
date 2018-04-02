
var search = "";

// function that creates the map popup when the popout map is clicked
function clickHandler(e) {
	chrome.windows.create({
		url: chrome.runtime.getURL("map/tree.html"),
		left: 600,
		height: 700,
		width: 700,
		type: "normal"
	});
};

// waits for the popout map to ask for the search term then sends it
chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "1"){
		chrome.runtime.sendMessage(search);
    }
})




// allows the x button to close the addon
function closeHandler(e) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,"toggle");
    })
};

// adds the click and close handlers to their html elements
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('popout').addEventListener('click', clickHandler);
  
  document.getElementById('closeaddon').addEventListener('click', closeHandler);
  
});


function processForm(e) {
    if (e.preventDefault) e.preventDefault();
	search=document.getElementById('searchinfo').value;
	
    document.getElementById('blank').hidden=true;
	document.getElementById('biology').hidden=false;
    return false;
}

var form = document.getElementById('searchform');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

