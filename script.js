function docalc(id){
    let numbs = document.getElementById(id);
    // alert(numbs.innerText);
    console.log(numbs.innerText)

    let textbax = document.getElementById("texts");
    textbax.value +=  numbs.innerText
}

function percentage(){
    
    let textbax = document.getElementById("texts");
    if(textbax.value){
        textbax.value = eval(textbax.value) / 100;
    }
}

function equalsto(){
    let textbax = document.getElementById("texts");
    textbax.value = eval(textbax.value)
}

function clearCalc(){
    let textbax = document.getElementById("texts");
    textbax.value = "";
}

function backspace(){
    let textbax = document.getElementById("texts");
    textbax.value = textbax.value.slice(0, -1);
}