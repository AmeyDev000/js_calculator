var formulaField = document.getElementById("formula");
var answerField = document.getElementById("answer");
    
function calculate(val){
    answerField.style.color = "#adadad";

    if(val === "C"){
        formulaField.value = null;
        answerField.value = 0;
    } else if(val === "="){
        answerField.style.color = "#000";
        answerField.value = eval(formulaField.value);
    } else {
        formulaField.value += val;
        answerField.value = eval(formulaField.value);
    }
}

function copyAnswer(){
    navigator.clipboard.writeText(answerField.value);
    document.getElementById("copy-button").style.color = "#27922d";
    setTimeout(function(){
        document.getElementById("copy-button").style.color = "#adadad";
    },1000);
}