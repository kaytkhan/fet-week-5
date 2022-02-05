let turn = "";
let user1 = "X";
let user2 = "O";

let count = 0;
let endCount = 1;
let optionBox = document.querySelectorAll(".option-box");
let turnAlertdiv = document.getElementById("turnAlertdiv1");
let winAlertdiv = document.getElementById("winAlertdiv");
let reset = document.getElementById("reset");

let $1 = document.getElementById("1");
let $2 = document.getElementById("2");
let $3 = document.getElementById("3");
let $4 = document.getElementById("4");
let $5 = document.getElementById("5");
let $6 = document.getElementById("6");
let $7 = document.getElementById("7");
let $8 = document.getElementById("8");
let $9 = document.getElementById("9");

reset.addEventListener("click", function() {
  location.reload();
});

for (let i = 0; i < optionBox.length; i++) {
  optionBox[i].addEventListener("click", function () {    
   document.getElementById(optionBox[i].id);
    endCount = endCount +1;
    count = count + 1;
    if (count % 2 == 0) {
      //user2
      let turnAlert = `
            <div class="alert alert-secondary" role="alert">
            User 1 Turn => X
            </div>
            `
      turnAlertdiv.innerHTML = turnAlert;
      optionBox[i].innerText = "O";
      document.getElementById(optionBox[i].id).innerText = "O"
      user1Win();
    } else {
      //user1
      let turnAlert1 = `
            <div class="alert alert-secondary" role="alert">
            User 2 Turn => O
            </div>
            `;
      turnAlertdiv.innerHTML = turnAlert1;
      optionBox[i].innerText = user1;
      document.getElementById(optionBox[i].id).innerText = "X"
      user1Win();

    }
  });
}

//game win logic 
function user1Win() {
  if (
    ($1.innerText && $2.innerText && $3.innerText == "X") ||
    ($4.innerText && $5.innerText && $6.innerText == "X") ||
    ($7.innerText && $8.innerText && $9.innerText == "X") ||
    ($1.innerText && $4.innerText && $7.innerText == "X") ||
    ($2.innerText && $5.innerText && $8.innerText == "X") ||
    ($3.innerText && $6.innerText && $9.innerText == "X") ||
    ($1.innerText && $5.innerText && $9.innerText == "X") ||
    ($3.innerText && $5.innerText && $7.innerText == "X")
  ) {
    let winALert1 = `
      <div class="alert alert-success" role="alert">
      User 1 WON!
      </div>
       `;
      winAlertdiv.innerHTML = winALert1;
  }
  else if(
    ($1.innerText && $2.innerText && $3.innerText == "O") ||
    ($4.innerText && $5.innerText && $6.innerText == "O") ||
    ($7.innerText && $8.innerText && $9.innerText == "O") ||
    ($1.innerText && $4.innerText && $7.innerText == "O") ||
    ($2.innerText && $5.innerText && $8.innerText == "O") ||
    ($3.innerText && $6.innerText && $9.innerText == "O") ||
    ($1.innerText && $5.innerText && $9.innerText == "O") ||
    ($3.innerText && $5.innerText && $7.innerText == "O") 
  ) {
    let winALert2 = `
      <div class="alert alert-success" role="alert">
      User 2 WON!
      </div>
       `;
      winAlertdiv.innerHTML = winALert2;
  }
}




