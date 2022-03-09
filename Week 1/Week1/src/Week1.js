//Week 1 JavaScript code
var clickNumber = 0;
function toggle(){
	clickNumber++;
	//var var1;
	//window.alert("The button is clicked..");
	//consolee.log("The button is clicked..");
	//document.getElementById("HW").innerHTML = "THE BUTTON IS CLICKED"; 
	//var1 = document.getElementById("HW");
	//console.log(var1);
    //var1.innerHTML = "The button is clicked " + clickNumber + " times"; 
	document.getElementsByTagName("p")[2].innerHTML = "The button is clicked " + clickNumber + " times"; 
	var pTags = document.getElementsByTagName("p");
	console.log(pTags);
	pTags[1].innerHTML = "Test";
	console.log("Array Size: " + pTags.length);
	for (var i = 0; i < pTags.length; i++){
		console.log(pTags[i].innerHTML);
		console.log(pTags[i]);
	}
}