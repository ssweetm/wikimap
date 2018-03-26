// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//open new window on click
function newWindow() {
    window.open("http://www.ratemyprofessors.com/ShowRatings.jsp?tid=2087729");
}