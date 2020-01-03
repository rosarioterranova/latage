let imgFormula = $("#imgFormula");
let formulaInput = $("#formulaInput");
let encodedEquation;
let imgUrl;

formulaInput.on("input",onInputEntered);
$("#getUrlBtn").click(getUrl);
$("#calcFormulaBtn").click(calculate);

setFocusToInput();

function onInputEntered(){
    showImgFormula(formulaInput.val());
}

function showImgFormula(equation){
    encodedEquation = encodeURIComponent(equation);
    imgUrl = "https://chart.googleapis.com/chart?cht=tx&chl="+encodedEquation;
    imgFormula.attr("src",imgUrl);
}

function getUrl() {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", imgUrl);
  }

function calculate() {
    let wolframUrl = "https://www.wolframalpha.com/input/?i=";
    window.open(wolframUrl+encodedEquation);
  }

function setFocusToInput(){
    formulaInput.focus();
}
