var calculator = document.querySelector("#calculator");
var push = document.querySelectorAll(".btn");
var viewer = document.querySelector(".number-result");
var clear = document.querySelector(".clear");
var ops = document.querySelectorAll(".operator");
var result = document.querySelector(".equals");
var value;
var num;
var operator;
var score;
var backspace;



// clear viewer
function clearViewer() {
   viewer.innerHTML = "";
   num = "";
   operator = "";
   score = "";
   
}



function clickButton() {
      num = this.value;
      viewer.innerHTML += num; 

}
   
   
    
function clickOperator() {
      operator = this.value;
      viewer.innerHTML += operator;
}
         

function resultNum() {
   
      value = viewer.innerHTML;
   
      value = value.replace(/[^-()\d/*+.]/g, '');
      score = eval(value);
   
      viewer.innerHTML = score;
}


function useKeyboard(e) {
   
   e.preventDefault();
   
   if (e.key === "0") {
      push[9].click();
   } else if (e.key === "1") {
      push[6].click();
   } else if (e.key === "2") {
      push[7].click();
   } else if (e.key === "3") {
      push[8].click();
   } else if (e.key === "4") {
      push[3].click();
   } else if (e.key === "5") {
      push[4].click();
   } else if (e.key === "6") {
      push[5].click();
   } else if (e.key === "7") {
      push[0].click();
   } else if (e.key === "8") {
      push[1].click();
   } else if (e.key === "9") {
      push[2].click();
   } else if (e.key === "=") {
      resultNum();
   } else if (e.key === "+") {
      ops[0].click();
   } else if (e.key === "-") {
      ops[1].click();
   } else if (e.key === "*") {
      ops[2].click();
   } else if (e.key === "/") {
      ops[3].click();
   } else if (e.key === ".") {
      push[10].click(); 
   }
}

function backspaceButton(e) {
   
   if (e.key === "Backspace" ) {
      backspace = viewer.innerHTML;
      viewer.innerHTML = backspace.slice(0, - 1);
  }
}


// add events

for (var i=0; i < push.length; i++) {
    push[i].onclick = clickButton; 
}

for (var i=0; i < ops.length; i++) {
    ops[i].onclick = clickOperator;
}

result.addEventListener('click', resultNum, false);
clear.addEventListener('click', clearViewer, false);
document.addEventListener('keyup', useKeyboard, false);
document.addEventListener('keyup', backspaceButton, false);



