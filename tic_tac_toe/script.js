// Restart Game
var restart = document.querySelector("#restart");

// Grabs all squares
var squares = document.querySelectorAll("td");

// Clear all squares
function removeSqaures(){
  for(var i = 0; i < squares.length; i++){
    squares[i].textContent = "";
  }
}
restart.addEventListener("click", removeSqaures);

// check the sqaure maker
function changeMarker(){
  if(this.textContent === ""){
    this.textContent = "X"
  }else if(this.textContent === "X"){
    this.textContent = "O";
  }else {
    this.textContent = "";
  }
}

// for loop to add event listeners to all squares
for(var i = 0; i < squares.length;i++){
  squares[i].addEventListener("click", changeMarker);
}
