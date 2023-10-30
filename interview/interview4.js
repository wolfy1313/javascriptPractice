function increment() {
  let count = 1
  function newCount(){
    console.log(count);
    count++
  }
  return newCount
}
const store = increment()
store()
store()
store()


const cartMode = function() {
  let items=[] // acts like a private variable
  function addItem(item) {
    items.push(item)
    return "Item added to Cart"
  }
  
  function totalItems() {
    console.log(items)
    return items.length
  }

  return {
     addItem,
     totalItems
  }

}
// console.log(items)
const cart=cartMode()
cart.addItem("Fun")
console.log(cart.addItem("Bag")) // returns Item added to Cart
console.log(cart.items) // returns undefined
console.log(cart.totalItems()) // returns 1
console.log("hi")

