// Listener that toggles the state of the addon, visible or not
chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "toggle"){
        toggle();
    }
})

// the iframe the addon runs in
var iframe = document.createElement('iframe'); 
iframe.style.background = "white";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none"; 
iframe.src = chrome.extension.getURL("wikiMapApp.html")

document.body.appendChild(iframe);

// function that toggles visibility of the iframe that the addon runs in
function toggle(){
    if(iframe.style.width == "0px"){
        iframe.style.width="250px";
    }
    else{
        iframe.style.width="0px";
    }
}