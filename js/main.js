document.getElementsByClassName("tablink")[0].click();
function openTopic(evt, topicName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("topic");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(topicName).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
}

// Get the modal
var modal = document.getElementById('id01');
// Get the video
var vid = document.getElementById('id01-1');
// When the user clicks anywhere outside of the modal, pause the video then close it
window.onclick = function (event) {
    if (event.target == modal) {
        vid.pause();
        modal.style.display = "none";
    }
}

var y, ny = 0, rotYINT;
function rotateYDIV() {
    y = document.getElementById("path818");
    clearInterval(rotYINT);
    rotYINT = setInterval(startYRotate, 10);
}
function startYRotate() {
    ny = ny + 1;
    y.style.transform = "rotateY(" + ny + "deg)";
    y.style.webkitTransform = "rotateY(" + ny + "deg)";
    y.style.OTransform = "rotateY(" + ny + "deg)";
    y.style.MozTransform = "rotateY(" + ny + "deg)";
    if (ny == 180 || ny >= 360) {
        clearInterval(rotYINT);
        if (ny >= 360) {
            ny = 0;
        }
    }
}

function s(evt) {
    // Create new Date() object.
    var d = new Date();
    // Get current seconds.
    var s = d.getSeconds();
    // Get current minutes and add the current second.
    var m = d.getMinutes() + s / 60;
    // Get current hours and add the current minute.
    var h = d.getHours() + m / 60;
    // Get the current document, so we can alter the DOM.
    var svg = evt.target.ownerDocument;
    // Rotate the second clockhand to the current seconds.
    svg.getElementById("Second").setAttribute("transform", "rotate(" + (s * 6) + ", 256, 256)");
    svg.getElementById("SecondShadow").setAttribute("transform", "rotate(" + (s * 6) + ", 253, 259)");
    // Rotate the minute clockhand to the current minute.
    svg.getElementById("Minute").setAttribute("transform", "rotate(" + (m * 6) + ", 256, 256)");
    svg.getElementById("MinuteShadow").setAttribute("transform", "rotate(" + (m * 6) + ", 254, 258)");
    // Rotate the hour clockhand to the current hour.
    svg.getElementById("Hour").setAttribute("transform", "rotate(" + (h * 30) + ", 256, 256)");
    svg.getElementById("HourShadow").setAttribute("transform", "rotate(" + (h * 30) + ", 255, 257)");
}