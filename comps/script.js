// Badge Variables
var food = false;
var trash = false;
var land = false;
var label = false;
var rest = false;

// sessionStorage.setItem(0, score);
endScore = parseInt(sessionStorage.getItem(0));

function swapPage() {
   window.location.replace("./congrats.html");
}

