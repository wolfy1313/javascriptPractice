function arithGeo(nums) {
  let arithmetic = nums[1] - nums[0]
  let geometric = nums[1]/ nums[0]
  const epsilon = 1e-10
  let arithmeticCount = 0
  let geometricCount = 0
  

  for (let i = 0; i <nums.length; i++){
  if (nums[i+1]){
  if ((nums[i+1] - nums[i]) === arithmetic){
    arithmeticCount += 1
  } 
  if(Math.abs(geometric-nums[i+1]/nums[i]) < epsilon){
    geometricCount +=1
    console.log(geometricCount)
  } else {
    return -1
  }
}
  }
if ((arithmeticCount+1) === nums.length){
  return "Arithmetic"
} else if ((geometricCount +1) === nums.length){
  return "Geometric"
}
}

console.log(arithGeo([7, .7, .07, .007]))