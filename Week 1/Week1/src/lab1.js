var clicked = false;
 
function toggle() {
    clicked = ! clicked;
    var ind = "";
    if (!clicked) {
      ind = "not ";
    }
    document.getElementById("toggle").innerHTML = "The button is "+ind+"clicked";
} 