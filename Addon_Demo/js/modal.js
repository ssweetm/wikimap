
function clickHandler(e) {
chrome.windows.create({
	url: chrome.runtime.getURL("map/tree.html"),
	left: 600,
	height: 700,
	width: 700,
	type: "normal"
 });
};

function closeHandler(e) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,"toggle");
    })
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('popout').addEventListener('click', clickHandler);
  
  document.getElementById('closeaddon').addEventListener('click', closeHandler);
  
});

