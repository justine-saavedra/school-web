// Show-Hide Function
var imgN;
var imgWidth;
var imgHeight;

function showImg(imgN,imgWidth,imgHeight) {
	document.getElementById("iSH"+imgN).style.display = "block";
	document.getElementById("iSH"+imgN).style.width = imgWidth;
	document.getElementById("iSH"+imgN).style.height = imgHeight;
};
function hideImg(imgN) {
	document.getElementById("iSH"+imgN).style.display = "none";
	document.getElementById("iSH"+imgN).style.width = "0px";
	document.getElementById("iSH"+imgN).style.height = "0px";
};
