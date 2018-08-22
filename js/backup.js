var push = document.querySelectorAll(".btn");
var viewer = document.querySelector(".number-result");
var clear = document.querySelector(".clear");
var ops = document.querySelectorAll(".operator");
var result = document.querySelector(".equals");
var num = "";
var latestNum = "";
var operator;
var score;



// clear viewer
function clearViewer() {
   viewer.innerHTML = ""; 
   num = "";
   latestNum = "";
   operator = "";
   score = "";
}



for (var i=0; i < push.length; i++) {
    push[i].onclick = function clickButton() {
         num += this.getAttribute("value");
         viewer.innerHTML = num;
    };
}

for (var i=0; i < ops.length; i++) {
    ops[i].onclick = function clickOperator() {
         operator = this.getAttribute("value");
         viewer.innerHTML = "";
         latestNum = num;
         num = "";
    };
}

function resultNum() {
   
   num = parseFloat(num);
   latestNum = parseFloat(latestNum);
   
      if (operator === "+") {
         score = latestNum + num;
      } else if (operator === "-") {
         score = latestNum - num;
      } else if (operator === "*") {
         score = latestNum * num;
      } else if (operator === "/") {
         score = latestNum / num;
      };
   
   viewer.innerHTML = score;    
      
}


// add events

result.addEventListener('click', resultNum, false);
clear.addEventListener('click', clearViewer, false);