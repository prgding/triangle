function checkTriangle() {
	cloneTag();
	let side1 = parseFloat(document.getElementById("side1").value);
	let side2 = parseFloat(document.getElementById("side2").value);
	let side3 = parseFloat(document.getElementById("side3").value);
	

	if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
		if (side1 === side2 && side1 === side3) {
			document.getElementById("result").innerHTML = "等边三角形";
		} else if (side1 === side2 || side1 === side3 || side2 === side3) {
			document.getElementById("result").innerHTML = "等腰三角形";
		} else if (side1 ** 2 + side2 ** 2 === side3 ** 2 || side1 ** 2 + side3 ** 2 === side2 ** 2 || side2 ** 2 + side3 ** 2 === side1 ** 2) {
			document.getElementById("result").innerHTML = "直角三角形";
		} else {
			document.getElementById("result").innerHTML = "普通三角形";
		}
	} else {
		document.getElementById("result").innerHTML = "不是三角形";
	}
}

function showRules() {
	cloneTag();
	document.getElementById("result").innerText = "三角形问题规则：\n\n" +
		"1. a, b, c 均大于0\n" +
		"2. a + b > c, b + c > a, c + a > b";
	
}

function Clear() {
	document.getElementById("side1").value = ''
	document.getElementById("side2").value = ''
	document.getElementById("side3").value = ''
	document.getElementById("result").innerText = ''
}

function clearResult() {
	document.getElementById("result").innerText = ''
}

function cloneTag(){
	let resultElt = document.getElementById("result");
	let newElement = resultElt.cloneNode(true);
	resultElt.parentNode.replaceChild(newElement, resultElt);
}

function handleEnterKey(event) {
	if (event.key === 'Enter') {
		checkTriangle();
	}
}

onload = function (){
	document.getElementById("side1").addEventListener("keydown", handleEnterKey);
	document.getElementById("side2").addEventListener("keydown", handleEnterKey);
	document.getElementById("side3").addEventListener("keydown", handleEnterKey);
}



