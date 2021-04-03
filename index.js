var buttonTranslate = document.querySelector("#btn-translate");
var textarea = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#div-output");
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var url = "https://api.funtranslations.com/translate/minion.json";
function getURL(input) {
    return url + "?" + "text=" + input;
}

function translateText(input) {
    fetch(getURL(input))
    .then(response => response.json())
    .then(json => outputDiv.innerText = json.contents.translated)
    .catch(errorHandler);
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server. Try again after sometime.");
}

buttonTranslate.addEventListener("click", () => {
    var input = textarea.value;
    translateText(input);
});