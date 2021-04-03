var buttonTranslate = document.querySelector("#btn-translate");
var textarea = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#div-output");

buttonTranslate.addEventListener("click", () => {
    var input = textarea.value;
    outputDiv.innerText = "HHHHHH " + input;
});

