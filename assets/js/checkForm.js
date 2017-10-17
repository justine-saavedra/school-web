//Application check

function checkGrade() {
	var grade = document.getElementById("grade").value;
	if (grade == 11 || grade == 12) {
		document.getElementById("strand").disabled = false;
	} else {
		document.getElementById("strand").disabled = true;
	}
};

function checkStrand() {
	var grade = document.getElementById("strand").value;
	if (grade === "TVL") {
		document.getElementById("TVLextra").disabled = false;
	} else {
		document.getElementById("TVLextra").disabled = true;
	}
};

