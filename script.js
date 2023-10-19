function calculate() {
    let firstNum = Number(document.getElementById("firstNum").value);
    let secendNum = Number(document.getElementById("secendNum").value);

    let outputElem = document.getElementById("output");

    if(firstNum < 0 || secendNum < 0) {
        outputElem.innerHTML = "Please enter only non-negative numbers.";
        return;
    }

    let numSum = firstNum + secendNum;
    let numDiff = firstNum - secendNum;
    let numMult = firstNum * secendNum;
    let numDiv = firstNum / secendNum;

    let resultHTML = `
        ${firstNum} + ${secendNum} = ${numSum}<br>
        ${firstNum} - ${secendNum} = ${numDiff}<br>
        ${firstNum} * ${secendNum} = ${numMult}<br>
        ${firstNum} / ${secendNum} = ${numDiv}
    `;

    outputElem.innerHTML = resultHTML;
}


/*
let firstNum=Number(prompt("What is the first number? "));
let secendNum=Number(prompt("What is the secend number? "));

while(firstNum<0 || secendNum<0){
    console.log("please enter only non negative numbers");
    firstNum=Number(prompt("What is the first number? "));
    secendNum=Number(prompt("What is the secend number? "));
}

let numSum=firstNum+secendNum;
let numDiff=firstNum-secendNum;
let numMult=firstNum*secendNum;
let numDiv=firstNum/secendNum;

console.log(`${firstNum} + ${secendNum}=${numSum}`);
console.log(`${firstNum} - ${secendNum}=${numDiff}`);
console.log(`${firstNum} * ${secendNum}=${numMult}`);
console.log(`${firstNum} / ${secendNum}=${numDiv}`);
*/


