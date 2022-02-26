
/*----- constants -----*/

let decreaseOutPut = "";

let increaseOutPut = "";

let changeOutPut = "";

/*----- app's state (global variables) -----*/

/*----- cached element references -----*/

let outPutNum = document.getElementById("outPutNum");

let increaseButton = document.getElementById("increaseButton");

let decreaseButton = document.getElementById("decreaseButton");

let inputValue = document.getElementById("inputValue");

/*----- event listeners -----*/

increaseButton.addEventListener("click", increaseOutput);

decreaseButton.addEventListener("click", decreaseOutput);

/*----- functions -----*/

// newPage();

let data = 0;

function increaseOutput() {
    // data = data+1;
    data = parseInt(outPutNum.innerHTML);
    // if(inputValue.value !== 1) {
    data = data + parseInt(inputValue.value);
    outPutNum.innerHTML = data;
    // }
}

function decreaseOutput() {
    // data = data-1;
    data = parseInt(outPutNum.innerHTML)
    // if(inputValue.value !== 1) {
    data = data - parseInt(inputValue.value);
    outPutNum.innerHTML = data;
    // }
}