const calculatorDiv = document.querySelector(".calculator");
const sideTopInput = document.querySelector(".side-top");
const sideBottomKeyboard = document.querySelector(".side-bottom");
const lineOneButton = document.querySelector(".line-one");
const lineTwoButton = document.querySelector(".line-two");
const lineThreeButton = document.querySelector(".line-three");
const lineFourButton = document.querySelector(".line-four");
const lineFiveButton = document.querySelector(".line-five");
const allButtons = document.querySelectorAll(".button"); //all buttons
const clearButton = document.querySelector(".clear");
const percentButton = document.querySelector(".percent");
const divideButton = document.querySelector(".divide");
const timesButton = document.querySelector(".times");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const dotButton = document.querySelector(".dot");
const equalButton = document.querySelector(".equal");



addEventListeners();

function addEventListeners(){
    clickButtons();
}

// https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons

function clickButtons(){
    allButtons.forEach(function(currentBtn){
        currentBtn.addEventListener("click", function(){
            const value = currentBtn;
            takeValueFromButtons(value);
        });
    });
}


let operatorsCheck = true;
function takeValueFromButtons(value){

    if(value.className === "button clear"){
        clearScreen();
    }

    if(value.className === "button equal"){
        var ourInput = sideTopInput.innerHTML;
        var lastCharacter = ourInput[ourInput.length-1];

        if(lastCharacter === "." || lastCharacter === "%" || 
           lastCharacter === "÷" || lastCharacter === "x" || 
           lastCharacter === "-" || lastCharacter === "+"){
            sideTopInput.innerHTML = sideTopInput.innerHTML.replace(/.$/, '');
        }


         sideTopInput.innerHTML = sideTopInput.innerHTML.replace(/x/g, '*').replace(/÷/g, '/');
         sideTopInput.innerHTML = eval(sideTopInput.innerHTML);
        
        
    }

    if((value.className ==="button percent" || value.className ==="button divide" || 
    value.className ==="button times" || value.className ==="button plus"|| value.className ==="button minus"
    || value.className ==="button dot") && operatorsCheck){
        
        sideTopInput.innerHTML = sideTopInput.innerHTML.concat(value.textContent);
        operatorsCheck = false;
    }

    if(value.className ==="button"){
        writeOnScreen(value); 
    }
}

function writeOnScreen(value){
    if(sideTopInput.textContent === ""){
        sideTopInput.innerHTML = value.textContent;
    }
    else{
        sideTopInput.innerHTML = sideTopInput.innerHTML.concat(value.textContent);

        //buraya bekli 232,231 gibi virgül ekleyebilirsin!
    }
    operatorsCheck = true;
}

function clearScreen(){
    sideTopInput.textContent = "";
}




