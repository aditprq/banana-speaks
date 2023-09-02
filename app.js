var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "	https://api.funtranslations.com/translate/minion.json"

console.log(txtInput);

function getTranslationURL(text){
    return serverURL + "?" +"text= " +text;
}
function errorHandler(error){
    console.log("error occured",error);
    alert("Something is wrong with the server! Try again later!")
}
function clickHandler() {
//    outputDiv.innerText = "bananalanguage "+txtInput.value;
     var inputText=txtInput.value; //taking input
     fetch(getTranslationURL(inputText))  // calling server for processing
     .then(Response => Response.json())    
     .then(json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;           //Output
        })
     .catch(errorHandler)
    };

btnTranslate.addEventListener("click",clickHandler)


