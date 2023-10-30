let numbers = [1, 2, 3, 4, 5]

function arrayCounter(arr){
  let count = 0
  for (let i =0; i < arr.length; i++){
    count+=1
  }
  return count
}

console.log(arrayCounter(numbers))
