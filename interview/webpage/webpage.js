let count = 0
function display () {
  document.getElementById("display").innerHTML = count
}
function increment () {
  count += 1
  display()
}

function decrement () {
  count -= 1
  display()
}

function changeNumber (operation) {
  if (operation === "increment"){
    count += 1
  } else if (operation === "decrement") {
    count -= 1
  }
  display()
}

let myButton = document.getElementById("increment")
let myDec = document.getElementById("decrement")
let countDisplay = document.getElementById("display")

myButton.addEventListener("click", () => changeNumber("increment"))
myDec.addEventListener("click", function(){
  changeNumber("decrement")
})
