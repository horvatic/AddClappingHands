function addClapping() {
	var noClap = document.getElementById("noClaping").value;
	noClap = noClap.replace(/ /g, " " + String.fromCharCode(0xD83D, 0xDC4F) + " ");
	document.getElementById("clapping").innerHTML = noClap;
}