//formula encoder
function convertFormula (equation){
	var res = encodeURIComponent(equation);
	return "https://chart.googleapis.com/chart?cht=tx&chl="+res;
}

//call Google API for show image
function showImgFormula(url) {
	if(imgFormula.childNodes[0]!=null)
		imgFormula.removeChild(imgFormula.childNodes[0]);
	urlFormula = convertFormula(url);
	var img = new Image();
	img.src = urlFormula;
	imgFormula.appendChild(img);
}

//show url to API
function showTxtFormula(url) {
	var span = document.getElementById('txtFormula');
	urlFormula = convertFormula(url);
	span.textContent = urlFormula;
	return urlFormula;
}

//clear al field
function clearFormula(){
	var inp = document.getElementById('formulaInput');
	var im = document.getElementById('imgFormula');
	var te = document.getElementById('txtFormula');
	inp.value="";
	im.removeChild(im.childNodes[0]);
	te.textContent = "";
}

//On click button
function setFormulaByButton(formula){
	document.getElementById('formulaInput').value = document.getElementById('formulaInput').value+formula;
	document.getElementById('formulaInput').oninput();
}

//Copy to clipboard window
function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }